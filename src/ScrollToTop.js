import { useLocation } from "react-router";
import { useEffect } from "react";

const ScrollingToTop = () => {
  console.log('mohamed salahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  const routing = useLocation();
  function action() {
    window.scrollTo(0, 0);
  }
  useEffect(() => action(), [routing]);
  return null;
};
export default ScrollingToTop;
