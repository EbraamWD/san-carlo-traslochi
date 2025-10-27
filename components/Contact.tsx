"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contatti" className="py-24 bg-blue-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-6"
        >
          Richiedi un <span className="text-yellow-400">preventivo gratuito</span>
        </motion.h2>

        <p className="text-gray-200 mb-10 max-w-2xl mx-auto">
          Inviaci un'email con le informazioni del tuo trasloco e ti risponderemo al più presto.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:info@sancarlotraslochi.it?subject=Richiesta%20preventivo&body=Buongiorno,%20vorrei%20richiedere%20un%20preventivo%20per%20un%20trasloco.%0A%0ANome:%0ATelefono:%0ADettagli%20del%20trasloco:"
          className="inline-block bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-md shadow-md hover:bg-yellow-300 transition"
        >
          Invia la richiesta via email
        </motion.a>
      </div>
    </section>
  );
}
