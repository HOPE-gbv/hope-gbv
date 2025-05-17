import { motion } from "framer-motion";
import './index.css';

const hopeWords = ['Healing', 'Outreach', 'Prevention', 'Empowerment'];

const letterVariants = {
  backInLeft: {
    x: [-200, 0],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "backIn",
    },
  },
};

function Loading() {
  return (
    <motion.div
     initial="hidden"
      animate="backInLeft"
      transition={{ staggerChildren: 0.2 }}
      className="hope-container"
    >
      {hopeWords.map((word, index) => (
        <motion.div key={index} variants={letterVariants} className="hope-word">
          <span className="hope-letter">{word.charAt(0)}</span>
          <span className="hope-text"> = {word.slice(1)}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Loading;
