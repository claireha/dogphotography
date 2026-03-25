import { useState } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BOOKING_PASSWORD = "pawpatrol2026";

const Book = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim().toLowerCase() === BOOKING_PASSWORD) {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 space-y-4"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary">Booking</p>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground">Book a Session</h1>
            <p className="text-lg text-muted-foreground">
              Pick a time that works for you and I'll reach out to confirm the details.
            </p>
          </motion.div>

          {!authenticated ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-md mx-auto rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm text-center space-y-6"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-peach">
                <Lock className="h-7 w-7 text-foreground" />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">Password Required</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For safety reasons, I am <em>only</em> working with referrals from rescue organizations to schedule sessions. If you've been referred, you'll receive a password to access my booking page and calendar.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  className={`rounded-full text-center ${error ? "border-destructive" : ""}`}
                />
                {error && (
                  <p className="text-sm text-destructive">Incorrect password. Please try again.</p>
                )}
                <Button type="submit" className="rounded-full w-full">
                  Access Booking
                </Button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl overflow-hidden border border-border shadow-sm"
            >
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3r_2rxYpEEv11Qt_1OmI1TitGEgeuXyHKMUf_UUDtIs0IXhKits8Yi2itObzQvhr5vtHjdJUaf?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="600"
                title="Book a session"
              />
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Book;
