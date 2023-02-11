import { Helmet } from 'react-helmet-async';
import styles from "../style";
import { Catchment, Sanitation, ResponsibleConsumption, WasteManagement, WardResourceCenter, FoodSystems, Business, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Restoration } from "../components";

const Home = () => (
  <div>
    <Helmet>
        <title>Green Villages International</title>
    </Helmet>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div>
        <Stats />
        <Business />
        <Clients />
        <FoodSystems />
        <WardResourceCenter/>
        <Catchment />
        <WasteManagement/>
        <ResponsibleConsumption/>
        <Restoration />
        <Sanitation/>
        
        
    </div>

  </div>
);

export default Home;
