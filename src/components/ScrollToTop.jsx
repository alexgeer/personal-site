import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    //delay the scroll until everything is rendered otherwise the window won't scroll to the top
    //this bug only occurs on firefox when smoothscrolling is enabled... i don't yet understand why
    //if you call window.scrollTo(0,0) in the console directly, it works no problem
    //also it works if scroll-behavior is not set to smooth
    //the cause may be lazy loading the pages based on route
    // update: https://bugzilla.mozilla.org/show_bug.cgi?id=1519339
    window.scrollTo(0, 0)
  

  }, [pathname]);

  return null;
}

const ScrollOnMount = () => {
  window.scrollTo(0, 0)
  useEffect(() => {
    window.scrollTo(0, 0)

}, []);

return null

}

export {ScrollOnMount}