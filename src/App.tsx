import './App.scss';
import Board from './components/board';
import CardArea from './components/cardArea';

function App() {
  return (
    <div className="app-container">
      <CardArea cardDeck={[]}/>
      <Board currentCardNum={0} cardsOnBoard={[]} position={{x:10, y:10}}/>
    </div>
  );
}

export default App;
