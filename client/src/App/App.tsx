import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './route/routes'
import { Provider } from 'react-redux'
import { setupStore } from './AppStore'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={setupStore()}>
      <AppRoutes />
    </Provider>
  </BrowserRouter>,
)
