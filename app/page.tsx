"use client";
import Banner from "@/components/landing/Banner";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Banner />
    </>
  );
}
