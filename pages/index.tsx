import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import type { HTMLAttributes } from 'react';

const years = ['2022', '2023', '2024','2025'];

// Type-safe cast for Framer Motion v7
const MotionDiv = motion.div as React.FC<
  HTMLAttributes<HTMLDivElement> & MotionProps
>;

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Choose a Year</h1>
      <div className="grid grid-cols-3 gap-6">
        {years.map((year) => (
          <MotionDiv
            key={year}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            onClick={() => router.push(`/${year}`)}
            className="cursor-pointer bg-gray-200 rounded-lg p-4 text-center shadow-lg"
          >
            <img
              src={`/photos/${year}/preview.jpg`}
              className="w-40 h-32 object-cover mx-auto mb-2"
              alt={`Preview for ${year}`}
            />
            <p className="text-lg font-semibold">{year}</p>
          </MotionDiv>
        ))}
      </div>
    </main>
  );
}
