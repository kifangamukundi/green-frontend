import { catchment } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
 

const Catchment  = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading3}>
      Habitat Catchment  <br className="sm:block hidden" /> Council of Elders
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      This will consist of not less than respected elders within the catchment and will oversee activities of the Habitat Catchment Restoration & Regenerative farming Committee.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={catchment} alt="Catchment" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Catchment ;
