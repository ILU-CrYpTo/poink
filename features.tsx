"use client"

import { Zap, Shield, Rocket, Boxes } from "lucide-react"
import { motion } from "framer-motion"

export function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Experience seamless interactions with minimal latency across all chains.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure by Design",
      description: "Built with security-first architecture ensuring your data and transactions are protected.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Easy Integration",
      description: "Connect and deploy in minutes with our straightforward API and documentation.",
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: "Chain Agnostic",
      description: "Work across multiple blockchains without compromising on performance or security.",
    },
  ]

  return (
    <section className="py-32 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Built for the Future</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our platform combines cutting-edge technology with seamless user experience to bring you the next generation
            of digital engagement.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg border bg-white/50 backdrop-blur-sm hover:border-black transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

