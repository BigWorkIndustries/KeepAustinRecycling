using Xamarin.Forms;
using KeepAustinRecycling.Home;
using KeepAustinRecycling.Util;
using System;

namespace KeepAustinRecycling
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            MainPage = new NavigationPage(new HomePage());

            GeoUtil.GetLocation((position) =>{
				Console.WriteLine("Position Status: {0}", position.Timestamp);
				Console.WriteLine("Position Latitude: {0}", position.Latitude);
				Console.WriteLine("Position Longitude: {0}", position.Longitude);
            });
        }

        protected override void OnStart()
        {
            // Handle when your app starts
        }

        protected override void OnSleep()
        {
            // Handle when your app sleeps
        }

        protected override void OnResume()
        {
            // Handle when your app resumes
        }
    }
}
