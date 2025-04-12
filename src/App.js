import React, { useEffect } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './Pages/AdminDashboard';
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";
import { v4 as uuidv4 } from "uuid";

const router = createHashRouter([
  {
    path: "/admin",
    element: (
      <>
      <AdminLogin />
      </>
    )
  },
  {
    path: "/dashboard",
    element: (
      <>
      <AdminDashboard />
      </>
    )
  },
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
  useEffect(() => {
    const sessionId = uuidv4();
    const sessionRef = doc(db, "sessions", sessionId);

    const startSession = async () => {
      await setDoc(sessionRef, {
        startedAt: new Date(),
        userAgent: navigator.userAgent,
      });
    };

    const endSession = async () => {
      await deleteDoc(sessionRef);
    };

    startSession();

    window.addEventListener("beforeunload", endSession);
    return () => {
      endSession();
      window.removeEventListener("beforeunload", endSession);
    };
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
