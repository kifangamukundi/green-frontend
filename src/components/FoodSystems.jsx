import { apple, food, google } from "../assets";
import styles, { layout } from "../style";

const FoodSystems = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={food} alt="FoodSystems" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
      

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading3}>
      Sub County and Ward Sustainable Resilient Food Systems <br className="sm:block hidden" /> Technical &
      Committee
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The aim is to ensure buy-in of the approach, identify committed and credible persons within the community and of course clearance to freely engage with the community.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default FoodSystems;
