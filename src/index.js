import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import store from './redux/store';
import  { Provider } from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
<ToastContainer
theme="dark"
position="top-right"
atoClose={3000}

closeOnClick
pauseOnHover={false}

/>
{/* Same as */}
<ToastContainer />
<App />

</Provider>

</BrowserRouter>
, document.getElementById('root'));
