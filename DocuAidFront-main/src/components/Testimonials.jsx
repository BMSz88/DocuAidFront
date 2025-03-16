import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "DocuAid has transformed how our team navigates documentation. What used to take hours now takes seconds. It's like having an expert colleague who's read everything.",
    author: "Sarah Johnson",
    role: "Senior Developer at TechFlow",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    content: "As a product manager, I need to quickly find information across multiple documentation sites. DocuAid has become my go-to tool for rapid research and decision making.",
    author: "Michael Chen",
    role: "Product Manager at InnovateCorp",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    content: "I was spending 30% of my workday just searching through docs. Since using DocuAid, I've reclaimed that time and can focus on actual problem-solving. Game changer!",
    author: "Priya Patel",
    role: "Software Engineer at DataSphere",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prevCurrent) => 
        prevCurrent === testimonials.length - 1 ? 0 : prevCurrent + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrent((prevCurrent) => 
      prevCurrent === 0 ? testimonials.length - 1 : prevCurrent - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrent((prevCurrent) => 
      prevCurrent === testimonials.length - 1 ? 0 : prevCurrent + 1
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by Teams Everywhere
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See what our users are saying about how DocuAid is transforming 
            the way they work with documentation.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {}
          <div className="relative h-[280px] sm:h-[240px] md:h-[220px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                      <img 
                        src={testimonials[current].image} 
                        alt={testimonials[current].author}
                        className="rounded-full object-cover w-full h-full border-2 border-primary-200"
                      />
                      <div className="absolute -top-2 -left-2 bg-primary-500 rounded-full p-1.5">
                        <Quote className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      "{testimonials[current].content}"
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonials[current].author}</h4>
                      <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {}
          <div className="flex justify-center mt-8 gap-2">
            <button 
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    current === index ? 'bg-primary-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;