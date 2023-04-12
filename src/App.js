import Body from './components/Calculator/Body/Body';
import Header from './components/Calculator/Header/Header';


const App = () => {
  return (
    <>
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <div className="wrapper">
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
