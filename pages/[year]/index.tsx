import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import type { HTMLAttributes } from 'react';

const months = [
  '01', '02', '03', '04', '05', '06',
  '07', '08', '09', '10', '11', '12',
];

// Type-safe wrapper for motion.div
const MotionDiv = motion.div as React.FC<
  HTMLAttributes<HTMLDivElement> & MotionProps
>;

export default function YearPage() {
  const router = useRouter();
  const { year } = router.query;

  if (!year) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Choose a Month - {year}</h1>
      <div className="grid grid-cols-4 gap-4">
        {months.map((month) => (
          <MotionDiv
            key={month}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            onClick={() => router.push(`/${year}/${month}`)}
            className="cursor-pointer bg-blue-100 p-4 rounded text-center shadow-md"
          >
            <img
              src={`/photos/${year}/${month}/preview.jpg`}
              className="w-32 h-24 object-cover mx-auto mb-2"
              alt={`Preview for ${year}-${month}`}
            />
            <p className="font-medium">Month {month}</p>
          </MotionDiv>
        ))}
      </div>
    </main>
  );
}
