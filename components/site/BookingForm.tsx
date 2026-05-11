"use client";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { CalendarIcon, Send, Check, User, Phone, MapPin, MessageSquare } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const destinations = [
  "Kashmir",
  "Ladakh",
  "Rajasthan",
  "Goa",
  "Manali",
  "Spiti Valley",
  "Himachal Pradesh",
  "Custom itinerary",
];

// ✅ UPDATE YOUR SCHEMA

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(80),

  phone: z
    .string()
    .trim()
    .regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),

  destination: z.string().min(1, "Pick a destination"),

  message: z
    .string()
    .trim()
    .max(800, "Message cannot exceed 800 characters")
    .optional(),
});

export function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [from, setFrom] = useState<Date | undefined>();
  const [to, setTo] = useState<Date | undefined>();
  const [destination, setDestination] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    destination?: string;
    from?: string;
  }>({});
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setErrors({});

    const parsed = schema.safeParse({
      name,
      phone,
      destination,
      message,
    });

    const newErrors: {
      name?: string;
      phone?: string;
      destination?: string;
      from?: string;
    } = {};

    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof typeof newErrors;
        newErrors[field] = issue.message;
      });
    }

    if (!from) {
      newErrors.from = "Please select travel start date";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          destination,
          from: from ? format(from, "PPP") : "",
          to: to ? format(to, "PPP") : "",
          message,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Something went wrong");
      }

      setDone(true);

      toast.success("Request received — we'll be in touch shortly.");

      // reset
      setName("");
      setPhone("");
      setFrom(undefined);
      setTo(undefined);
      setDestination("");
      setMessage("");
      setErrors({});
    } catch (error) {
      console.error(error);
      toast.error("Failed to send request");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="book" className="relative py-28 md:py-40 bg-background overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
        {/* Left intro */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 lg:sticky lg:top-32"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-6">
            ✦ Book your journey
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95] text-balance">
            Tell us your <span className="italic font-light text-accent">dream</span>. We'll draw the map.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md">
            Share a few details and our travel curators will design a private itinerary tailored to your dates,
            pace and budget — usually within 24 hours.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { k: "01", t: "Personal travel curator" },
              { k: "02", t: "Hand-picked stays & guides" },
              { k: "03", t: "24/7 on-trip support" },
            ].map((it, i) => (
              <motion.div
                key={it.k}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <span className="font-display text-accent text-2xl font-light">{it.k}</span>
                <span className="text-foreground/80">{it.t}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="relative rounded-3xl bg-card border border-border shadow-elegant p-6 md:p-10 overflow-hidden">
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="mx-auto h-20 w-20 rounded-full bg-accent grid place-items-center shadow-glow"
                  >
                    <Check className="text-accent-foreground" size={36} strokeWidth={3} />
                  </motion.div>
                  <h3 className="mt-6 font-display text-3xl md:text-4xl font-bold">Request received</h3>
                  <p className="mt-3 text-muted-foreground max-w-sm mx-auto">
                    Thank you, {name.split(" ")[0]}. A curator will reach out within 24 hours to craft your{" "}
                    <span className="text-foreground font-medium">{destination}</span> journey.
                  </p>
                  <button
                    onClick={() => {
                      setDone(false);
                      setName("");
                      setPhone("");
                      setFrom(undefined);
                      setTo(undefined);
                      setDestination("");
                      setMessage("");
                    }}
                    className="mt-8 text-accent font-semibold story-link"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="space-y-6"
                  noValidate
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <FieldShell label="Full name" icon={<User size={14} />}>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Aarav Malhotra"
                          maxLength={80}
                          className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground/60"
                        />
                      </FieldShell>
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <FieldShell label="Phone" icon={<Phone size={14} />}>
                        <input
                          value={phone}
                          onChange={(e) =>
                            setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                          }
                          placeholder="9876543210"
                          maxLength={10}
                          inputMode="numeric"
                          className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground/60"
                        />
                      </FieldShell>

                      {errors.phone && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <DateField
                        label="Travel from"
                        date={from}
                        setDate={setFrom}
                      />

                      {errors.from && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.from}
                        </p>
                      )}
                    </div>
                    <DateField label="Travel to" date={to} setDate={setTo} minDate={from} />
                  </div>

                  <div>
                    <FieldShell label="Destination" icon={<MapPin size={14} />}>
                      <Select value={destination} onValueChange={setDestination}>
                        <SelectTrigger className="border-0 bg-transparent shadow-none px-0 h-auto py-0 focus:ring-0 text-foreground data-[placeholder]:text-muted-foreground/60">
                          <SelectValue placeholder="Where are you headed?" />
                        </SelectTrigger>
                        <SelectContent>
                          {destinations.map((d) => (
                            <SelectItem key={d} value={d}>
                              {d}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FieldShell>
                    {errors.destination && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.destination}
                      </p>
                    )}
                  </div>

                  <FieldShell label="Tell us more" icon={<MessageSquare size={14} />} multiline>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Group size, pace, must-sees, special occasions…"
                      rows={4}
                      maxLength={800}
                      className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground/60 resize-none"
                    />
                  </FieldShell>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-glow disabled:opacity-70 disabled:cursor-wait transition"
                  >
                    {submitting ? (
                      <>
                        <span className="h-4 w-4 rounded-full border-2 border-accent-foreground/30 border-t-accent-foreground animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        Request my itinerary
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to be contacted about your travel plans.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FieldShell({
  label,
  icon,
  children,
  multiline,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  multiline?: boolean;
}) {
  return (
    <label
      className={cn(
        "group block rounded-2xl border border-border bg-background/50 px-4 py-3 transition-all",
        "hover:border-accent/60 focus-within:border-accent focus-within:bg-background focus-within:shadow-[0_0_0_4px] focus-within:shadow-accent/10",
        multiline && "py-3"
      )}
    >
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-1.5">
        <span className="text-accent">{icon}</span>
        {label}
      </div>
      {children}
    </label>
  );
}

function DateField({
  label,
  date,
  setDate,
  minDate,
}: {
  label: string;
  date: Date | undefined;
  setDate: (d: Date | undefined) => void;
  minDate?: Date;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="group block w-full text-left rounded-2xl border border-border bg-background/50 px-4 py-3 transition-all hover:border-accent/60 focus:border-accent focus:outline-none focus:bg-background focus:shadow-[0_0_0_4px] focus:shadow-accent/10"
        >
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-1.5">
            <CalendarIcon size={14} className="text-accent" />
            {label}
          </div>
          <div className={cn("text-foreground", !date && "text-muted-foreground/60")}>
            {date ? format(date, "PPP") : "Pick a date"}
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(d) => (minDate ? d < minDate : d < new Date(new Date().setHours(0, 0, 0, 0)))}
          initialFocus
          className={cn("p-3 pointer-events-auto")}
        />
      </PopoverContent>
    </Popover>
  );
}
