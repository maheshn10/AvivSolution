import {tableProps} from './PriceHistoryCard.types';
import styles from './price-history-card.module.scss';



const PriceHistoryCard = ({ data, error, isLoading }: tableProps) => {
  return (
    <div className={styles['container']}>
      {error}
      {isLoading ? (
        'Loading...'
      ) : (
        <table className={styles['price-card']}>
          <tbody>
            <tr className={styles['price-card__header']}>
              <th scope="col">Date</th>
              <th scope="col">Price (eur)</th>
            </tr>
            {data.map((priceHistory, priceHistoryIndex) => {
              return (
                <tr key={priceHistoryIndex}>
                  <td>
                    {new Date(priceHistory.created_date).toLocaleDateString(
                      'en-US',
                    )}
                  </td>
                  <td>{priceHistory.price_eur}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default PriceHistoryCard;
