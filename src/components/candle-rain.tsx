import { useMemo } from "react";

export default function CandleRain({ count = 30 }) {
  // bikin array jumlah candle sesuai count
  const candles = useMemo(() => Array.from({ length: count }), [count]);

  return (
    <div className="rain-container">
      {candles.map((_, i) => {
        // random durasi & delay biar lebih natural
        const duration = (Math.random() * 2 + 2).toFixed(2); // 2s - 4s
        const delay = (Math.random() * 2).toFixed(2); // 0 - 2s
        const left = Math.floor(Math.random() * 100); // posisi horizontal random

        return (
          <span
            key={i}
            className="candle"
            style={{
              left: `${left}vw`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}></span>
        );
      })}
    </div>
  );
}
