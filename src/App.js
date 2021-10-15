import { Route } from 'react-router-dom'

// layout
import Layout from './layout/Layout'

// Pages
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'

const App = () => {
  return (
    <Layout>
      <Route path='/order/:id' component={OrderScreen} />
      <Route path='/shipping' component={ShippingScreen} />
      <Route path='/payment' component={PaymentScreen} />
      <Route path='/placeorder' component={PlaceOrderScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/profile' component={ProfileScreen} />
      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/cart/:id?' component={CartScreen} />
      <Route path='/admin/userlist' component={UserListScreen} />
      <Route path='/admin/user/:id/edit' component={UserEditScreen} />
      <Route path='/admin/productlist' component={ProductListScreen} exact />
      <Route
        path='/admin/productlist/:pageNumber'
        component={ProductListScreen}
        exact
      />
      <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
      <Route path='/admin/orderlist' component={OrderListScreen} />
      <Route path='/search/:keyword' component={HomeScreen} exact />
      <Route path='/page/:pageNumber' component={HomeScreen} exact />
      <Route
        path='/search/:keyword/page/:pageNumber'
        component={HomeScreen}
        exact
      />
      <Route path='/' component={HomeScreen} exact />
    </Layout>
  )
}

export default App
