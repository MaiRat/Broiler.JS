#r "nuget: BroilerJSJS.Core,1.2.1"
#r "nuget: BroilerJSJS.NodePollyfill,1.1.107"
using System;
using System.Linq;
using System.Collections.Generic;
using BroilerJSJS.Core;
using BroilerJSJS.Core.Clr;
using BroilerJSJS.Core.Core.Storage;


[Export]
public class EventEmitter: BroilerJSJS.NodePollyfill.EventEmitter {

}
