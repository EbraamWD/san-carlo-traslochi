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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:info@sancarlotraslochi.it?subject=Richiesta%20preventivo&body=Buongiorno,%20vorrei%20richiedere%20un%20preventivo%20per%20un%20trasloco.%0A%0ANome:%0ATelefono:%0ADettagli%20del%20trasloco:"
          className="inline-block bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-md shadow-md hover:bg-yellow-300 transition"
        >
          Richiedi preventivo in 1 click!
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="tel:+393514987799"
          className="inline-block bg-blue-900 text-yellow-400 font-bold py-3 px-8 rounded-md shadow-md hover:bg-blue-800 transition ml-4"
        >
          Chiama ora: +39 351 498 77 99
        </motion.a>
      </motion.div>
    </section>
  );
}
