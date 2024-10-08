"use client";
import React, { useEffect, useState } from "react";
import Contact from "../components/contact/Contact";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; 
  }

  return (
    <>
      <Contact />
    </>
  );
}
