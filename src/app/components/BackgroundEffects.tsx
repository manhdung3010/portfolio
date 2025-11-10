'use client';

import dynamic from 'next/dynamic';

const AnimatedBackground = dynamic(
  () => import('./AnimatedBackground'),
  { ssr: false, loading: () => null }
);

const FloatingParticles = dynamic(
  () => import('./FloatingParticles'),
  { ssr: false, loading: () => null }
);

export default function BackgroundEffects() {
  return (
    <>
      <AnimatedBackground />
      <FloatingParticles />
    </>
  );
}
