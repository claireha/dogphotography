import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Home as HomeIcon, ImageIcon, CalendarDays, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-dog.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

import gallery6 from "@/assets/gallery-6.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const steps = [
  { icon: CalendarDays, title: "Schedule a session", desc: "Pick a date that works for you. I typically do photoshoots on Saturdays & Sundays.", color: "bg-peach" },
  { icon: HomeIcon, title: "I come to you", desc: "For foster dogs or rescue organizations, I'll come to you. Convenient and easy for you!", color: "bg-mint" },
  { icon: ImageIcon, title: "Get beautiful photos", desc: "You and the rescue will receive adoption-ready images for Petfinder, social media & more.", color: "bg-lavender" },
];

const gallery = [
  { img: gallery1, url: "https://www.instagram.com/bigbabydimey/p/DVEdM3rFXGn/" },
  { img: gallery2, url: "https://www.instagram.com/bigbabydimey/p/DWKPV2HlYn8/" },
  { img: gallery3, url: "https://www.instagram.com/bigbabydimey/p/DWMuS3blWWH/" },
  { img: gallery4, url: "https://www.instagram.com/bigbabydimey/p/DNjMSt1JtwU/" },
  { img: "https://scontent-lga3-2.cdninstagram.com/v/t51.82787-15/631462758_17975402159993827_2759700604794333652_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=105&ig_cache_key=MzgzMTg2OTI3NTY3ODg2MzM4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=jmWdNU24mb4Q7kNvwHYxwi9&_nc_oc=AdpIhJVAaBcdYq6fTzaDk8N-del-HmDdSQ8wdXikp3idRwbcXUB_fQHgpuqax85jMJ8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_gid=yTrx18gjA1gyI_j2bobZyA&_nc_ss=7a32e&oh=00_AfykIdnTUuJgpMWsWUbF0f5j-ah6vS2-B-QP8c_NmjRtAg&oe=69C8DCD3", url: "https://www.instagram.com/bigbabydimey/p/DUtiZ6rEo8P/" },
  { img: gallery6, url: "https://www.instagram.com/bigbabydimey/p/DUjGq51kibV/" },
];

import { useRef } from "react";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
  <Layout>
    {/* Hero */}
    <section ref={heroRef} className="relative overflow-hidden">
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" className="space-y-6">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium tracking-widest uppercase text-primary">
              Volunteer Pet Photography · NJ
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight text-foreground">
              Helping shelter dogs get adopted through{" "}
              <span className="text-primary italic">better photos</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-md">
              Free volunteer photography for adoptable dogs in New Jersey. Because every pup deserves a great first impression.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/fosters/book">Book a Session</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <motion.img style={{ y: heroY }} src={heroImg} alt="Happy golden retriever in a sunny living room" width={1280} height={800} className="w-full object-cover object-[center_20%] aspect-[2/3] max-h-[26rem] scale-110" />
            </div>
            <div className="absolute -bottom-4 -left-4 text-4xl animate-float">🐾</div>
            <div className="absolute -top-4 -right-4 text-2xl animate-float" style={{ animationDelay: "1s" }}>✨</div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container max-w-3xl text-center space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Camera className="mx-auto h-8 w-8 text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">Why it matters</h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Great photos are one of the biggest factors in getting a dog adopted. I volunteer my time photographing adoptable dogs so they can put their best paw forward on Petfinder, social media, and rescue marketing materials.
          </p>
        </motion.div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-center text-foreground mb-12">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center space-y-4"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.color}`}>
                <step.icon className="h-7 w-7 text-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery preview */}
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-center text-foreground mb-12">
          Some happy faces
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl overflow-hidden aspect-square"
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative group">
                <img src={item.img} alt={`Happy dog ${i + 1}`} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                  <Instagram className="h-8 w-8 text-foreground" />
                  <span className="text-sm font-medium text-foreground">@bigbabydimey</span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" className="rounded-full">
            <a href="https://claireha.pixieset.com/" target="_blank" rel="noopener noreferrer">View full portfolio →</a>
          </Button>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-24">
      <div className="container max-w-2xl text-center space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Let's help your furry friend shine ✨
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Ready to give your adoptable dog the photos they deserve?<br />
            It's completely free — just schedule a session.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full">
            <Link to="/fosters/book">Schedule a Shoot</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
  );
};

export default Index;
