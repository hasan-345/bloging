import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Logined from "./components/pages/Logined.jsx"
import Signed from "./components/pages/Signed.jsx"
import Allposts from './components/pages/Allposts.jsx'
import AddPost from './components/pages/AddPost.jsx'
import EditPost from './components/pages/EditPost.jsx'
import Post from './components/Post.jsx'
import Dashboard from "./components/pages/Dashboard.jsx"
import Home from "./components/pages/Home.jsx"
import InActive from './components/pages/InActive.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<App/>} >
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Dashboard/>} />
        <Route path='/login' element={  <Logined/> } />
        <Route path='/signup' element={  <Signed/> } />
        <Route path='/all-posts' element={  <Allposts/> } />
        <Route path='/add-post' element={  <AddPost/>} />
        <Route path='/edit-post/:slug' element={ <EditPost/> } />
        <Route path='/post/:slug/:user' element={  <Post/> } />
        <Route path='/inactive-posts' element={  <InActive/> } />

    </Route>
  ) 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <RouterProvider router={router} />
  </Provider>,
)
