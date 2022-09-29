export default function PageHeader(): JSX.Element {
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
        <li className="nav__item">
          <a className="nav__link nav__link--current" href="#!">
            <svg viewBox="0 0 32 32" width="20" height="20" aria-label="hidden" fill="#101820">
              <path d="M30 15a1 1 0 0 1-.58-.19L16 5.23 2.58 14.81a1 1 0 0 1-1.16-1.62l14-10a1 1 0 0 1 1.16 0l14 10A1 1 0 0 1 30 15ZM5 9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H6v3a1 1 0 0 1-1 1Z" />
              <path d="M25 29h-5a1 1 0 0 1-1-1v-7h-6v7a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V16a1 1 0 0 1 2 0v10a1 1 0 0 0 1 1h4v-7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7h4a1 1 0 0 0 1-1V16a1 1 0 0 1 2 0v10a3 3 0 0 1-3 3Z" />
            </svg>
            <span className="nav__text">Dashboard</span>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#!">
            <svg viewBox="0 0 32 32" width="20" height="20" aria-label="hidden" fill="#101820">
              <g>
                <path d="M4 28a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h7a1 1 0 0 1 .77.36L14.8 8H27a1 1 0 0 1 0 2H14.33a1 1 0 0 1-.76-.36L10.53 6H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1 1 1 0 0 1 0 2Z" />
                <path d="M25.38 28H4a1 1 0 0 1-1-1.21l3-14A1 1 0 0 1 7 12h23a1 1 0 0 1 1 1.21l-2.68 12.42A3 3 0 0 1 25.38 28ZM5.24 26h20.14a1 1 0 0 0 1-.79L28.76 14h-21Z" />
              </g>
            </svg>
            <span className="nav__text">Enquiries</span>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#!">
            <svg viewBox="0 0 32 32" width="20" height="20" aria-label="hidden" fill="#101820">
              <g>
                <path d="M10 20a1 1 0 0 1-1-.8L6.66 7.41A3 3 0 0 0 3.72 5H2a1 1 0 0 1 0-2h1.72a5 5 0 0 1 4.9 4L11 18.8a1 1 0 0 1-.8 1.2Z" />
                <path d="M11 27H9.14a4.14 4.14 0 0 1-.38-8.26l18.41-1.67L28.78 9H8a1 1 0 0 1 0-2h22a1 1 0 0 1 .77.37 1 1 0 0 1 .23.83l-2 10a1 1 0 0 1-.89.8L8.94 20.74a2.13 2.13 0 0 0 .2 4.26H11a1 1 0 0 1 0 2ZM26 30a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z" />
                <path d="M14 30a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z" />
                <path d="M23 27h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
              </g>
            </svg>
            <span className="nav__text">Buy/Sell</span>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#!">
            <svg viewBox="0 0 32 32" width="20" height="20" aria-label="hidden" fill="#101820">
              <g>
                <path d="M28 24H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3ZM4 4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
                <path d="M21 30H11a1 1 0 0 1-1-1.16l1-6a1 1 0 0 1 1-.84h8a1 1 0 0 1 1 .84l1 6A1 1 0 0 1 21 30Zm-8.82-2h7.64l-.67-4h-6.3Z" />
                <path d="M24 30H8a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2ZM30 19H2a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z" />
              </g>
            </svg>
            <span className="nav__text">Spreadsheet</span>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#!">
            <svg viewBox="0 0 32 32" width="20" height="20" aria-label="hidden" fill="#101820">
              <g>
                <path d="M16 22a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm0-10a4 4 0 1 0 4 4 4 4 0 0 0-4-4Z" />
                <path d="M21 31H11a4 4 0 0 1-4-4v-2.55a1 1 0 0 1 .63-.92l3.64-1.46a1 1 0 1 1 .73 1.86l-3 1.2V27a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1.87l-3-1.2a1 1 0 0 1 .74-1.86l3.64 1.46a1 1 0 0 1 .63.92V27A4 4 0 0 1 21 31ZM9 11a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3ZM8 19.39H5a4 4 0 0 1-4-4v-1.75a1 1 0 0 1 .63-.93l3.19-1.25a1 1 0 0 1 1.29.54 1 1 0 0 1-.56 1.3L3 14.32v1.07a2 2 0 0 0 2 2h3a1 1 0 0 1 0 2ZM23 11a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3ZM27 19.39h-3a1 1 0 0 1 0-2h3a2 2 0 0 0 2-2v-1.07l-2.55-1a1 1 0 0 1-.56-1.3 1 1 0 0 1 1.29-.57l3.19 1.25a1 1 0 0 1 .63.93v1.75a4 4 0 0 1-4 4.01Z" />
              </g>
            </svg>
            <span className="nav__text">Help</span>
          </a>
        </li>
      </ul>
    </header>
  );
}
