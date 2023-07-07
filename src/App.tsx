import './App.scss';
import QuotesContainer from './Components/QuotesContainer';

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <QuotesContainer />
        <div className="footer">
          by <a href="https://github.com/kamalov-eldar">Eldar</a>
        </div>
      </div>
    </div>
  );
}

export default App;
