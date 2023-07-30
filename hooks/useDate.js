import { useState, useEffect } from "react";

export const useDate = () => {
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const year = `${today.getFullYear()}`;

  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Ebening"
  } `;

  return {
    year,
    wish,
  };
};
