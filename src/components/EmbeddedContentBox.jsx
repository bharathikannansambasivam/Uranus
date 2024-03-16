import React from "react";
import trade from "../assets/trade.png";
const EmbeddedContentBox = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
      <div className="rounded-lg overflow-hidden shadow-lg h-92">
        <div className="aspect-w-16 h-full ">
          <iframe
            title="The Story of The Shiba Inu Army Pumping Uranus"
            className="w-full h-full"
            src="https://www.youtube.com/embed/-KJZCYW_pN8"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="w-full h-96 object-contain  mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <a
          href="https://www.dextools.io/app/en/solana/pair-explorer/Cu4Pxu7vh7CFGjMsfZFEhpp9Aj6FA7ciQDsbvs5hEkZK?t=1710608910993"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full aspect-w-16 aspect-h-9"
        >
          <img src={trade} alt="DEXTools Solana Pair Explorer" className=" " />
        </a>
      </div>
    </div>
  );
};

export default EmbeddedContentBox;
