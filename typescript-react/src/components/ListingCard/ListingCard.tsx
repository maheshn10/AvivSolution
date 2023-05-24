import {listingProps} from './ListingCard.types';
import styles from './listing-card.module.scss';



const ListingCard = ({ listing }: listingProps) => {
  return (
    <article className={styles['listing-card']}>
      <span className={styles['listing-card__price']}>
        {listing.latest_price_eur} &euro;
      </span>
      <ul className={styles['listing-card__properties']}>
        <li className={styles['listing-card__properties-item']}>
          {listing.building_type}
        </li>
        <li className={styles['listing-card__properties-item']}>
          {listing.surface_area_m2}m<sup>2</sup>
        </li>
        <li className={styles['listing-card__properties-item']}>
          {listing.rooms_count} rooms
        </li>
      </ul>
      <section className={styles['listing-card__address']}>
        <address>
          {listing.postal_address.street_address},{' '}
          {listing.postal_address.postal_code}, {listing.postal_address.city},{' '}
          {listing.postal_address?.country}
        </address>
      </section>
      <section className={styles['listing-card__description']}>
        <h3>Property description: </h3>
        <p>{listing.description}</p>
      </section>
      <div className={styles['listing-card__footer']}>
        <p className={styles['listing-card__reference']}>
          Ref: {listing.id} <br />
          Last update:{' '}
          {new Date(listing.updated_date).toLocaleDateString('en-US')}
        </p>
        <a
          href={`/${listing.id}/prices`}
          className={styles['listing-card__link']}
        >
          See history &rarr;
        </a>
      </div>
    </article>
  );
};

export default ListingCard;
