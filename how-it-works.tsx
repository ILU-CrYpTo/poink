"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Account",
      description: "Link your wallet with just a few clicks to get started.",
    },
    {
      number: "02",
      title: "Configure Settings",
      description: "Customize your integration preferences and chain settings.",
    },
    {
      number: "03",
      title: "Swap",
      description: "Start trading across multiple chains seamlessly.",
    },
  ]

  return (
    <section className="py-32 bg-black text-white relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-6">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Get started with Poink in three simple steps and transform your bot-using strategy.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-5xl font-bold text-white/10 mb-4">{step.number}</div>
              <h3 className="text-2xl font-medium mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors"
            >
                            <Link href="https://app-poinkbot.website/">
                            Start Now
                            </Link>
              
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

