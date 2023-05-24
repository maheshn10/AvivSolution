using System.Collections.Generic;
using System.Threading.Tasks;

namespace listingapi.Infrastructure.GenericRepository
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {
        IEnumerable<TEntity> GetAll();
        Task<IEnumerable<TEntity>> GetAllAsync();
        TEntity GetById(object id);
        Task<TEntity> GetAsyncById(object id);
        TEntity Insert(TEntity obj);
        Task<TEntity> InsertAsync(TEntity obj);
        TEntity Update(TEntity obj);
        void Delete(object obj);
        void DeleteAsync(object obj);
    }
}
