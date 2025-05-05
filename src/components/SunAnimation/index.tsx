// src/components/SunAnimation/index.tsx
import { motion } from 'framer-motion';
import { useSunPosition } from './useSunPosition';
import { SunVisual } from './SunVisual';

export const SunAnimation = () => {
  const { position, isDaytime } = useSunPosition(); // Ahora usa isDaytime

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SunVisual position={position} isDaytime={isDaytime} />
    </motion.div>
  );
};