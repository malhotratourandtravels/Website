"use client";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";

const team = [
  {
    name: "Rajesh Malhotra",
    role: "Founder & Travel Visionary",
    specialty: "Himalayan Expeditions",
    experience: "15+ years",
    bio: "Pioneer of sustainable mountain tourism with a passion for connecting travelers to pristine wilderness.",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    social: { instagram: "#", email: "#" },
  },
  {
    name: "Priya Sharma",
    role: "Destination Expert",
    specialty: "Cultural Heritage",
    experience: "12+ years",
    bio: "Cultural anthropologist bringing authentic local stories and hidden gems to every journey.",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    social: { instagram: "#", email: "#" },
  },
  {
    name: "Aditya Kumar",
    role: "Adventure Coordinator",
    specialty: "Trekking & Outdoor",
    experience: "10+ years",
    bio: "Certified mountaineer and adventure sports enthusiast ensuring safety and excitement in equal measure.",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    social: { instagram: "#", email: "#" },
  },
  {
    name: "Neha Patel",
    role: "Customer Experience Lead",
    specialty: "Personalized Journeys",
    experience: "8+ years",
    bio: "Dedicated to creating seamless, memorable experiences with meticulous attention to detail.",
    image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    social: { instagram: "#", email: "#" },
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{ y: [0, -40, 0], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            ✦ Our Team
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-balance mb-6">
            Meet Your <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-accent">Guides</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Passionate travel experts, seasoned adventurers, and local culture enthusiasts united by a common mission: creating extraordinary journeys.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-card border border-border hover:border-accent transition-all duration-300">
                {/* Member image placeholder */}
                <motion.div
                  className="relative aspect-[3/4] overflow-hidden"
                  style={{ background: member.image }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"
                  />

                  {/* Hover overlay with bio */}
                  <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40 flex flex-col justify-end p-6"
                  >
                    <p className="text-primary-foreground text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.a
                        href={member.social.instagram}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="h-9 w-9 rounded-full bg-accent/20 hover:bg-accent grid place-items-center text-accent-foreground transition-colors"
                      >
                        <Instagram size={16} />
                      </motion.a>
                      <motion.a
                        href={member.social.email}
                        whileHover={{ scale: 1.2, rotate: -10 }}
                        className="h-9 w-9 rounded-full bg-accent/20 hover:bg-accent grid place-items-center text-accent-foreground transition-colors"
                      >
                        <Mail size={16} />
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Info section */}
                <div className="p-6">
                  <motion.h3
                    className="font-display text-xl font-bold text-foreground mb-1"
                    whileHover={{ x: 4 }}
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-accent text-sm font-semibold mb-3">{member.role}</p>

                  <div className="space-y-2 text-sm text-foreground/70">
                    <motion.div className="flex items-center gap-2" whileHover={{ x: 2 }}>
                      <MapPin size={14} className="text-accent" />
                      <span>{member.specialty}</span>
                    </motion.div>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                      {member.experience}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
