import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ErrorPage from "./components/ErrorPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <span className="hidden sm:block">
              <Tech />
            </span>
            <Works />
            <Feedbacks />
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        } />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
