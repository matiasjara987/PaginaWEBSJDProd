// src/components/SunAnimation/SunVisual.tsx
import styles from './styles.module.css';


interface SunVisualProps {
  position: { x: number; y: number };
  isDaytime: boolean;
}

export const SunVisual = ({ position, isDaytime }: SunVisualProps) => {
  return (
    <div 
      className={styles.container}
      style={{ 
        '--bg-opacity': isDaytime ? 0.8 : 0.3, /* Claro u oscuro */
      } as React.CSSProperties}
    >
      <div
        className={styles.sun}
        style={{
          transform: `translateX(${position.x}vw) translateY(${-position.y}vh)`,
          backgroundColor: isDaytime ? '#FFFF00' : '#FFA500', /* Color del sol */
        }}
      />
      <div className={styles.horizon} />
    </div>
  );
};