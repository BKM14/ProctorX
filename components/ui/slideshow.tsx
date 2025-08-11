"use client";

import React, { useState, useEffect } from 'react';

export default function Slideshow () {

  const [index, setIndex] = useState(0);

  const texts = [
    "Hello, World",
    "Secure Coding Starts Here",
    "ProctorX Ensures Exam Integrity",
    "Code. Compile. Conquer.",
    "Next-Gen Lab Assessments",
    "Write Code with Confidence",
    "AI-Powered Exam Monitoring"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='my-auto'>
      <div className='font-extrabold text-7xl'>ProctorX</div>
      <div className="relative w-max font-mono overflow-hidden">
      <p className="text-slate-900 animate-typewriter inline-block">
        {texts[index]}
        <span className="animate-caret inline-block w-[0.125em] bg-black ml-1">&nbsp;</span>
      </p>
      </div>
    </div>
  )
}