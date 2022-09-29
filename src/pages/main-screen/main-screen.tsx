import PageHeader from '../../components/page-header/page-header';
import MainHeader from '../../components/main-header/main-header/main-header';
import Board from '../../components/board/board';
import { Fragment } from 'react';

export default function MainScreen(): JSX.Element {
  return (
    <Fragment>
      < PageHeader />
      <main className="main">
        < MainHeader />
        <Board />
      </main>
    </Fragment>
  );
}
