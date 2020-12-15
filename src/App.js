import Banner from 'Components/Banner';
import Header from 'Components/Header';
import Popup from 'Components/Popup';
import './App.css';


function App() {
  return (
    <div className="app">
      <Popup />
        <Header/>
        <Banner/>
    </div>
  );
}

export default App;
