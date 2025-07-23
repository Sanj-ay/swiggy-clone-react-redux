import {Routes, Route} from "react-router-dom"
import Landing from "./Components/Landing"
// import Error from "./Components/Error"
// import Restaurant from "./Components/Restaurant"
import { lazy, Suspense } from "react"
import { useGlobalContext } from "./Utils/GlobalContext"
import Navbar from "./Components/Navbar"
import Skeleton from "./Components/Skeleton"
import toast, { Toaster } from 'react-hot-toast';
import Cart from "./Components/Cart"
import Help from "./Components/Help"
// import SliderItemData from "./Components/SliderItemData"
// import Menu from "./Components/Menu"
// import Search from "./Components/Search"

 const Restaurant = lazy(()=>import('./Components/Restaurant'))
const SliderItemData = lazy(()=>import('./Components/SliderItemData'))
const Menu = lazy(()=>import('./Components/Menu'))
const Search = lazy(()=>import('./Components/Search'))
const Error = lazy(()=>import('./Components/Error'))

const App = () => {

  const{setLat, setLong} = useGlobalContext()


    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords?.latitude
        const long = position.coords?.longitude

        setLat(lat)
        setLong(long)
    })
    

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Landing />} path="/home" />
        <Route element={<Suspense fallback={
          <>
           <Navbar/>
           <Skeleton/>
          </>
        }>
             <Restaurant />
        </Suspense>} path="/restaurants" />
        <Route element={<Menu/>} path="/menu/:resId"/>
        <Route element={<Cart/>} path="/cart"/>
        <Route element={<Help/>} path="/help"/>
        <Route element={<Suspense fallback={
          <>
          <Navbar/>
          <Skeleton/>
          </>
        }>
          <Search/>
        </Suspense>} path="/search"/>
        <Route element={<SliderItemData/>} path="/slider-data/:itemId/:text"/>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App