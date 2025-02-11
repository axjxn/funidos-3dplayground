
import { useState } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const [currentNumber, setCurrentNumber] = useState(5);
  const [progress, setProgress] = useState(40);
  const numbers = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-bingo-black p-4 flex flex-col items-center justify-center">
      {/* Progress Bar */}
      <div className="w-full max-w-md h-8 bg-black rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-bingo-green transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Player Turn */}
      <div className="text-white text-2xl font-bold mb-8">PLAYER 2'S TURN</div>

      {/* Current Number */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="w-24 h-24 bg-bingo-yellow rounded-full flex items-center justify-center mb-8 shadow-3d"
      >
        <span className="text-5xl font-bold">{currentNumber}</span>
      </motion.div>

      {/* BINGO Text */}
      <div className="flex gap-4 mb-8">
        {["B", "I", "N", "G", "O"].map((letter) => (
          <div
            key={letter}
            className="text-4xl font-bold text-white"
          >
            {letter}
          </div>
        ))}
      </div>

      {/* Bingo Grid */}
      <div className="grid grid-cols-5 gap-2 max-w-md w-full mb-8">
        {numbers.map((number) => (
          <motion.div
            key={number}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="aspect-square bg-bingo-yellow rounded-lg flex items-center justify-center font-bold text-2xl shadow-3d hover:shadow-3d-hover transition-all cursor-pointer"
          >
            {number}
          </motion.div>
        ))}
      </div>

      {/* Bingo Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-bingo-yellow px-12 py-4 rounded-full text-2xl font-bold shadow-3d hover:shadow-3d-hover transition-all animate-button-bounce"
      >
        BINGO
      </motion.button>
    </div>
  );
};

export default Index;
