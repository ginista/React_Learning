import { useState, useEffect } from "react";
//Custom hooks allows sharing logics across components.
const useCounter = (forwards = true) =>{ //Custom components name should start with use. File name can be anything.
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if(forwards){
            setCounter((prevCounter) => prevCounter + 1);
        }
       else{
        setCounter((prevCounter) => prevCounter - 1);
       }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [forwards])
    return counter;
};
export default useCounter;