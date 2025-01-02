import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Articles from './pages/Articles'
import  ArticleDetail, {loader as articleDetailLoader} from './pages/ArticleDetail'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'

const routes = [{
path: '/',
element: <Layout/>,
errorElement: <NotFound />,
children: [{
  path: '/',
  element: <HomePage />,
},
{
  path: '/about',
  element: <AboutPage />
},
{
  path: '/articles',
  element: <Articles />

},
{
  path: '/articles/:name',
  element: <ArticleDetail />,
  loader: articleDetailLoader
}
]
}];

function App() {
  const router = createBrowserRouter(routes);
  return (
      <RouterProvider router={router} />
  )
}

export default App
