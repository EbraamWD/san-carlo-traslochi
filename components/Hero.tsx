"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Calcola le dimensioni della finestra solo sul client
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Solo quando abbiamo le dimensioni, creiamo le trasformazioni
  const rotateX = useTransform(mouseY, [0, windowSize.height], [10, -10]);
  const rotateY = useTransform(mouseX, [0, windowSize.width], [-10, 10]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/media/video/traslochi_hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      <motion.div
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-4"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
          Traslochi Professionali <br />
          con <span className="text-yellow-300">San Carlo</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white max-w-2xl mx-auto drop-shadow-md">
          Affidati a noi per un trasloco rapido, sicuro e senza stress — in tutta Italia.
        </p>
        <motion.a
          href="mailto:stefanoservice@email.it"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-block bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-300 transition"
        >
          Richiedi un preventivo
        </motion.a>
      </motion.div>
    </section>
  );
}
