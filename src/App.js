import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/portfolio",
    element: (
      <>
        <Header />
        <Portfolio />
        <Footer />
      </>
    ),
  },
], {
  future: {
    v7_startTransition: true,         // Wraps state updates in React.startTransition
    v7_relativeSplatPath: true,       // Changes relative route resolution inside splat routes
    v7_fetcherPersist: true,          // Updates fetcher persistence behavior
    v7_normalizeFormMethod: true,     // Normalizes formMethod field casing to uppercase
    v7_partialHydration: true,        // Changes RouterProvider hydration behavior
    v7_skipActionErrorRevalidation: true // Updates revalidation after 4xx/5xx action responses
  }
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
