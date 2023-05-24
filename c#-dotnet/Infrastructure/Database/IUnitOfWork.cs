using listingapi.Infrastructure.Database.Models;
using listingapi.Infrastructure.GenericRepository;
using System;
using System.Threading.Tasks;

namespace listingapi.Infrastructure.Database
{
    public interface IUnitOfWork : IDisposable
    {
        IGenericRepository<Listing> ListingRepository { get; }
        void Save();
        Task AsyncSave();
    }
}
