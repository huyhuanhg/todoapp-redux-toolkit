import {
  Router,
  Switch,
} from "react-router-dom";

import history from './utils/history';

import DefaultLayout from './layouts/DefaultLayout';
import AdminLayout from './layouts/AdminLayout';
import FullLayout from './layouts/FullLayout';

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import NotFoundPage from './pages/NotFound';

import HomePage from './pages/user/Home';
import AboutPage from './pages/user/About';
import ProductDetailPage from './pages/user/ProductDetail';

import DashboardPage from './pages/admin/Dashboard';
import ProductListHocPage from './pages/admin/ProductListHoc';
import ProductListHookPage from './pages/admin/ProductListHook';
import ToDoListPage from './pages/admin/ToDoList';

import './App.css';
import 'antd/dist/antd.css';

function App(props) {
  return (
    <Router history={history}>
      <Switch>
        <DefaultLayout exact path="/" component={HomePage} />
        <DefaultLayout exact path="/about" component={AboutPage} />
        <DefaultLayout exact path="/product/:id" component={ProductDetailPage} />
      
        <AdminLayout exact path="/admin" component={DashboardPage} />
        <AdminLayout exact path="/admin/products-with-hoc" component={ProductListHocPage} />
        <AdminLayout exact path="/admin/products-with-hook" component={ProductListHookPage} />
        <AdminLayout exact path="/admin/to-do-list" component={ToDoListPage} />

        <FullLayout exact path="/login" component={LoginPage} />
        <FullLayout exact path="/register" component={RegisterPage} />
        <FullLayout component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
