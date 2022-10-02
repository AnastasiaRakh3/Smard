import PageHeader from '../../components/page-header/page-header';
import MainHeader from '../../components/main-header/main-header/main-header';
import Board from '../../components/board/board';

export default function MainScreen(): JSX.Element {
  return (
    <div className='page'>
      < PageHeader />
      <main className="main main--index">
        < MainHeader />
        <Board />
      </main>
    </div>
  );
}
