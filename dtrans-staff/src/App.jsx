import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage  from './pages/HomePage'
import LoginPage  from './pages/LoginPage'
import PrivateRoutes from './utils/PrivateRoutes'

function App() {

  return (
    <div>
      <div className="App">
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<HomePage/>} path="/" exact/>
                {/* <Route element={<Products/>} path="/products"/> */}
            </Route>
            <Route element={<LoginPage/>} path="/login"/>
          </Routes>
      </Router>
    </div>
    </div>
  )
}

export default App
