import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesList } from '../components/FavoritesList';
import { OfferItem } from '../types/offer';
import { route } from '../constants/route';

const groupByCityName = (offers: OfferItem[]): Record<string, OfferItem[]> => offers.reduce<Record<string, OfferItem[]>>((acc, cur) => (
  {
    ...acc,
    [cur.city.name]: [...(acc[cur.city.name] || []), cur],
  }), {});

interface FavoritesProps {
  offers: OfferItem[];
}

export const Favorites: FC<FavoritesProps> = ({ offers }) => {
  const groupedOffers = groupByCityName(offers);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={route.main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={route.favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{offers.length}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {offers.length === 0 ? (
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main>
      ) : (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(groupedOffers).map(([key, value]) => <FavoritesList key={key} title={key} offers={value} />)}
              </ul>
            </section>
          </div>
        </main>
      )}

      <footer className="footer container">
        <Link className="footer__logo-link" to={route.main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};


