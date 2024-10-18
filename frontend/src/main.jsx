import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Provider} from "react-redux";
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react';

import Home from './components/Home.jsx'
import Auth from './components/Auth.jsx'
import VideoPlayer from './components/VideoPage.jsx'



const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/auth",
        element:<Auth/>
      },
      {
        path:"/video/:id",
        element:<VideoPlayer/>
      }
     
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={appRouter}/>
    </PersistGate>
  </Provider>
)
