# KeepAustinRecycling Development

Dependencies:

* Xamarin Forms: [https://www.xamarin.com/forms](https://www.xamarin.com/forms)
* RestSharp: [https://components.xamarin.com/gettingstarted/restsharp/true](https://components.xamarin.com/gettingstarted/restsharp/true)
* Recycle Schedule API : [https://dev.socrata.com/foundry/data.austintexas.gov/hp3m-f33e](https://dev.socrata.com/foundry/data.austintexas.gov/hp3m-f33e)

Architecture:

* Model
** Models - Contains the POCSO objects that represent OO obejcts returned by the web services.

* View
** Pages - Xamarin.Forms ContentPages used to display data to the user.

* Controller
** API - Static classes that encapsulate logic that calls web service APIs, and returns serialized objects using the RestSharp library.

Select Xamarin:

* Xamarin.Forms [ListView](https://developer.xamarin.com/guides/xamarin-forms/user-interface/listview/)
