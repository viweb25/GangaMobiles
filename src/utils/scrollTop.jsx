import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {

  const {pathname}= useLocation();

  useEffect (()=>{
    window.scrollTo({top:0, left:0, behaviour: "auto"})
  }, [pathname])

  return null;
}

export default ScrollTop;