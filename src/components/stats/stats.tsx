export default function Stats(): JSX.Element {
  return (
    <ul className="board__stats stats">
      <li className="stats__item stats__item--clicks">
        <span className="stats__name">Total clicks</span>
        <span className="stats__count">250</span>
      </li>
      <li className="stats__item stats__item--impressions">
        <span className="stats__name">Total impressions</span>
        <span className="stats__count">32k</span>
      </li>
      <li className="stats__item stats__item--enquiries">
        <span className="stats__name">Total enquiries</span>
        <span className="stats__count">512</span>
      </li>
    </ul>
  );
}
