"use client";
import { motion } from "framer-motion";
import { Wrench, Truck, Package, Home, Building2, Warehouse, Boxes, Paintbrush, Hammer, Sparkles, Droplets, Trash2 } from "lucide-react";

const mainServices = [
  { icon: Truck, title: "Traslochi completi", desc: "Per abitazioni, uffici, magazzini, cantine e solai." },
  { icon: Trash2, title: "Sgomberi", desc: "Sgomberi completi, a partire da 75,00 €"},
  { icon: Boxes, title: "Imballaggio professionale", desc: "Smontaggio, imballaggio e rimontaggio mobili con squadre qualificate." },
  { icon: Package, title: "Fornitura materiali", desc: "Scatole, nastro adesivo, pluriball e tutto il necessario per il tuo trasloco." },
  { icon: Building2, title: "Noleggio piattaforme aeree", desc: "Soluzioni sicure per raggiungere anche i piani più alti." },
  { icon: Home, title: "Preventivi gratuiti", desc: "Richiedi un sopralluogo gratuito e personalizzato." },
];

const extraServices = [
  { icon: Hammer, title: "Ristrutturazione bagni" },
  { icon: Paintbrush, title: "Imbiancatura e verniciatura" },
  { icon: Droplets, title: "Pulizie civili e industriali" },
  { icon: Sparkles, title: "Lavaggi moquette" },
  { icon: Wrench, title: "Cristallizzazione marmi" },
  { icon: Boxes, title: "Rotazione sacchi" },
];

export default function Services() {
  return (
    <section id="servizi" className="py-24 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-12"
        >
          I nostri <span className="text-yellow-400">Servizi</span>
        </motion.h2>

        {/* --- Servizi principali --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                //transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* --- Servizi extra --- */}
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          //transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-blue-900 mt-20 mb-10"
        >
          Altri <span className="text-yellow-400">Servizi</span>
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {extraServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition shadow-sm"
              >
                <Icon className="w-10 h-10 text-blue-800 mb-3" />
                <h4 className="text-lg font-semibold text-blue-900">{service.title}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
