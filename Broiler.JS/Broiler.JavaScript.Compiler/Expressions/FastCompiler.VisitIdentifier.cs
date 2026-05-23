using Broiler.JavaScript.ExpressionCompiler.Expressions;
using Broiler.JavaScript.LinqExpressions.LinqExpressions;

namespace Broiler.JavaScript.Compiler;

partial class FastCompiler
{
    protected override YExpression VisitIdentifier(AstIdentifier identifier) => VisitIdentifier(identifier, true);

    private static bool IsScopeInsideWithBoundary(FastFunctionScope declarationScope, FastFunctionScope boundary)
    {
        if (ReferenceEquals(declarationScope, boundary))
            return false;

        for (var current = declarationScope.Parent; current != null; current = current.Parent)
        {
            if (ReferenceEquals(current, boundary))
                return true;
        }

        return false;
    }

    private bool TryGetStaticIdentifierVariable(AstIdentifier identifier, out FastFunctionScope.VariableScope variable)
    {
        variable = null;
        if (withBoundaries.Count == 0)
        {
            variable = scope.Top.GetVariable(identifier.Name, true);
            return true;
        }

        var boundary = withBoundaries.Peek();
        for (var current = scope.Top; current != null; current = current.Parent)
        {
            if (!current.TryGetOwnVariable(identifier.Name, out var ownVariable))
                continue;

            if (IsScopeInsideWithBoundary(current, boundary))
            {
                variable = ownVariable;
                return true;
            }

            return false;
        }

        return false;
    }

    private YExpression VisitIdentifierReference(AstIdentifier identifier)
    {
        if (TryGetStaticIdentifierVariable(identifier, out var variable) && variable != null)
            return variable.Expression;

        return JSContextBuilder.Index(KeyOfName(identifier.Name));
    }

    private YExpression VisitIdentifier(AstIdentifier identifier, bool throwIfMissing)
    {
        if (identifier.Name.Equals("undefined"))
            return JSUndefinedBuilder.Value;

        if (identifier.Name.Equals("this"))
            return scope.Top.ThisExpression;

        if (identifier.Name.Equals("arguments"))
        {
            var functionScope = scope.Top.RootScope;
            var vs = functionScope.CreateVariable("arguments", JSArgumentsBuilder.New(functionScope.ArgumentsExpression));
            return vs.Expression;
        }

        if (TryGetStaticIdentifierVariable(identifier, out var variable) && variable != null)
            return variable.Expression;

        return throwIfMissing
            ? JSContextBuilder.ResolveIdentifier(KeyOfName(identifier.Name))
            : JSContextBuilder.Index(KeyOfName(identifier.Name));
    }
}
