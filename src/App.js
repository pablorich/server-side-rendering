import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Missing = () =>{
    return (
        <div className="App">
          <header className="App-header">
            <p>
              Error 404: La pagina no existe
            </p>
          </header>
        </div>
    );
}

const Welcome = () =>{
  return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to my page
          </p>
        </header>
      </div>
  );
}

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/" exact component={Welcome}/>
            <Route path="/" component={Missing}/>
        </Switch>
    </div>
  );
}

export default App;
