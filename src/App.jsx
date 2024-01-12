import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import './scss/style.scss';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

import DefaultLayout from './layout/DefaultLayout';
import ScrollToTop from './components/ScrollToTop';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* PUBLIC */ }
      <Route path="/" element={ <DefaultLayout /> }>
        <Route index element={ <Home /> } />
        <Route path="/portfolio" element={ <Portfolio /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        {/* <Route path="login" element={ <Login /> } /> */ }
        {/* <Route path="*" element={ <NotFound /> } /> */ }
      </Route>

      {/* ADMIN */ }
      {/* <Route path="/admin" element={ <AdminLayout /> }>
        <Route index element={ <HomeAdmin /> } />
        <Route path="forsideadmin" element={ <ForsideAdmin /> } />
        <Route path="omadmin" element={ <OmAdmin /> } />
        <Route path="serviceadmin" element={ <ServiceAdmin /> } />
        <Route path="faqadmin" element={ <FaqAdmin /> } /> */}
      {/* NEWS */ }
      {/* <Route path="newsadmin" element={ <NyhederAdmin /> } />
        <Route path="newsadmin/create" element={ <NewsCreate /> } />
        <Route path="newsadmin/edit/:newsID" element={ <NewsEdit /> } />

        <Route path="kontaktadmin" element={ <KontaktAdmin /> } />
      </Route> */}
    </>

  )
)

function App () {

  return (
    <>
      <ScrollToTop />
      <RouterProvider router={ router } />
    </>
  );
}

export default App;
