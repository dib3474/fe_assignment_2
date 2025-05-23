import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dex from './pages/Dex'
import Detail from './pages/Detail'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/dex" element={<Dex />}/>
            <Route path="/detail/:id" element={<Detail />}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  )
}

export default App