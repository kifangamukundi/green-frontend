import {  sanitation } from "../assets";
import styles, { layout } from "../style";
import {Link} from "react-router-dom";
import Button from "./Button";

const Sanitation = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={sanitation} alt="Sanitation" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
      

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading3}>
      Sanitation and  <br className="sm:block hidden" /> food safety
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The dream of having all households access safe drinking water is achievable for many parts of Kenya due to abundance of natural springs and permanent rivers.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
      <Link to={`/sanitation-and-food-safety`}>
        <Button styles={`mt-10`} />
      </Link>
      </div>
    </div>
  </section>
);

export default Sanitation;
