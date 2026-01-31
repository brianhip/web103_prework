// import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'

import ViewCreator from './pages/ViewCreator'
import ShowCreators from './pages/ShowCreators'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import Hero from './components/Hero'

function App() {
  const routesArray = [
    { 
      path: "/", 
      element: <ShowCreators /> 
    },
    { 
      path: "/new", 
      element: <AddCreator /> 
    },
    { 
      path: "/creator/:id", 
      element: <ViewCreator /> 
    },
    { 
      path: "/edit/:id", 
      element: <EditCreator /> 
    },
  ]
  let element = useRoutes(routesArray);
  return (
    <div>
      <Hero></Hero>
      {element}
    </div>
  )
}

export default App
