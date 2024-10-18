import { useEffect, useState } from "react";

function genrateJoke() {
  const [data, setData] = useState("");

  // Function to fetch joke
  const fetchJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((res) => setData(res.value)); // Save joke text in data
  };

  // Fetch joke when component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  // Return both the joke and the function to update it
  return [data, fetchJoke];
}

export default genrateJoke;
