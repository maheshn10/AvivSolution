using AutoMapper;
using listingapi.Models;
using listingapi.Infrastructure.Database.Models;
using Listing = listingapi.Infrastructure.Database.Models.Listing;

namespace listingapi.Helpers
{
    public class AppMappers : Profile 
    {
        public AppMappers() {
            CreateMap<Listing, ListingReadOnly>()
                .ForMember(dest => dest.Price, src => src.MapFrom(d => d.Price))
                .ForMember(dest => dest.PostalAddress.StreetAddress, src => src.MapFrom(d => d.StreetAddress))
                .ForMember(dest => dest.PostalAddress.PostalCode, src => src.MapFrom(d => d.PostalCode))
                .ForMember(dest => dest.PostalAddress.City, src => src.MapFrom(d => d.City))
                .ForMember(dest => dest.PostalAddress.Country, src => src.MapFrom(d => d.Country));
        } 
    }
}
