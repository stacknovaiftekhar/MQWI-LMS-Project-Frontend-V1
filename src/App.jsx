import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from "./utilities/ScrollToTop"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
// Auth
import AuthPage from './components/Auth/AuthPage'
import SignUp from './components/Auth/SignUp'
import SignIn from './components/Auth/SignIn'


import Coming from './pages/Coming'
import QuranShikkha from './components/Home/Courses/Details/QuranShikkha'
import DeenShikkha from './components/Home/Courses/Details/DeenShikkha'
import HifzulQuran from './components/Home/Courses/Details/HifzulQuran'
import AqidahCourse from './components/Home/Courses/Details/AqidahCourse'
// Social Bar
import SocialBar from "./utilities/SocialBar";


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Auth */}
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        {/* Pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/activity" element={<Coming />} />
        <Route path="/notice" element={<Coming />} />
        <Route path="/fotoya" element={<Coming />} />
        <Route path="/sadaqah" element={<Coming />} />
        {/* Courses */}
        <Route path="/courses/quran-shikkha" element={<QuranShikkha />} />
        <Route path="/courses/deen-shikkha" element={<DeenShikkha />} />
        <Route path="/courses/hifzul-quran" element={<HifzulQuran />} />
        <Route path="/courses/aqidah-course" element={<AqidahCourse />} />

        <Route path="/temp" element={<Coming />} />
        <Route path="*" element={<h1 style={{ color: "red" }} className='text-center mt-5'> 404 Not Found </h1>} />
      </Routes>
      <SocialBar />
    </BrowserRouter>
  )
}

export default App