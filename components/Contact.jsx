"use client";

import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import InteractiveCard from "@/components/InteractiveCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError("Configure EmailJS environment variables before sending messages.");
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      to_email: "sheebutiwari222@gmail.com",
      subject: `New portfolio message from ${formData.name}`,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, { publicKey });
      setFormData(initialFormData);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch {
      setError("Unable to send message right now. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell section-spacing">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something useful."
          description="Reach out for internships, freelance opportunities, collaborations, or technical conversations."
        />
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <InteractiveCard className="glass-card h-full p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Contact Details
            </p>
            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <a
                  href="mailto:sheebutiwari222@gmail.com"
                  className="mt-1 block text-lg text-white transition hover:text-primary"
                >
                  sheebutiwari222@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-500">Phone</p>
                <a
                  href="tel:+917683017986"
                  className="mt-1 block text-lg text-white transition hover:text-primary"
                >
                  +91 7683017986
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-500">GitHub</p>
                <a
                  href="https://github.com/Sheebu123"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-lg text-white transition hover:text-primary"
                >
                  github.com/Sheebu123
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-500">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/sheebu-tiwari/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-lg text-white transition hover:text-primary"
                >
                  linkedin.com/in/sheebu-tiwari
                </a>
              </div>
            </div>
          </InteractiveCard>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass-card interactive-surface p-8">
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-300">Name</span>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, name: event.target.value }))
                  }
                  className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-primary"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-300">Email</span>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, email: event.target.value }))
                  }
                  className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-primary"
                  placeholder="you@example.com"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-300">Message</span>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: event.target.value,
                    }))
                  }
                  className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-primary"
                  placeholder="Tell me about your project or opportunity"
                />
              </label>
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {error ? <p className="mt-4 text-sm text-red-400">{error}</p> : null}

            <AnimatePresence>
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300"
                >
                  Message Sent Successfully
                </motion.div>
              ) : null}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
