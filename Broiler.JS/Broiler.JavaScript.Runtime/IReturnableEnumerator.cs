namespace Broiler.JavaScript.Runtime;

internal interface IReturnableEnumerator
{
    JSValue Return(JSValue value);
}
