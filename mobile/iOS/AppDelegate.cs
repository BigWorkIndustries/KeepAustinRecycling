using System;
using System.Collections.Generic;
using System.Linq;

using Foundation;
using KeepAustinRecycling.Util;
using PushNotification.Plugin;
using UIKit;

namespace KeepAustinRecycling.iOS
{
    [Register("AppDelegate")]
    public partial class AppDelegate : global::Xamarin.Forms.Platform.iOS.FormsApplicationDelegate
    {
        public override bool FinishedLaunching(UIApplication app, NSDictionary options)
        {
			CrossPushNotification.Initialize<CrossPushNotificationListener>();

            global::Xamarin.Forms.Forms.Init();

            // Code for starting up the Xamarin Test Cloud Agent
#if DEBUG
			Xamarin.Calabash.Start();
#endif

            LoadApplication(new App());

            return base.FinishedLaunching(app, options);
        }
    }
}
