// src/components/TestimonialsSection.tsx
import React from 'react';

const testimonials = [
  {
    id: 1,
    text: "I wasn't sure what I was getting into when the call with SSDI Guidance began, but they were patient with me as we walked through the application process and answered all my questions. They stayed on the phone with me for 90 minutes and never hesitating to go back and discuss topics we had already covered.",
    author: "Tim Burns",
    stars: 5
  },
  {
    id: 2,
    text: "Thank you so much, I couldn't have done it alone!",
    author: "Rose Curtis",
    stars: 5
  },
  {
    id: 3,
    text: "GREAT Customer Service!! Wow... just wow! My experience was absolutely Top-Notch!! They were easy to talk with, trustworthy and helped me step-by-step. Best two (2) hour phone call I have ever had!!",
    author: "Kyle Morgan",
    stars: 5
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0D2C5C] mb-12">What people are saying about SSDI Guidance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-[#0D2C5C] text-4xl mb-4">❝</div>
              
              <div className="text-[#D8A627] flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-6">{testimonial.text}</p>
              
              <p className="font-bold text-[#0D2C5C]">{testimonial.author}</p>
              
              <div className="text-[#0D2C5C] text-4xl text-right">❞</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;