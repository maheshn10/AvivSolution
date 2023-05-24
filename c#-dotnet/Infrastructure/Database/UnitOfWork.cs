using listingapi.Infrastructure.Database.Models;
using listingapi.Infrastructure.GenericRepository;
using System;
using System.Threading.Tasks;

namespace listingapi.Infrastructure.Database
{
    public class UnitOfWork : IUnitOfWork
    {
        private AppDbContext _context;
        public IGenericRepository<Listing> listingRepository;

        public IGenericRepository<Listing> ListingRepository
        {
            get
            {

                if (this.listingRepository == null)
                {
                    this.listingRepository = new GenericRepository<Listing>(_context);
                }
                return listingRepository;
            }
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public async Task AsyncSave()
        {
            await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            Dispose(true);

            GC.SuppressFinalize(this);
        }

        private bool disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }
    }
}
