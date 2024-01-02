"use client";

import { NextPage } from "next";
import MainSection from "@/components/MainSection";
import Header from "@/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainSection />
    </>
  );
};

export default Home;
