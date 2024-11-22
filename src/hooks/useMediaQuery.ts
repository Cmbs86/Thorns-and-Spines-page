import { useState, useEffect } from "react";

const useMediaQuery = (query: string): boolean => {
    //Create a state to track whether the query matches.
    const [matches, setMatches] = useState<boolean>(false)

    useEffect(() => {
      // Create a media query list using "window.matchMedia"
      const mediaQueryList = window.matchMedia(query);
      
      // Define a listener to update the state when the media query changes.
      const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

      //Set the initial state and add the listener
      setMatches(mediaQueryList.matches);
      mediaQueryList.addEventListener("change", listener)

      // clean up by removing listener
      return () => mediaQueryList.removeEventListener("change", listener)
    }, [query])

    // return the current match state.
    return matches;
  }

  export default useMediaQuery;