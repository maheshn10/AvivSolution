import ListingCard from '@components/ListingCard';
import ListingForm from '@components/ListingForm';

import styles from './listings.module.scss';

import useListing from '@/hooks/useListing';

const Listings = () => {
  const { data, error, isLoading } = useListing(
    'http://localhost:8080/listings',
  );

  return (
    <main className={styles['listings']}>
      <h1 className={styles['listings__title']}>Main Listings page</h1>
      <div className={styles['listings__wrapper']}>
        <aside className={styles['listings__aside']}>
          <h2 className={styles['listings__sub-title']}>Add a listing</h2>
          <ListingForm />
        </aside>
        <section className={styles['listings__section']}>
          <h2 className={styles['listings__sub-title']}>Listings</h2>
          {error}
          {isLoading
            ? 'Loading...'
            : data.map((list, listIndex) => {
                return <ListingCard listing={list} key={listIndex} />;
              })}
        </section>
      </div>
    </main>
  );
};

export default Listings;
