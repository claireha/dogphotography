import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import clairePhoto from "@/assets/claire-placeholder.jpg";

const About = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden"
          >
            <img 
              src={clairePhoto} 
              alt="Claire Ha, volunteer pet photographer" 
              width={640} 
              height={800} 
              className="w-full h-auto object-cover" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary">About</p>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
              Hi, I'm Claire 👋
            </h1>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a volunteer pet photographer based in New Jersey. I work with local shelters (such as the <a href="http://instagram.com/ahsnewark" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-primary/80 transition-colors">Associated Humane Societies of Newark</a>) to photograph foster dogs and help them get adopted faster.
              </p>
              <p>
                I've had two pitties of my own and absolutely love spending time with dogs of all shapes and sizes. There's something special about capturing their personality in a single frame.
              </p>
              <p>
                I believe that a great photo can be the difference between a dog getting scrolled past or getting a forever home.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <h3 className="font-display font-semibold text-foreground mb-3">Fun facts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>🐾 Proud pittie parent to <a href="https://www.instagram.com/bigbabydimey" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-primary/80 transition-colors">@bigbabydimey</a></li>
                <li>📸 Self-taught photographer (Fujifilm X100VI)</li>
                <li>🏠 Based in central New Jersey</li>
                <li>🦴 Always ready to meet new doggy friends</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
