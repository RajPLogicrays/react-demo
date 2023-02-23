import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Countrystatecity from './componets/Countrystatecity';
import Lifecycle from './life_cycle/Lifecycle';
import Did_mount from './life_cycle/Did_mound';
import Purecomponent from './life_cycle/PureComponent';
import Useeffect from './hooks/Useeffect';
import MemoH from './hooks/MemoH';
import RefH from './hooks/RefH';

function App() {

  let isLogout = localStorage.getItem('data');

  const routing = [
    {
      Path: "/",
      component: <Home />
    },
    {
      Path: "/blog",
      component: <Blog />
    },
    {
      Path: "/user/add",
      component: <AddUser />
    },
    {
      Path: "/user",
      component: <CreateUser />
    },
    {
      Path: "/user/edit/:id",
      component: <EditUser />
    },
    {
      Path: "/user/filter",
      component: <Filter />
    },
    {
      Path: "/blog/single/:id",
      component: <Single />
    },
    {
      Path: "/filter-regular-expression",
      component: <Filter_regular_expression />
    },
    {
      Path: "/dynamic-array",
      component: <Dynamic_Array />
    },
    {
      Path: "/dynamic-form",
      component: <RepeaterForm />
    },
    {
      Path: "/products",
      component: <Product />
    },
    {
      Path: "/modal",
      component: <Modal />
    },
    {
      Path: "/main-form",
      component: <MainForm />
    },
    {
      Path: "/country-state-city",
      component: <Countrystatecity />
    },
    {
      Path: "/life-cycle",
      component: <Lifecycle />
    },
    {
      Path: "/did-mount",
      component: <Did_mount />
    },
    {
      Path: "/use-effect",
      component: <Useeffect />
    },
    {
      Path: "/pure-component",
      component: <Purecomponent />
    },
    {
      Path: "/memo-hooks",
      component: <MemoH />
    },
    {
      Path: "/useref-hooks",
      component: <RefH />
    },
  ];

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<PrivateRoutes />}>
              {
                routing.map((item, index) => {
                  return <Route key={index} path={item.Path} element={item.component} />
                })
              }
            </Route>
            {isLogout ? null
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
