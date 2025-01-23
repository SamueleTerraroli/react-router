import { BrowserRouter, Routers, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PostsPage from './pages/PostsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' Component={HomePage} />
          <Route path='/chi-siamo' Component={AboutPage} />
          <Route path='/posts' Component={PostsPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App