import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HelloWorld from './HelloWorld'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (    
    <>
      {/* <h1>Hello React</h1>       */}
      {/* <HelloWorld /> */}
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* http://localhost:3000 */}
          <Route 
            path='/' element= {<ListEmployeeComponent />}>
          </Route>

          <Route 
            path='/employees' element= {<ListEmployeeComponent />}>
          </Route>

          <Route 
            path='/add-employee' element= {<EmployeeComponent />}>
          </Route>

          <Route 
            path='/edit-employee/:id' element= {<EmployeeComponent />}>
          </Route>
          
        </Routes>
        
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
