import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './componets/Login';
import Registration from './componets/Registration';
import Home from './componets/Home';
import Navbar from './componets/Navbar';
import Blog from './componets/Blog';
import PrivateRoutes from './componets/PrivateRoutes';
import CreateUser from './crud/CreateUser';
import EditUser from './crud/EditUser';
import Filter from './crud/Filter';
import AddUser from './crud/AddUser';
import Single from './componets/Single';
import Filter_regular_expression from './componets/Filter_regular_expression';
import Dynamic_Array from './componets/Dynamic_Array';
import RepeaterForm from './componets/RepeaterForm';
import Product from './props/Product';
import Modal from './componets/Modal';
import MainForm from './componets/MainForm';

function App() {

  let isLogout = localStorage.getItem('data');

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/" exact element={<Home />} />
                <Route path="/blog" exact element={<Blog />} />
                <Route path="/user/add" exact element={<AddUser />} />
                <Route path="/user" exact element={<CreateUser />} />
                <Route path="/user/filter" exact element={<Filter />} />
                <Route path="/user/edit/:id" exact element={<EditUser />} />
                <Route path="/blog/single/:id" exact element={<Single />} />
                <Route path="/filter-regular-expression" exact element={<Filter_regular_expression />} />
                <Route path="/dynamic-array" exact element={<Dynamic_Array />} />
                <Route path="/dynamic-form" exact element={<RepeaterForm />} />
                <Route path="/products" exact element={<Product />} />
                <Route path="/modal" exact element={<Modal />} />
                <Route path="/main-form" exact element={<MainForm />} />

              </Route>
              { isLogout ? null 
              :
                <>
                  <Route path='/login' exact element={<Login />} />
                  <Route path='/registration' exact element={<Registration />} />
                </>
              }
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
