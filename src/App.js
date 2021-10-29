import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Items from './components/Items/Items';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
     <AuthProvider>
       
     <Router>
        <Header></Header>
      <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route exact path="/home">
        <Home></Home>
      </Route>
      <Route path="/items">
        <Items></Items>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <PrivateRoute path="/order/:id">
        <Order></Order>
      </PrivateRoute>
e      <Route path="/contact">
        <Contact></Contact>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/serviceDetails/:id">

      
      </Route>

      <Route path="*">
       <NotFound></NotFound>
      </Route>

      </Switch>
      <Footer></Footer>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
