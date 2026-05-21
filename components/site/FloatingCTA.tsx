"use client";

import { motion } from "framer-motion";
import { Facebook, FacebookIcon, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-7 right-5 z-50 flex flex-col gap-3 lg:hidden">
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/918796390456"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="h-7 w-7" />
      </motion.a>

      {/* Instagram */}
      <motion.a
        href="https://www.instagram.com/malhotrastourandtravel"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white shadow-2xl"
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6" />
      </motion.a>
      {/* Facebook */}
      {/* Facebook */}
      <motion.a
        href="https://www.facebook.com/share/15nAZcVXUEW/?mibextid=wwXIfr"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-2xl"
        aria-label="Facebook"
      >
        <FacebookIcon className="h-6 w-6" />
      </motion.a>
    </div>
  );
};

export default FloatingCTA;