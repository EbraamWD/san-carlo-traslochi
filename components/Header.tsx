"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handScroll);
        return () => window.removeEventListener("scroll", handScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100}}
            animate={{ y: 0}}
            transition={{ duration: 0.6}}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                  ? "backdrop-blur-md bg-white/80 shadow-md"
                  : "bg-transparent"
              }`}
            >
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
                    <Link href="/" className="flex items-center gap-3">
                        <motion.div 
                            initial={{ opacity: 0, y: -10}}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ duration: 0.6}}
                        >
                            <Image
                                src="/media/images/sancarlotraslochi (2).png"
                                alt="San Carlo Traslochi"
                                width={140}
                                height={140}
                                className="object-contain"
                                priority
                                />

                        </motion.div>
                    </Link>
                    <nav className="hidden md:flex space-x-8 font-medium">
                        {["Home", "Servizi", "Contatti"].map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase().replace(" ", "-")}`}
                                whileHover={{ y: -2}}
                                className="text-white-800 hover:text-blue-700 relative">
                                    {item}
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-700"
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                        />
                                </motion.a>
                        ))}
                    </nav>
                </div>
                </motion.header>
    );
}