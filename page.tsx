"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Features } from "./features"
import { HowItWorks } from "./how-it-works"
import { Footer } from "./footer"

export default function Page() {
  const [email, setEmail] = useState("")
  const [showVideo, setShowVideo] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted email:", email)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5310223777692511676_x.jpg-C49psDPMbRXtgdpqjNlcN0WovzUhHT.jpeg"
                alt="Poink Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain transform scale-110 -translate-y-[1px]"
                priority
                style={{
                  imageRendering: "auto",
                  WebkitFontSmoothing: "antialiased",
                }}
              />
            </motion.div>
            <span className="font-semibold">POINK</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/demo" className="text-sm hover:text-gray-600 transition-colors">
              Demo
            </Link>
            <Link href="/how-it-works" className="text-sm hover:text-gray-600 transition-colors">
              How it Works
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://x.com/poinkbot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-600 transition-colors"
              >
                <div className="flex items-center gap-1">
                  <svg viewBox="0 0 24 24" className="w-4 h-4">
                    <path
                      fill="currentColor"
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    />
                  </svg>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="default" className="bg-black text-white hover:bg-black/90 transition-colors">
                Get Access
              </Button>
            </motion.div>
          </nav>
        </div>
      </header>

      <main className="relative pt-40 pb-20">
        {/* Dot pattern background */}
        <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] gap-4 pointer-events-none">
          {Array.from({ length: 800 }).map((_, i) => (
            <div key={i} className="w-0.5 h-0.5 bg-gray-200 rounded-full" />
          ))}
        </div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-20 px-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight mb-8 mx-auto max-w-[800px]">
              POINK SEAMLESSLY
              <br />
              ON X.
            </h1>
            <p className="text-gray-600 mb-12 mx-auto max-w-[600px] text-lg">
              We connect chain-agnostic seamless interactions with the future of digital engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="default"
                  className="bg-black text-white hover:bg-black/90 transition-colors min-w-[140px]"
                >
                  Get Access
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="min-w-[140px] transition-colors" asChild>
                  <Link href="https://app-poinkbot.website/" target="_blank" rel="noopener noreferrer">
                    Launch App
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl bg-black p-4"
          >
            <AnimatePresence>
              {showVideo ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "80vh",
                      objectFit: "contain",
                      backgroundColor: "black",
                    }}
                  >
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5821-NWrMxcgXbgSEYHLOHMnAr9cuZdUsUr.MOV"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center"
                    onClick={() => setShowVideo(false)}
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-video"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-black transition-colors"
                      onClick={() => setShowVideo(true)}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-8 h-8 ml-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                      </svg>
                    </motion.button>
                  </div>
                  <Image
                    src="/placeholder.svg?height=480&width=854"
                    alt="Video placeholder"
                    width={854}
                    height={480}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      <Features />
      <HowItWorks />
      <section className="py-32 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Stay Updated</h2>
            <p className="text-gray-600 mb-8">Join our newsletter to get the latest updates and features.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="max-w-xs"
                required
              />
              <Button type="submit" className="bg-black text-white hover:bg-black/90 transition-colors">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

