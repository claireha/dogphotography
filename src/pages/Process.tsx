import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Home, Cookie, Users, MapPin, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useEffect, useRef } from "react";

const sections = [
  {
    icon: Info,
    title: "Getting Started",
    color: "bg-baby-blue",
    content: "For safety reasons, I am *only* working with referrals from rescue organizations to schedule sessions. If you've been referred, you'll receive a password to access my booking page and calendar.",
  },
  {
    icon: MapPin,
    title: "Scheduling",
    color: "bg-peach",
    content: "I typically shoot on Saturdays and Sundays. You can easily see my schedule and book time on my {booking_page} when you're ready.",
  },
  {
    icon: Home,
    title: "Location",
    color: "bg-mint",
    content: "I photograph dogs in their foster home. Dogs are more comfortable in their own space, they can be off-leash, and you get the most natural, relaxed shots. \n\nTo keep things manageable, I usually schedule sessions within about an hour or less of Scotch Plains, NJ—thanks for understanding!",
  },
  {
    icon: Clock,
    title: "Session Details",
    color: "bg-lavender",
    content: "Sessions typically last 45–60 minutes, though timing depends on how quickly your foster pup settles in. No rush — we go at their pace.",
  },
  {
    icon: Cookie,
    title: "Treats",
    color: "bg-sunshine",
    content: "Small treats prepared ahead of time go a long way in helping keep your dog focused and rewarded. If you want me to bring treats, just let me know! ",
  },
  {
    icon: Users,
    title: "During the Shoot",
    color: "bg-rose",
    content: "You can either follow along and help, or let me work independently with the dog — totally based on your comfort level. Either way works great!",
  },
];

const InstagramEmbed = ({ url }: { url: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={`${url}?utm_source=ig_embed`}
        data-instgrm-version="14"
        style={{
          background: "hsl(var(--card))",
          border: 0,
          borderRadius: "12px",
          margin: "0 auto",
          maxWidth: "540px",
          width: "100%",
          padding: 0,
        }}
      />
    </div>
  );
};

const Process = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary">The Process</p>
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground">Foster Dog Photoshoots</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Everything is designed to be low-pressure and comfortable — for you and the dog.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-5 items-start"
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${s.color} flex items-center justify-center`}>
                <s.icon className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {s.content.includes("{booking_page}") ? (
                    <>
                      {s.content.split("{booking_page}")[0]}
                      <Link to="/fosters/book" className="text-primary underline hover:text-primary/80 transition-colors">booking page</Link>
                      {s.content.split("{booking_page}")[1]}
                    </>
                  ) : (
                    s.content
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Reel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <InstagramEmbed url="https://www.instagram.com/p/DWNCjzADjWf/" />
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container max-w-2xl text-center space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Ready to schedule a shoot? 📸
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Pick a date that works for you and your foster pup — it's completely free.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full">
            <Link to="/fosters/book">Schedule a Shoot</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Process;
