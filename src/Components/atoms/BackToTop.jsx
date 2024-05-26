import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down and hide when at the bottom
  const toggleVisibility = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (scrollPosition > 300 && (scrollPosition + windowHeight) < fullHeight - 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={scrollToTop}
          className="p-3 rounded-full shadow-lg bg-secondary text-white"
          aria-label="Back to top"
        >
          <FaArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </div>
  );
};

export default BackToTop;



// CODE IF ELSE AWAL

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FaArrowUp } from 'react-icons/fa';

// const BackToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Show button when page is scrolled down
//   const toggleVisibility = () => {
//     if (window.scrollY > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   // Scroll to top smooth behavior
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisibility);
//     return () => {
//       window.removeEventListener('scroll', toggleVisibility);
//     };
//   }, []);

//   return (
//     <div className="fixed sm:bottom-4 bottom-9 right-4">
//       {isVisible && (
//         <motion.button
//           whileHover={{ scale: 1.2 }}
//           whileTap={{ scale: 0.8 }}
//           onClick={scrollToTop}
//           className="p-3 rounded-full shadow-lg bg-secondary text-white"
//           aria-label="Back to top"
//         >
//           <FaArrowUp className="w-4 h-4" />
//         </motion.button>
//       )}
//     </div>
//   );
// };

// export default BackToTop;
