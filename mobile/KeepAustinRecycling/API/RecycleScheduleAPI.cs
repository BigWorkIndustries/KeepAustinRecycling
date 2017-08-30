using System;
using RestSharp;
using KeepAustinRecycling.Models;
using System.Collections.Generic;

namespace KeepAustinRecycling.API
{
	public class RecycleScheduleAPI
	{
		private static RestClient client;
		public RecycleScheduleAPI()
		{

		}

		static RecycleScheduleAPI()
		{
			client = new RestClient("https://data.austintexas.gov/");
		}


		public static void GETRecycleSchedule(Action<List<RecycleSchedule>> callback)
		{

			// https://data.austintexas.gov/resource/hp3m-f33e.json
			var request = new RestRequest("resource/hp3m-f33e.json", Method.GET);

			var asyncHandle = client.ExecuteAsync<List<RecycleSchedule>>(request, response =>
			{

				//Console.WriteLine(response.Data.ToString());

				callback(response.Data);
			});
		}
	}
}
