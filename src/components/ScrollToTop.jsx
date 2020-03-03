import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    //delay the scroll until everything is rendered otherwise the window won't scroll to the top
    //this bug only occurs on firefox... i don't yet understand why
    //the cause may be lazy loading the pages based on route

    let timer = setTimeout( () => window.scrollTo(0, 0), 250)

  }, [pathname]);

  return null;
}