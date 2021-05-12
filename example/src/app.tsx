import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import ExampleUseModal from './pages/use-modal';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/hooks/use-modal' component={ExampleUseModal} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
