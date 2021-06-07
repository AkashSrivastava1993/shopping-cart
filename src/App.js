import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import OrderPlaced from './components/OrderPlaced';
import NotFound from './components/NotFound';
function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/ordered" component={OrderPlaced} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;