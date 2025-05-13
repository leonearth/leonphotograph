import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import type { HTMLAttributes } from 'react';

const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));

// Correct type-safe cast for motion.div in v7
const MotionDiv = motion.div as React.FC<
  HTMLAttributes<HTMLDivElement> & MotionProps
>;

export default function MonthPage() {
  const router = useRouter();
  const { year, month } = router.query;

  if (!year || !month) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Choose a Day - {year}/{month}</h1>
      <div className="grid grid-cols-5 gap-4">
        {days.map((day) => (
          <MotionDiv
            key={day}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            onClick={() => router.push(`/${year}/${month}/${day}`)}
            className="cursor-pointer bg-green-100 p-4 rounded text-center shadow-md"
          >
            <img
              src={`/photos/${year}/${month}/${day}/preview.jpg`}
              className="w-24 h-20 object-cover mx-auto mb-2"
              alt={`Preview for ${year}-${month}-${day}`}
            />
            <p className="font-medium">{day}</p>
          </MotionDiv>
        ))}
      </div>
    </main>
  );
}
