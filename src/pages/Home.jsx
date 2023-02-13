import { Helmet } from 'react-helmet-async';
import {Link} from "react-router-dom";
import { services } from "../constants";
import styles, { layout } from "../style";
import { Business, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";
import Button from "../components/Button";

const ServiceCard = ({ title, content, image, url, index }) => (
  <section id={index} className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={image} alt={title} className="w-[100%] h-[100%] relative z-[5]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading3}>
        {title}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {content}
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
      <Link to={`${url}`}>
        <Button styles={`mt-10`} />
      </Link>
      </div>
    </div>
  </section>
);

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
        {/* services combined from constants */}
        <div>
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>    
    </div>

  </div>
);

export default Home;
