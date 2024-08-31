import React from "react";

function Data() {
    const [data, setData] = React.useState(null);
    const description = React.useRef(null);

    const showDescription = () => {
        description.current.style.display = "block";
    }
    const handleClick = async () => {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        const data = await response.json();
        console.log(data);
        setData(data);
    };

    return (
        <>
            <div className="main flex flex-col items-center justify-center">
                <button
                    className="p-4 bg-zinc-800 hover:bg-zinc-900 rounded-md"
                    onClick={handleClick}
                >
                    Fetch Crypto
                </button>
                <div className="coins flex flex-col w-full gap-6  justify-center bg-zinc-950 py-6">
                    {data ? (
                        data.map((coin) => {
                            return (
                                <div key={coin.id} className="coin   mx-auto flex items-center justify-center w-full hover:-translate-x-10 transition-all">
                                    <img
                                        src={coin.image}
                                        alt={coin.name}
                                        className=" mx-2 "
                                        onMouseEnter={showDescription}
                                    />
                                    <div ref={description} className=" ml-10" >
                                        <h2 className="text-3xl font-semibold">Name: {coin.name}</h2>
                                        <p className="text-2xl font-semibold">Symbol: {coin.symbol}</p>
                                        <p className="text-2xl font-semibold">Price: ${coin.current_price}</p>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="loader">
                            <div className="loader-circle"></div>
                            <div className="loader-line-mask bg-white">
                                <div className="loader-line"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Data;
