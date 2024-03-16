import React from "react";
import AnimatedCard from "./components/AnimatedCard";
import Images from "./components/Images";
import EmbeddedContentBox from "./components/EmbeddedContentBox";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 class=" flex justify-center items-center mb-7 text-3xl font-extrabold  md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          URANUS
        </span>{" "}
        Web.{" "}
      </h1>

      <Images />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatedCard
          title="Uranus Retrograde"
          description="Uranus, the ruler of Aquarius, starts 2024 in retrograde, going direct on Saturday, January 27, then retrogrades again on Sunday, September 1. This suggests ongoing evolution in your home life and personal growth."
        />

        <AnimatedCard
          title="Moving into a New Age"
          description="In 2024, the location of the Sun on the March equinox is in the constellation of Pisces but also on the border of Aquarius. So, we are slowly moving into a new age, from Pisces to Aquarius."
        />

        {/* Card 3: Aquarius and Uranus */}
        <AnimatedCard
          title="Aquarius and Uranus"
          description="Aquarius is ruled by Uranus, the planet that governs innovation, technology, and surprising events. Uranus perfectly mirrors Aquarius' distinctive attitude, complementing the nontraditional nature of these visionary air signs."
        />

        <AnimatedCard
          title="The Memeifesto"
          description="Welcome to the wild side of crypto - where memes aren't just dreams, and astrology isn’t just your daily horoscope. Everyone Loves to Pump Uranus more than they like when Uranus Dumps. The liquidity injections just keep coming into Uranus. Don’t pass gas (it’s gonna be giant). Hold onto Uranus! Disclaimer: This is all in good fun – a blend of memes, astrology, and crypto. We will not go moon, we going to Uranus. In Crypto We Trust, But In Uranus, We Believe!"
        />
      </div>
      <EmbeddedContentBox />

      <Footer />
    </div>
  );
};

export default App;
