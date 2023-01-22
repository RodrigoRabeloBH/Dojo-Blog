import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Update from './Update';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/create'>
              <Create></Create>
            </Route>
            <Route path='/update/:id'>
              <Update></Update>
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails></BlogDetails>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
