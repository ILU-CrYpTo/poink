"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-16 border-t">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[200px]">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5310223777692511676_x.jpg-C49psDPMbRXtgdpqjNlcN0WovzUhHT.jpeg"
                alt="Poink Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain transform scale-110"
                style={{
                  imageRendering: "auto",
                  WebkitFontSmoothing: "antialiased",
                }}
              />
            </motion.div>
            <span className="font-semibold">POINK</span>
          </Link>
          <p className="text-sm text-gray-600 text-center max-w-md">
            Connecting seamless interactions with the future of digital engagement.
          </p>
        </div>
        
        <div className="flex justify-center mt-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://twitter.com/poinkbot"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path
                  fill="currentColor"
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
              Do a Poink!
            </Link>
          </motion.div>
        </div>

        <div className="text-sm text-gray-600 pt-8 border-t mt-8 text-center">
          <p>© {new Date().getFullYear()} Poink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}