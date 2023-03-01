import './assets/css/app.css'

import React, { Suspense } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import Router from './router'
import ScrollToTop from './base-components/ScrollToTop'
import { store } from './stores/store'
import LoadingIcon from './base-components/LoadingIcon'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<LoadingIcon />}>
        <Router />
      </Suspense>
    </Provider>
    <ScrollToTop />
  </BrowserRouter>
)
