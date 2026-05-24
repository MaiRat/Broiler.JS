using System;
using System.Diagnostics;
using System.Reflection;
using Broiler.JavaScript.Runtime;
using Expression = Broiler.JavaScript.ExpressionCompiler.Expressions.YExpression;

namespace Broiler.JavaScript.LinqExpressions.LinqExpressions;

public static class JSArgumentsBuilder
{
    private static Type _type;
    private static ConstructorInfo _New;
    private static ConstructorInfo _NewMapped;

    /// <summary>
    /// Initializes the builder with the concrete JSArguments type.
    /// Called by the Modules assembly via <c>[ModuleInitializer]</c>.
    /// </summary>
    internal static void Initialize(Type argumentsType)
    {
        _type = argumentsType;
        _New = argumentsType.GetConstructor([typeof(Arguments).MakeByRefType()]);
        _NewMapped = argumentsType.GetConstructor([typeof(Arguments).MakeByRefType(), typeof(JSVariable[])]);
    }

    public static Expression New(Expression args) => Expression.New(_New, args);

    public static Expression NewMapped(Expression args, Expression mappedParameters) => Expression.New(_NewMapped, args, mappedParameters);
}
