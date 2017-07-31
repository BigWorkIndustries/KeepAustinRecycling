using System;
using Xamarin.Geolocation;
using System;
using System.Threading.Tasks;

namespace KeepAustinRecycling.Util
{
    public class GeoUtil
    {
        public GeoUtil()
        {
        }

        public static void GetLocation(Action<Position> callback) {
			Geolocator locator = null;
#if __IOS__
			// iOS-specific code
            locator = new Geolocator { DesiredAccuracy = 50 };
#endif
#if __ANDROID__
            locator = new Geolocator (this) { ... }; // on Android;
#endif

			locator.GetPositionAsync(timeout: 10000).ContinueWith(t =>
			{
                callback(t.Result);

			}, TaskScheduler.FromCurrentSynchronizationContext());
        }
    }
}
