export default function MainHeader(): JSX.Element {
  return (
    <header className="main__header">
      <h2 className="visually-hidden">Panel for user</h2>

      <form className="search" action="/" method="get">
        <input className="search__field" type="search" name="search" placeholder="Search here" />
        <svg className="search__icon" viewBox="0 0 32 32" width="20" height="20" aria-label="hidden" fill="#101820">
          <g>
            <path d="M11 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10Zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8ZM28 29.74a3 3 0 0 1-1.93-.7l-6.13-5.14a3 3 0 0 1 3.86-4.6l6.13 5.14a3 3 0 0 1-1.93 5.3Zm-6.13-9.14h-.09a1 1 0 0 0-.55 1.77l6.13 5.14a1 1 0 0 0 1.41-.12 1 1 0 0 0 .23-.73 1 1 0 0 0-.36-.68l-6.13-5.15a1 1 0 0 0-.64-.23Z" />
            <path d="M20 21a1 1 0 0 1-.64-.23L17 18.82a1 1 0 0 1 1.28-1.54l2.34 1.95a1 1 0 0 1 .13 1.41A1 1 0 0 1 20 21Z" />
          </g>
        </svg>
      </form>
      <ul className="tools">
        <li className="tools__item">
          <a className="tools__link" href="#!">
            <svg viewBox="0 0 32 32" width="20" height="20" aria-label="hidden" fill="#101820">
              <g>
                <path d="M27 27H5a1 1 0 0 1-.89-1.45 18.14 18.14 0 0 0 1.89-8V14a10 10 0 0 1 20 0v3.53a18.14 18.14 0 0 0 1.89 8A1 1 0 0 1 27 27ZM6.55 25h18.9A20.14 20.14 0 0 1 24 17.53V14a8 8 0 0 0-16 0v3.53A20.14 20.14 0 0 1 6.55 25Z" />
                <path d="M16 31a5 5 0 0 1-5-5 1 1 0 0 1 2 0 3 3 0 0 0 .88 2.12 3.08 3.08 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42A5 5 0 0 1 16 31ZM16 6a1 1 0 0 1-1-1V2a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Z" />
              </g>
            </svg>
            <span className="visually-hidden">Notifications</span>
          </a>
        </li>
        <li className="tools__item">
          <a className="tools__link" href="#!">
            <svg viewBox="0 0 32 32" width="20" height="20" aria-label="hidden" fill="#101820">
              <g>
                <path d="M17 31h-2a3 3 0 0 1-3-2.64 12.68 12.68 0 0 1-1.95-.8 3 3 0 0 1-4-.25L4.69 25.9a3 3 0 0 1-.25-4 12.68 12.68 0 0 1-.8-1.9A3 3 0 0 1 1 17v-2a3 3 0 0 1 2.64-3 12.68 12.68 0 0 1 .8-1.95 3 3 0 0 1 .25-4L6.1 4.69a3 3 0 0 1 4-.25 12.68 12.68 0 0 1 1.9-.8A3 3 0 0 1 15 1h2a3 3 0 0 1 3 2.64 12.68 12.68 0 0 1 1.95.8 3 3 0 0 1 4 .25l1.36 1.41a3 3 0 0 1 .25 4 12.68 12.68 0 0 1 .8 1.95A3 3 0 0 1 31 15v2a3 3 0 0 1-2.64 3 12.68 12.68 0 0 1-.8 1.95 3 3 0 0 1-.25 4l-1.41 1.36a3 3 0 0 1-4 .25 12.68 12.68 0 0 1-1.95.8A3 3 0 0 1 17 31Zm-7.09-5.67a.94.94 0 0 1 .51.14 11 11 0 0 0 2.83 1.17 1 1 0 0 1 .75 1V28a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.39a1 1 0 0 1 .75-1 11 11 0 0 0 2.83-1.17 1 1 0 0 1 1.21.15l.28.28a1 1 0 0 0 1.42 0l1.41-1.41a1 1 0 0 0 0-1.42l-.28-.28a1 1 0 0 1-.15-1.21 11 11 0 0 0 1.17-2.83 1 1 0 0 1 1-.75H28a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1h-.39a1 1 0 0 1-1-.75 11 11 0 0 0-1.17-2.83 1 1 0 0 1 .15-1.21l.28-.28a1 1 0 0 0 0-1.42L24.49 6.1a1 1 0 0 0-1.42 0l-.28.28a1 1 0 0 1-1.21.15 11 11 0 0 0-2.83-1.17 1 1 0 0 1-.75-1V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.39a1 1 0 0 1-.75 1 11 11 0 0 0-2.83 1.17 1 1 0 0 1-1.21-.15l-.28-.31a1 1 0 0 0-1.42 0L6.1 7.51a1 1 0 0 0 0 1.42l.28.28a1 1 0 0 1 .15 1.21 11 11 0 0 0-1.17 2.83 1 1 0 0 1-1 .75H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.39a1 1 0 0 1 1 .75 11 11 0 0 0 1.17 2.83 1 1 0 0 1-.15 1.21l-.28.28a1 1 0 0 0 0 1.42l1.38 1.41a1 1 0 0 0 1.42 0l.28-.28a1 1 0 0 1 .7-.29Z" />
                <path d="M16 23a7 7 0 1 1 7-7 7 7 0 0 1-7 7Zm0-12a5 5 0 1 0 5 5 5 5 0 0 0-5-5Z" />
              </g>
            </svg>
            <span className="visually-hidden">Settings</span>
          </a>
        </li>
      </ul>
    </header>
  );
}
