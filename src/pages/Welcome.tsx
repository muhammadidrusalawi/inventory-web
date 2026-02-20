import HeroSection from '@/components/hero.tsx';
import HomeLayout from '@/layouts/HomeLayout.tsx';

export default function Welcome() {
  return (
    <HomeLayout>
      <HeroSection />
    </HomeLayout>
  );
}
