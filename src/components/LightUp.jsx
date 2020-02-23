
import React, {useState, useEffect} from 'react';
export default  ({ timing, children, first=false, className }) => {
    const [lighted, setLighted] = useState(false);
  
    useEffect(() => {
      if (!timing) return;
  
      let timer = setTimeout(() => {
        setLighted(true);
      }, timing);
  
      return () => clearTimeout(timer);
    }, []);
  
    let cn = lighted ? "highlighted" : "bg-text"
    if(lighted && first)
      cn += " first"
  
    return <span className={cn}>{children}</span>;
  };