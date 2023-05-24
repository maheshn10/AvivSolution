import PricesHistoryCard from '@components/PriceHistoryCard';
import { useParams } from 'react-router';

import styles from './prices-history.module.scss';

import usePriceHistory from '@/hooks/usePriceHistory';

const PricesHistory = () => {
  const { listingId } = useParams<string>();
  const { data, error, isLoading } = usePriceHistory(
    `http://localhost:8080/listings/${listingId}/prices`,
  );
  return (
    <div className={styles['container']}>
      <h1>Prices History</h1>
      <PricesHistoryCard data={data} error={error} isLoading={isLoading} />

      <a href="/" className={styles['link']}>
        &larr; Back Home
      </a>
    </div>
  );
};
export default PricesHistory;
