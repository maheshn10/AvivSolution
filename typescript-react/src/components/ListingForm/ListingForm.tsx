import React, { useEffect, useState } from 'react';
import {listing} from './ListingForm.types';
import axios from 'axios';

import styles from './listing-form.module.scss';
//import { getHeapCodeStatistics } from 'v8';
// import { compareIdentifiers } from 'semver';



const ListingForm = () => {
  const [listing, setListing] = useState<listing>({
    name: '',
    postal_address: {
      street_address: '',
      postal_code: '',
      city: '',
      country: '',
    },
    description: '',
    building_type: 'STUDIO',
    latest_price_eur: 0,
    surface_area_m2: 0,
    rooms_count: 0,
    contact_phone_number: '',
  });
  const [valid, setValid] = useState<boolean>(false);

  useEffect(() => {
    // console.log(listing);
    const isValid =
      listing.name !== '' &&
      listing.postal_address.street_address !== '' &&
      listing.postal_address.postal_code !== '' &&
      listing.postal_address.city !== '' &&
      listing.description !== '' &&
      listing.latest_price_eur !== 0 &&
      listing.surface_area_m2 !== 0 &&
      listing.rooms_count !== 0 &&
      validatePhone(listing.contact_phone_number) && validateCountryCode(listing.postal_address.country);
    setValid(isValid);
  }, [listing]);

  const validatePhone = (phoneNumber: string) => {
    if (phoneNumber.trim() === '') return true;
    const regEx = /^\+[1-9]\d{10,14}$/;
    return regEx.test(phoneNumber);
  };

  const validateCountryCode = (code: string) => {
    const regEx = /^[a-zA-Z]{2,}/;
    return regEx.test(code);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const isNested =
      e.target.name === 'street_address' ||
      e.target.name === 'postal_code' ||
      e.target.name === 'city' ||
      e.target.name === 'country';
    isNested
      ? setListing({
          ...listing,
          postal_address: {
            ...listing.postal_address,
            [e.target.name]: e.target.value,
          },
        })
      : setListing({ ...listing, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(valid);
    if (!valid) {
      alert('Invalid Entry');
      return;
    }

    const Configs = {
      CONFIG: {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    };
    axios
      .post('http://localhost:8080/listings', listing, Configs.CONFIG)
      .then((response) => {
        console.log(response.data);
        alert('Inserted Successfully.')
        setListing({
          name: '',
          postal_address: {
            street_address: '',
            postal_code: '',
            city: '',
            country: '',
          },
          description: '',
          building_type: 'STUDIO',
          latest_price_eur: 0,
          surface_area_m2: 0,
          rooms_count: 0,
          contact_phone_number: '',
        });
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };

  return (
    <form className={styles['listing-form']} onSubmit={submit}>
      <div className={styles['listing-form__card']}>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className={styles['listing-form__input-text']}
            onChange={handleChange}
            value={listing.name}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="street_address">Street address:</label>
          <input
            type="text"
            name="street_address"
            className={styles['listing-form__input-text']}
            onChange={handleChange}
            value={listing.postal_address.street_address}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="postal_code">Postal Code:</label>
          <input
            type="text"
            name="postal_code"
            className={styles['listing-form__input-text']}
            onChange={handleChange}
            value={listing.postal_address.postal_code}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            className={styles['listing-form__input-text']}
            onChange={handleChange}
            value={listing.postal_address.city}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            name="country"
            className={styles['listing-form__input-text']}
            onChange={handleChange}
            value={listing.postal_address.country}
            maxLength="2"
            minLength="2"
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            className={styles['listing-form__input-text']}
            onChange={handleChange}
            value={listing.description}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="latest_price_eur">Price (&euro;):</label>
          <input
            type="number"
            name="latest_price_eur"
            className={styles['listing-form__input-text']}
            onChange={handleChange}
            value={listing.latest_price_eur}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="surface_area_m2">Area (m<sup>2</sup>):</label>
          <input
            type="number"
            name="surface_area_m2"
            className={styles['listing-form__input-text']}
            onChange={handleChange}
            value={listing.surface_area_m2}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="rooms_count">No. of Rooms:</label>
          <input
            type="number"
            name="rooms_count"
            className={styles['listing-form__input-text']}
            onChange={handleChange}
            value={listing.rooms_count}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="contact_phone_number">Phone Number:</label>
          <input
            type="text"
            name="contact_phone_number"
            className={styles['listing-form__input-text']}
            onChange={handleChange}
            value={listing.contact_phone_number}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="building_type">Building type:</label>
          <select
            name="building_type"
            className={styles['listing-form__select']}
            onChange={handleChange}
            value={listing.building_type}
          >
            <option value="STUDIO">Studio</option>
            <option value="APARTMENT">Apartment</option>
            <option value="HOUSE">House</option>
          </select>
        </div>
        <button
          type="submit"
          className={styles['listing-form__button--submit']}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default ListingForm;
