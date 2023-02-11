import { comsumption} from "../assets";
import styles, { layout } from "../style";
import {Link} from "react-router-dom";
import Button from "./Button";

const ResponsibleConsumption = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={comsumption} alt="ResponsibleConsumption" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
      

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading3}>
      Responsible <br className="sm:block hidden" /> Consumption
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      This committee will have the responsibility of promoting production of all these food groups at household level, followed by nutrition education which will combine both sensitizations on the need to consume healthy diets as well as setting up learning centers for preparation of healthy diets using locally produced foods.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
      <Link to={`/responsible-consumption`}>
        <Button styles={`mt-10`} />
      </Link>
      </div>
    </div>
  </section>
);

export default ResponsibleConsumption;
