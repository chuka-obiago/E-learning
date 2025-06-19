import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component will scroll the window to the top whenever the route changes.
const ScrollToTop = () => {
  // Get the current location object from React Router
  const { pathname } = useLocation();

  // useEffect hook to run code when pathname changes
  useEffect(() => {
    // Scroll to the top of the window
    window.scrollTo(0, 0);
  }, [pathname]); 
  
  return null;
};

export default ScrollToTop;
