'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard/patient');
  }, [router]);

  return (
    <div className="space-y-4">
        <Skeleton className="h-12 w-1/4" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
        </div>
        <Skeleton className="h-64" />
    </div>
  )
}
