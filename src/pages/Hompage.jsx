import Categories from '../homepageComponents/Categories';
import Experience from '../homepageComponents/Experience';
import Hero from '../homepageComponents/Hero';
import PopularDestinations from '../homepageComponents/PopularDestinations';
import TopDestinations from '../homepageComponents/TopDestinations';
import Testimonies from '../homepageComponents/Testimonies';
import NewsLetter from '../homepageComponents/NewsLetter';
function Homepage() {
  return (
    <>
      <Hero />
      <Categories />
      <Experience />
      <PopularDestinations />
      <TopDestinations />
      <Testimonies />
      <NewsLetter />
    </>
  );
}

export default Homepage;
