import { useCallback, useEffect, useState } from "react"


const useWindowResize = () => {
  const [containerHeight, setContainerHeight] = useState(window.innerHeight);

  const handleResize = useCallback(() => {
    setContainerHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [handleResize]);

  return containerHeight;

};

export default useWindowResize