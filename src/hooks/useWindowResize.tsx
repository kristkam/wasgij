import { useCallback, useEffect, useState } from "react"


const useWindowResize = () => {
  const [containerHeight, setContainerHeight] = useState(window.innerHeight);

  const handleResize = useCallback(() => {
    console.log("Resized");
    setContainerHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    // const handleResize = () => {
    //   console.log("Resized");
    //   setContainerHeight(window.innerHeight);
    // };
    let timeoutId: NodeJS.Timeout;

    const debounceHandleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 200);
    };

    window.addEventListener("resize", debounceHandleResize);

    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, [handleResize]);

  return containerHeight;
}
export default useWindowResize