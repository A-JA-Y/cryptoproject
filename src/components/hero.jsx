import React from "react";

function Hero() {
  return (
    <>
      <div className="w-full">
        {/* What is cryto? its examples and how to use it? */}
        <div className="container grid lg:grid-cols-2">
          <div className="question m-2 p-4">
            <h1 className="text-8xl  m-2 p-4 " >What is <br /> <span className="font-extralight my-1 text-yellow-700  "> Crypto ?</span></h1>
            <p className="  animate-pulse my-5 text-zinc-600 transition-all hover:animate-none hover:text-white cursor-default italic">
              "Cryptocurrency is a form of digital or virtual currency that uses
              cryptography for security. It operates independently of a central
              bank, making it decentralized and immune to government
              interference. Cryptocurrency transactions are recorded on a
              blockchain, a distributed ledger technology."</p>


          </div>
          <div className="btcIcon flex items-center justify-end">
            <img
              src="https://www.cryptocompare.com/media/37746251/btc.png"
              alt="Bitcoin"
              className=" w-96 h-96 m-2 p-4"
            />
          </div> 
        </div>
      </div>
    </>
  );
}

export default Hero;
