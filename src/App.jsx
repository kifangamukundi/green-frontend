import styles from "./style";
import { FoodSystems, Business, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Restoration } from "./components";
import WardResourceCenter from "./components/WardResourceCenter";
import WasteManagement from "./components/WasteManagement";
import ResponsibleConsumption from "./components/ResponsibleConsumption";
import Sanitation from "./components/Sanitation";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <FoodSystems />
        <WardResourceCenter/>
        <WasteManagement/>
        <ResponsibleConsumption/>
        <Sanitation/>
        <Restoration />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
