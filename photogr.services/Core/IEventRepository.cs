using Photogr.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Photogr.Services.Core
{
    public interface IEventRepository
    {
        Task<Event> GetEvent(int id);
        void Add(Event ev);
        void remove(Event ev);
        Task<QueryResult<Event>> GetEvents(EventQuery queryObj);
    }
}
