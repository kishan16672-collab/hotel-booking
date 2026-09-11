import React, { useState, useEffect, useCallback } from 'react';

const ClickSpark = ({
  sparkColor = '#2b2828',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = 'ease-out',
  extraScale = 1,
}) => {
  const [sparks, setSparks] = useState([]);

  const handleClick = useCallback((e) => {
    const { clientX, clientY } = e;
    const newSpark = { id: Date.now(), x: clientX, y: clientY };
    
    setSparks((prev) => [...prev, newSpark]);

    setTimeout(() => {
      setSparks((prev) => prev.filter((spark) => spark.id !== newSpark.id));
    }, duration);
  }, [duration]);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [handleClick]);

  return (
    <>
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="pointer-events-none fixed z-50"
          style={{ left: spark.x, top: spark.y }}
        >
          {Array.from({ length: sparkCount }).map((_, i) => {
            const angle = (i * 360) / sparkCount;
            const radians = (angle * Math.PI) / 180;
            const tx = Math.cos(radians) * sparkRadius;
            const ty = Math.sin(radians) * sparkRadius;

            return (
              <span
                key={i}
                className="absolute block rounded-full"
                style={{
                  width: `${sparkSize}px`,
                  height: `${sparkSize}px`,
                  backgroundColor: sparkColor,
                  transform: 'translate(-50%, -50%)',
                  animation: `spark-anim ${duration}ms ${easing} forwards`,
                  '--tx': `${tx}px`,
                  '--ty': `${ty}px`,
                  '--scale': extraScale,
                }}
              />
            );
          })}
        </div>
      ))}
      <style>{`
        @keyframes spark-anim {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(var(--scale));
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default ClickSpark;