import './App.css';
import Header from './components/Calculator/Header';
import Screen from './components/Calculator/Screen';
import Zero from './components/Calculator/Zero'
import One from './components/Calculator/One'
import Two from './components/Calculator/Two'
import Three from './components/Calculator/Three'
import Four from './components/Calculator/Four'
import Five from './components/Calculator/Five'
import Six from './components/Calculator/Six'
import Seven from './components/Calculator/Seven'
import Eight from './components/Calculator/Eight'
import Nine from './components/Calculator/Nine'
import Square from './components/Calculator/Square'
import Percentage from './components/Calculator/Percentage'


const App = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <div className="screen">
          <Screen />
        </div>
        <div className="buttons">
          <table>
            <tr>
              <td><Seven /></td>
              <td><Eight /></td>
              <td><Nine /></td>
            </tr>
            <tr>
              <td><Four /></td>
              <td><Five /></td>
              <td><Six /></td>
            </tr>
            <tr>
              <td><One /></td>
              <td><Two /></td>
              <td><Three /></td>
            </tr>
            <tr>
              <td><Zero /></td>
              <td><Square /></td>
              <td><Percentage /></td>
            </tr>
          </table>
        </div>

      </div>
    </>
  );
}

export default App;
