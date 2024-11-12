import Home from "./pages/Home"
import Directors from "./pages/Directors"
import Actors from "./pages/Actors"
import Movie from "./pages/Movie"
import "./components/NavBar.css"

import { createBrowserRouter} from 'react-router-dom';

const routes = createBrowserRouter ([
   {
    path:"/",
    element:<Home />
   },
   {
    path:"/directors",
    element:<Directors />
   },
   {
    path:"/actors",
    element:<Actors />
   },
   {
    path:"/movie/:id",
    element:<Movie />
   }
])


export default routes;