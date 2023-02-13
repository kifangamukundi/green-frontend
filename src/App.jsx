import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./style";
import { Navbar, Footer } from "./components";
import { Home, About, TechnicalCommittee, CenterManagement } from "./pages";

const App = () => (
  <BrowserRouter>
    <div className="bg-white w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-green-800`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/technical-committee" element={<TechnicalCommittee />} />
            <Route path="/resource-center-management" element={<CenterManagement />} />
          </Routes>
          
        </div>
      </div>

      <div className="bg-green-800">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>

    </div>
  </BrowserRouter>
);

export default App;
