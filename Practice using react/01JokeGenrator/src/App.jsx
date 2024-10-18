import genrateJoke from "./hooks/api.js";

function App() {
  const [joke, setjoke] = genrateJoke(); // Get both the joke and the setjoke function

  return (
    // Parent div - Full height, Flexbox centered content for all screen sizes
    <div className="flex items-center justify-center min-h-screen text-center bg-[#635255]">
      <div>
        <h1 className="text-2xl md:text-5xl font-bold text-white">
          Joke Generator Application
        </h1>
        {/* Content div */}
        <div className="mt-5 w-auto h-auto md:h-52  p-5 flex items-center justify-center text-white text-2xl">
          {joke ? joke : "Loading..."}
        </div>
        <button
          onClick={setjoke} // Call setjoke when button is clicked
          className=" border-2 rounded-full mt-3 h-auto w-[30%] md:w-40 border-white text-xl text-white"
        >
          Generate Joke
        </button>
      </div>
    </div>
  );
}

export default App;
