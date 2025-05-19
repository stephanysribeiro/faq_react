

import React from 'react';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'

//configuração do router 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Faq from './pages/faq'
import Videos from './pages/videos';
import VideosDois from './pages/videosIdeiaDois';
import HorseNet from './pages/horsenet';

import { register } from 'swiper/element/bundle'

register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "faq",
    element: <Faq />
  }, 
  {
    path: "videos",
    element: <Videos />
  }, 
  {
    path: 'videosDois',
    element: <VideosDois/>
  },
  {
    path: 'horsenet',
    element: <HorseNet/>
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

