"use client"

import { motion } from "framer-motion"

interface VectorIllustrationProps {
  type: "bag" | "shopping" | "delivery" | "custom"
  className?: string
}

export function VectorIllustration({ type, className = "" }: VectorIllustrationProps) {
  const illustrations = {
    bag: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
        <motion.path
          d="M50,50 L150,50 L170,180 L30,180 Z"
          fill="none"
          stroke="url(#gradient-bag)"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M60,50 L60,30 C60,20 70,10 100,10 C130,10 140,20 140,30 L140,50"
          fill="none"
          stroke="url(#gradient-bag)"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient-bag" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff1f6b" />
            <stop offset="100%" stopColor="#2196f3" />
          </linearGradient>
        </defs>
      </svg>
    ),
    shopping: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
        <motion.path
          d="M40,60 L50,150 L150,150 L160,60 Z"
          fill="none"
          stroke="url(#gradient-shopping)"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M70,60 L70,40 C70,30 80,20 100,20 C120,20 130,30 130,40 L130,60"
          fill="none"
          stroke="url(#gradient-shopping)"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.circle
          cx="70"
          cy="170"
          r="10"
          fill="none"
          stroke="url(#gradient-shopping)"
          strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
        />
        <motion.circle
          cx="130"
          cy="170"
          r="10"
          fill="none"
          stroke="url(#gradient-shopping)"
          strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 2.2, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="gradient-shopping" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff1f6b" />
            <stop offset="100%" stopColor="#00ff87" />
          </linearGradient>
        </defs>
      </svg>
    ),
    delivery: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
        <motion.path
          d="M20,120 L50,120 L60,90 L150,90 L160,120 L180,120"
          fill="none"
          stroke="url(#gradient-delivery)"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.rect
          x="20"
          y="120"
          width="40"
          height="30"
          fill="none"
          stroke="url(#gradient-delivery)"
          strokeWidth="4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />
        <motion.rect
          x="140"
          y="120"
          width="40"
          height="30"
          fill="none"
          stroke="url(#gradient-delivery)"
          strokeWidth="4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />
        <motion.circle
          cx="40"
          cy="150"
          r="15"
          fill="none"
          stroke="url(#gradient-delivery)"
          strokeWidth="4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
        />
        <motion.circle
          cx="160"
          cy="150"
          r="15"
          fill="none"
          stroke="url(#gradient-delivery)"
          strokeWidth="4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.7, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="gradient-delivery" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2196f3" />
            <stop offset="100%" stopColor="#00ff87" />
          </linearGradient>
        </defs>
      </svg>
    ),
    custom: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
        <motion.path
          d="M100,20 C140,20 170,50 170,90 C170,130 140,160 100,160 C60,160 30,130 30,90 C30,50 60,20 100,20 Z"
          fill="none"
          stroke="url(#gradient-custom)"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M100,40 L100,140"
          fill="none"
          stroke="url(#gradient-custom)"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M50,90 L150,90"
          fill="none"
          stroke="url(#gradient-custom)"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient-custom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff1f6b" />
            <stop offset="50%" stopColor="#2196f3" />
            <stop offset="100%" stopColor="#00ff87" />
          </linearGradient>
        </defs>
      </svg>
    ),
  }

  return illustrations[type]
}
