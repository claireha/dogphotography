import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import dog1 from "@/assets/dog-1.jpg";
import dog2 from "@/assets/dog-2.jpg";
import dog3 from "@/assets/dog-3.jpg";
import dog4 from "@/assets/dog-4.jpg";
import dog5 from "@/assets/dog-5.jpg";
import dog6 from "@/assets/dog-6.jpg";
import heroImg from "@/assets/hero-dog.jpg";

const images = [
  { src: dog1, alt: "Happy pitbull portrait" },
  { src: dog2, alt: "Playful dog running" },
  { src: heroImg, alt: "Golden retriever in sunlight" },
  { src: dog3, alt: "Gentle dog on couch" },
  { src: dog4, alt: "Curious terrier tilting head" },
  { src: dog5, alt: "Labrador with tongue out" },
  { src: dog6, alt: "Border collie close-up" },
];

const Portfolio = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 space-y-4"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary">Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground">Happy Faces</h1>
            <p className="text-lg text-muted-foreground">A collection of some of the wonderful dogs I've had the pleasure of photographing.</p>
          </motion.div>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-background hover:text-primary transition-colors"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Portfolio;
