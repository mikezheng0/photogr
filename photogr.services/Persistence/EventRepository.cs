using Photogr.Services.Core;
using System;
using System.Collections.Generic;
using System.Text;
using Photogr.Services.Models;
using System.Threading.Tasks;
using Photogr.Services.Data;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Photogr.Services.Extentions;

namespace Photogr.Services.Persistence
{
    public class EventRepository : IEventRepository
    {
        private readonly PhotogrContext context;

        public EventRepository(PhotogrContext context)
        {
            this.context = context;
        }

        public void Add(Event ev)
        {
            context.Events.Add(ev);
        }

        public async Task<Event> GetEvent(int id)
        {
            return await context.Events.FindAsync(id);
        }

        public async Task<QueryResult<Event>> GetEvents(EventQuery queryObj)
        {
            var result = new QueryResult<Event>();

            var query = context.Events
              .AsQueryable();

            var columnsMap = new Dictionary<string, Expression<Func<Event, object>>>()
            {
                ["title"] = e => e.Title,
                ["description"] = v => v.Description,
                ["id"] = v => v.EventID
            };

            query = query.ApplyOrdering(queryObj, columnsMap);

            result.TotalItems = await query.CountAsync();

            query = query.ApplyPaging(queryObj);

            result.Items = await query.ToListAsync();

            return result;
        }

        public void remove(Event ev)
        {
            throw new NotImplementedException();
        }
    }
}
