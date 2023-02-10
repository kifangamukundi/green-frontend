import { restoration } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
 

const Restoration = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading3}>
      Habitat catchment Restoration <br className="sm:block hidden" /> & Regenerative farming Committee
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The committee that will implement the integrated community empowerment program with the beneficiary households.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={restoration} alt="restoration" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Restoration;
