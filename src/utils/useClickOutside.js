import { useEffect } from "react";

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const eventListener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", eventListener);
    return () => {
      document.removeEventListener("mousedown", eventListener);
    };
  }, [ref, handler]);
};
