import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { About, Contacts, Home, HomeLayout, Projects, SingleProject, ThankYou } from "./pages"

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    children:[
      {
        
        path:"/",
        element:<Home/>,
        
      },
      {
        path:"/about",
        element:<About/>,
        
      },
      {
        path:"/projects",
        element:<Projects/>,
        
      },
      {
        path:"/contact",
        element:<Contacts/>,
        
      },
      {
        path:'/thankyou',
        element:<ThankYou/>,
      },
      {
        path:"/projects/:id",
        element:<SingleProject/>,
        
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
