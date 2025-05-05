// src/components/SunAnimation/useSunPosition.ts
import { useEffect, useState } from 'react';
// src/components/SunAnimation/useSunPosition.ts
export const useSunPosition = () => {
    const [progress, setProgress] = useState(0);
  
    useEffect(() => {
      const calculateProgress = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        setProgress((hours * 60 + minutes) / (24 * 60));
      };
      calculateProgress();
      const interval = setInterval(calculateProgress, 60000);
      return () => clearInterval(interval);
    }, []);
  
    // Determina si es de día (6:00 AM - 6:00 PM)
    const isDaytime = progress >= 0.25 && progress < 0.75;
  
    return { 
      position: {
        x: progress * 100,
        y: Math.sin(progress * Math.PI) * 100,
      },
      isDaytime, // Nuevo campo
    };
  };