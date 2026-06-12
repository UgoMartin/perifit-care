import { motion, useReducedMotion } from 'motion/react';
import './AnimatedFlame.css';

const FLAME_PATH =
  'M148.616 64.5828C146.087 62.5655 142.692 61.7855 139.496 62.4445C136.257 63.09 133.529 65.1476 132.095 67.9583C132.038 68.0793 128.074 75.7851 120.474 83.1816C112.917 23.8752 71.3222 2.16981 69.3902 1.18809C66.1513 -0.452585 62.2589 -0.385344 59.0768 1.33602C55.8947 3.05739 53.8775 6.20426 53.7354 9.67389C52.1586 46.3874 39.7001 62.7135 26.5171 79.9944C15.2519 94.7605 3.6173 110.024 0.520434 136.504C-2.02241 158.195 4.81059 178.771 19.7551 194.452C36.4185 211.921 61.4492 221.899 88.5254 221.899H89.3352C127.52 221.617 158.517 207.631 174.357 183.518C198.493 146.791 187.426 95.6615 148.616 64.5828ZM121.156 187.203C114.664 196.24 103.371 201.673 90.9546 201.727H90.6563C71.8194 201.727 57.2584 193.336 50.6954 178.677C41.7173 158.653 49.2464 130.479 68.6231 111.678C71.5353 108.854 75.9391 107.899 79.8457 109.217C83.7665 110.549 86.5224 113.924 86.8634 117.851C88.2555 133.249 92.9861 135.239 101.552 138.857C108.854 141.937 118.826 146.146 124.083 158.881C128.117 168.658 127.066 178.973 121.156 187.19V187.203Z';

function FlameSvg() {
  return (
    <svg
      className="animated-flame__svg"
      width={187.086}
      height={221.899}
      viewBox="0 0 188 222"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={FLAME_PATH} fill="#86D889" />
    </svg>
  );
}

export function AnimatedFlame() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="animated-flame" aria-hidden="true">
        <FlameSvg />
      </div>
    );
  }

  return (
    <motion.div
      className="animated-flame"
      aria-hidden="true"
      style={{ transformOrigin: '50% 95%' }}
      animate={{ rotate: [0, -1.2, 0.9, -0.6, 1, 0] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.div
        className="animated-flame__flicker"
        style={{ transformOrigin: '50% 100%' }}
        animate={{
          scaleY: [1, 1.04, 0.97, 1.025, 0.98, 1.03, 1],
          scaleX: [1, 0.98, 1.02, 0.985, 1.015, 0.975, 1],
          skewX: [0, -0.8, 0.6, -0.4, 0.7, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FlameSvg />
      </motion.div>
    </motion.div>
  );
}
