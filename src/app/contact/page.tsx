"use client";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";

export default function Contact() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Contact Us whenever you want.
        </div>
        <div className="flex items-center justify-center gap-5">
          <Link href={"https://www.linkedin.com/in/abir-dutta-a30b22251/"}>
            <button className="flex items-center justify-center gap-2 bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              <LinkedInIcon /> Linked In
            </button>
          </Link>
          <Link href={"https://github.com/abir446"}>
            <button className="flex items-center justify-center gap-2 bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              <GitHubIcon />
              GitHub
            </button>
          </Link>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
