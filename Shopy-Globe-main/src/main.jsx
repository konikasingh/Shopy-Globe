import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './Utils/appStore.js'
import MyProvider from './Context/MyProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MyProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </MyProvider>
    </BrowserRouter>
  </StrictMode>
)
