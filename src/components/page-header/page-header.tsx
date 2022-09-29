import { useState } from 'react';
import { formatName } from '../../utils';
import { navItemsOrder } from '../../const';

export default function PageHeader(): JSX.Element {
  const [currentItem, setCurrentItem] = useState<string | null>(navItemsOrder[0]);

  const checkItem = (item: string) => item === currentItem ? 'nav__link--current' : '';

  return (
    <header className="page-header">
      <div className="page-header__logo logo">
        <h1 className="logo__img">Smard</h1>
      </div>
      <div className="page-header__user user">
        <img className="user__img" src="img/avatar.png" alt="User" width="150" height="150" />
        <span className="user__name">Alexandra D.</span>
      </div>

      <ul className="page-header__nav nav">
        {navItemsOrder.map((item) => (
          <li key={item} className="nav__item" onClick={() => setCurrentItem(item)}>
            <a className={`nav__link nav__link--${item} ${checkItem(item)}`} href="#!">
              <span className="nav__text">{formatName(item)}</span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
