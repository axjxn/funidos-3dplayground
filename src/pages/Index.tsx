
import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Users, Settings, ShoppingCart, Trophy, Star } from "lucide-react";

const Index = () => {
  const [currentNumber, setCurrentNumber] = useState(5);
  const [progress, setProgress] = useState(40);
  const numbers = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen game-gradient p-4 flex flex-col">
      {/* Status Bar */}
      <div className="status-bar-gradient p-3 rounded-lg mb-6 flex items-center justify-between card-3d">
        <div className="flex items-center gap-4">
          <Trophy className="w-6 h-6 text-white animate-bounce" />
          <div className="flex items-center gap-2">
            <div className="bg-[#FFB700] p-1 px-3 rounded-md">
              <span className="text-black font-bold">9999</span>
            </div>
            <div className="bg-[#FFB700] p-1 px-3 rounded-md">
              <span className="text-black font-bold">1,000,000</span>
            </div>
          </div>
        </div>
        <Star className="w-6 h-6 text-[#FFB700] animate-pulse" />
      </div>

      {/* Game Mode Selection */}
      <div className="flex gap-4 mb-6 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FF6B00] px-6 py-2 rounded-full text-white font-bold button-3d"
        >
          Public Game
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FFB700] px-6 py-2 rounded-full text-black font-bold button-3d"
        >
          Private Game
        </motion.button>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md mx-auto h-8 bg-black/30 rounded-full overflow-hidden mb-6 card-3d">
        <div
          className="h-full bg-[#FFB700] transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Player Turn */}
      <div className="text-white text-2xl font-bold mb-8 text-center text-shadow">
        YOUR TURN
      </div>

      {/* Current Number */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="w-24 h-24 bg-[#FF6B00] rounded-full flex items-center justify-center mb-8 mx-auto button-3d"
      >
        <span className="text-5xl font-bold text-white">{currentNumber}</span>
      </motion.div>

      {/* BINGO Text */}
      <div className="flex gap-4 mb-8 justify-center">
        {["B", "I", "N", "G", "O"].map((letter, index) => (
          <motion.div
            key={letter}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-4xl font-bold text-[#FFB700] text-shadow"
          >
            {letter}
          </motion.div>
        ))}
      </div>

      {/* Bingo Grid */}
      <div className="grid grid-cols-5 gap-2 max-w-md w-full mx-auto mb-8">
        {numbers.map((number) => (
          <motion.div
            key={number}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="aspect-square bg-[#FF6B00] rounded-lg flex items-center justify-center font-bold text-2xl button-3d cursor-pointer text-white hover:bg-[#FFB700] hover:text-black transition-colors"
          >
            {number}
          </motion.div>
        ))}
      </div>

      {/* Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 status-bar-gradient p-4 flex justify-around card-3d">
        <button className="text-white flex flex-col items-center">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="text-white flex flex-col items-center">
          <Users className="w-6 h-6" />
          <span className="text-xs mt-1">Friends</span>
        </button>
        <button className="text-white flex flex-col items-center">
          <Settings className="w-6 h-6" />
          <span className="text-xs mt-1">Settings</span>
        </button>
        <button className="text-white flex flex-col items-center">
          <ShoppingCart className="w-6 h-6" />
          <span className="text-xs mt-1">Shop</span>
        </button>
      </div>

      {/* Bingo Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#FFB700] px-12 py-4 rounded-full text-2xl font-bold button-3d text-black mx-auto mb-20 hover:bg-[#FF6B00] hover:text-white transition-colors"
      >
        BINGO!
      </motion.button>
    </div>
  );
};

export default Index;
