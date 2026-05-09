#r "nuget: BroilerJSJS.Core,1.2.1"
using System;
using System.Linq;
using BroilerJSJS.Core;
using BroilerJSJS.Core.Clr;


[Export]
public class JSUrl {

    private Uri uri;

    public JSUrl(in Arguments a) {
        this.uri = new Uri(a.Get1().ToString());
    }

    public string Host => uri.Host;

}