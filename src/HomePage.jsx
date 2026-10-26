import HeroCard from '@/components/HeroCard';
import TrendingPage from './pages/TrendingPage';
import CategoryPage from './pages/CategoryPage';
import BlogPage from './pages/BlogPage';
import TestimonialPage from './pages/TestimonialPage';
import { useEffect } from "react";
import { useLocation } from 'react-router-dom'

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      <HeroCard />
      <TrendingPage />
      <CategoryPage />
      <BlogPage />
      <TestimonialPage />
    </>
  );
};

export default HomePage;
