import Data from "./components/data";
import Hero from "./components/hero";

function App() {
  return <>
  <div className="body w-full h-screen bg-zinc-950 text-white">

  <h1 className="text-5xl font-thin text-center p-5 hover:font-normal shadow-md mx-2 rounded-tr-full rounded-bl-full hover:rounded-br-full hover:rounded-tl-full hover:rounded-tr-none hover:rounded-bl-none transition-all  shadow-yellow-700 ">
    Hello Crypto!
  </h1>
  <Hero/>
  <Data/>



  </div>
  
  
  
  </>;
}

export default App;
