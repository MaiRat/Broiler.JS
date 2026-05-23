using Broiler.JavaScript.Ast.Statements;
using Broiler.JavaScript.ExpressionCompiler.Core;
using Broiler.JavaScript.ExpressionCompiler.Expressions;
using Broiler.JavaScript.LinqExpressions.LinqExpressions;
using System;

namespace Broiler.JavaScript.Compiler;

partial class FastCompiler
{
    protected override YExpression VisitWithStatement(AstWithStatement withStatement)
    {
        withBoundaries.Push(scope.Top);
        YExpression body;
        try
        {
            body = Visit(withStatement.Body) ?? YExpression.Empty;
        }
        finally
        {
            withBoundaries.Pop();
        }

        var withBindings = YExpression.Parameter(typeof(IDisposable), "#withBindings");
        var withScope = YExpression.Parameter(typeof(IDisposable), "#withScope");
        return YExpression.Block(
            new Sequence<YParameterExpression> { withBindings, withScope },
            YExpression.Assign(withBindings, JSContextBuilder.PushDirectEvalScope(CaptureDirectEvalBindings())),
            YExpression.Assign(withScope, JSContextBuilder.PushWithScope(VisitExpression(withStatement.Object))),
            YExpression.TryFinally(
                YExpression.TryFinally(body, YExpression.Call(withScope, DisposeMethod)),
                YExpression.Call(withBindings, DisposeMethod)));
    }
}
