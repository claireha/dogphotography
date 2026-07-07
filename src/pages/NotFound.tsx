import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="py-32 md:py-48">
        <div className="container max-w-xl text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="text-6xl mb-2">🐾</div>
            <p className="text-sm font-medium tracking-widest uppercase text-primary">404</p>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground leading-tight">
              This page ran off
            </h1>
            <p className="text-lg text-muted-foreground">
              Looks like this page got distracted by a squirrel. Let's get you back home.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/">Back to Home</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
