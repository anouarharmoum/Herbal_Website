
import { RouterProvider } from 'react-router-dom'
import router from './Router/router';
import './index.css'
import Try from './Try'

function App() {

  return (
    <>
    <RouterProvider router={router}/>
      {/* <Try/> */}
       
    </>
  )
}

export default App
