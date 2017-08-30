using System;
using RestSharp;
using KeepAustinRecycling.Models;
using System.Collections.Generic;

namespace KeepAustinRecycling.API
{
	public class BulkItemRouteAPI
	{
		private static RestClient client;
		public BulkItemRouteAPI()
		{

		}

		static BulkItemRouteAPI()
		{
			client = new RestClient("https://data.austintexas.gov/");
		}


		public static void GETBulkItemRoute(Action<List<BulkItemRoute>> callback)
		{

			// https://data.austintexas.gov/resource/ffwg-tmw3.json
			var request = new RestRequest("resource/ffwg-tmw3.json", Method.GET);

			var asyncHandle = client.ExecuteAsync<List<BulkItemRoute>>(request, response =>
			{

				//Console.WriteLine(response.Data.ToString());

				callback(response.Data);
			});
		}
	}

}
