using PowerSlide.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PowerSlide.Core
{
    public class Repository
    {
        private static volatile Repository _instance;
        private static object syncRoot = new object();

        private Dictionary<String, Presentation> _presentations;

        private Repository()
        {
            _presentations = new Dictionary<string, Presentation>();
            _presentations.Add("Bewerbung", new Presentation()
            {
                Title = "Bewerbung",
                FromDate = DateTime.Parse("23/2/2021 02:00:00 PM"),
                ToDate = DateTime.Parse("23/2/2021 03:00:00 PM"),
                Location = "Linz"
            });
        }

        public static Repository GetInstance()
        {
            if (_instance == null)
            {
                lock (syncRoot)
                {
                    if (_instance == null)
                        _instance = new Repository();
                }
            }

            return _instance;
        }

        public List<Presentation> Presentations()
        {
            return _presentations.Values.OrderBy(it=>it.FromDate).ToList();
        }

        internal int GetPresentationCount(DateTime fromDate, DateTime toDate)
        {
            return _presentations.Values.Where(it => it.FromDate >= fromDate && it.ToDate <= toDate).Count();
        }

        public void AddPresentation(Presentation presentation)
        {
            lock (syncRoot)
            {
                //System.Threading.Thread.Sleep(5000); Threading Proof of Functionality
                _presentations.Add(presentation.Title, presentation);
            }
        }
    }
}
