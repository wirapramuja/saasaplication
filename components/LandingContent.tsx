'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const testimonials = [
  {
    name: 'Joel',
    avatar: 'J',
    title: 'Software Engineer',
    description: "This is the best application I've ever used!"
  },
  {
    name: 'Antonio',
    avatar: 'A',
    title: 'Designer',
    description: 'I use this daily for generating new photos!'
  },
  {
    name: 'Mark',
    avatar: 'M',
    title: 'CEO',
    description:
      'This app has changed my life, cannot imagine working without it!'
  },
  {
    name: 'Mary',
    avatar: 'M',
    title: 'CFO',
    description: 'The best in class, definitely worth the premium subscription!'
  }
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-white text-4xl font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testi) => (
          <Card
            key={testi.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{testi.name}</p>
                  <p className="text-zinc-400 text-sm">{testi.title}</p>
                </div>
              </CardTitle>
              <CardContent className="px-0 pt-4">
                {testi.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
