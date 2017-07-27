using System;
namespace KeepAustinRecycling.Models
{
    public class RecycleSchedule
    {
        public String city { get; set; }
        public String collection_day { get; set; }
        public String collection_week { get; set; }
        public String house_no { get; set; }
        public String st_dir { get; set; }
        public String state { get; set; }
        public String street_nam { get; set; }
        public String street_typ { get; set; }
        public String zip { get; set; }

        public RecycleSchedule()
        {
        }

        public override string ToString()
        {
            return string.Format("{0} {1} {2} DAY:D {3}",this.house_no,this.street_nam,this.zip, this.collection_day);
        }

		/*
         * {"city":"AUSTIN","collection_day":"FRIDAY","collection_week":"A","house_no":"2103","st_dir":"E","state":"TX","street_nam":"10TH","street_typ":"ST","zip":"78702"}
        */
	}
}
