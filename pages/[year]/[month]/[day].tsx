import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const photoCount = 10; // placeholder photo count

export default function DayGallery() {
  const router = useRouter();
  const { year, month, day } = router.query;

  // Only render if routing info is ready
  if (!year || !month || !day) return null;

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Gallery - {year}/{month}/{day}</h1>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: photoCount }, (_, i) => (
          <img
            key={i}
            src={`/photos/${year}/${month}/${day}/photo${i + 1}.jpg`}
            className="w-full h-48 object-cover rounded shadow-md"
            alt={`Photo ${i + 1}`}
          />
        ))}
      </div>
    </main>
  );
}
