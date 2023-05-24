using listingapi.Infrastructure.Database.Models;
using System;
using System.Collections.Generic;

namespace listingapi.Infrastructure.Repository
{
    public interface IListingRepository:IDisposable
    {
        IEnumerable<Listing> GetAllListings();
        Listing GetListingById(int id);
        void AddListing(Listing listingEntity);
        void UpdateListing(Listing listingEntity);
        void DeleteListing(int id);
        void Save();
    }
}
