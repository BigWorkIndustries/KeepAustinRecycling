using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.Linq;

using KeepAustinRecycling.API;
using KeepAustinRecycling.Models;

using Xamarin.Forms;

namespace KeepAustinRecycling.Home
{
    public partial class HomePage : ContentPage
    {
        private ListView listView = new ListView();
        public ObservableCollection<String> cell_titles = new ObservableCollection<String>();
        public HomePage()
        {
            InitializeComponent();
            this.Title = "Recycle";

			listView.ItemTapped += async (sender, e) =>
			{
				await DisplayAlert("Tapped", e.Item + " row was tapped", "OK");
				Debug.WriteLine("Tapped: " + e.Item);
				((ListView)sender).SelectedItem = null; // de-select the row
			};

			// If using ItemSelected
			//          listView.ItemSelected += (sender, e) => {
			//              if (e.SelectedItem == null) return;
			//              Debug.WriteLine("Selected: " + e.SelectedItem);
			//              ((ListView)sender).SelectedItem = null; // de-select the row
			//          };

			Padding = new Thickness(0, 20, 0, 0);
			Content = listView;
        }

        protected override void OnAppearing()
        {
            base.OnAppearing();

            listView.ItemsSource = cell_titles;

            listView.BeginRefresh();
            RecycleScheduleAPI.GETRecycleSchedule((schedules) => {

                schedules.ForEach((item) => cell_titles.Add(item.ToString()));

                listView.EndRefresh();
            });
        }
    }
}
