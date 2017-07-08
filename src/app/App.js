import { version } from 'inferno';
import Component from 'inferno-component';
import '../registerServiceWorker';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>{`Welcome to Inferno ${version}`}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
