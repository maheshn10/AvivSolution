using listingapi.Infrastructure.Database;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;
using listingapi.Infrastructure.Database.Models;
using System.Linq;

namespace listingapi.Infrastructure.Repository
{
    public class ListingRepository : IListingRepository
    {
        private readonly AppDbContext _context;
        public ListingRepository(AppDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Listing> GetAllListings()
        {
            return _context.Listings.ToList();
        }
        public Listing GetListingById(int id)
        {
            return _context.Listings.Find(id);
        }
        public void AddListing(Listing listingEntity)
        {
            if (listingEntity != null)
            {
                _context.Listings.Add(listingEntity);
            }
        }
        public void UpdateListing(Listing listingEntity)
        {
            if (listingEntity != null)
            {
                _context.Entry(listingEntity).State = EntityState.Modified;
            }
        }
        public void DeleteListing(int id)
        {
            Listing listingEntity = _context.Listings.Find(id);
            _context.Listings.Remove(listingEntity);
        }
        public void Save()
        {
            _context.SaveChanges();
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
        public void Dispose()
        {
            Dispose(true);

            GC.SuppressFinalize(this);
        }
    }
}
