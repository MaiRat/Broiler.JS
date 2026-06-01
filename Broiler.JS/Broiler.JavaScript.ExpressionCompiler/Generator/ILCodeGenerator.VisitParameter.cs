using System;
using Broiler.JavaScript.ExpressionCompiler.Expressions;
using System.Reflection;

namespace Broiler.JavaScript.ExpressionCompiler.Generator;

public partial class ILCodeGenerator
{
    private static readonly Type JsContextType = Type.GetType("Broiler.JavaScript.Engine.JSContext, Broiler.JavaScript.Engine", true)!;
    private static readonly Type KeyStringsType = Type.GetType("Broiler.JavaScript.Storage.KeyStrings, Broiler.JavaScript.Storage", true)!;
    private static readonly Type StringSpanType = Type.GetType("Broiler.JavaScript.Ast.Misc.StringSpan, Broiler.JavaScript.Ast", true)!;
    private static readonly Type KeyStringType = Type.GetType("Broiler.JavaScript.Storage.KeyString, Broiler.JavaScript.Storage", true)!;
    private static readonly MethodInfo ResolveIdentifierMethod = JsContextType
        .GetMethod("ResolveIdentifier", [KeyStringType.MakeByRefType()])
        ?? throw new InvalidOperationException("JSContext.ResolveIdentifier(KeyString) not found");
    private static readonly MethodInfo KeyStringsGetOrCreateMethod = KeyStringsType
        .GetMethod("GetOrCreate", [StringSpanType.MakeByRefType()])
        ?? throw new InvalidOperationException("KeyStrings.GetOrCreate(StringSpan) not found");

    protected override CodeInfo VisitParameter(YParameterExpression yParameterExpression)
    {
        // check if it is marked as a closure...

        if (closureRepository.TryGet(yParameterExpression, out var ve))
        {
            InitializeClosure(yParameterExpression);
            return Visit(ve);
        }

        var v = variables[yParameterExpression];

        il.Comment($"Load {v.Name}");
        var isValueType = yParameterExpression.Type.IsValueType;
        if (isValueType)
        {
            if (v.IsArgument)
            {
                il.EmitLoadArg(v.Index);
                return true;
            }

            il.EmitLoadLocal(v.LocalBuilder.LocalIndex);
            return true;
        }
        if (v.IsArgument)
        {
            // irrespective of RequiresAddress
            // retype always load ref...
            il.EmitLoadArg(v.Index);
            return true;
        }

        il.EmitLoadLocal(v.LocalBuilder.LocalIndex);
        if (v.IsReference)
        {
            throw new NotSupportedException();
        }

        return true;
    }
}
