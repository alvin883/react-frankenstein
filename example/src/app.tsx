import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import ButtonDocs from './pages/button';
import useModalDocs from './pages/use-modal';
import useTimerDocs from './pages/use-timer';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/button' component={ButtonDocs} />
          <Route path='/use-modal' component={useModalDocs} />
          <Route path='/use-timer' component={useTimerDocs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
