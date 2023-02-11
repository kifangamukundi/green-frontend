import {  resource } from "../assets";
import styles, { layout } from "../style";

import {Link} from "react-router-dom";
import Button from "./Button";

const WardResourceCenter = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={resource} alt="WardResourceCenter" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
      

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading3}>
      Ward Resource Centre <br className="sm:block hidden" /> Management Team
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The team will be responsible for overall leadership, planning and implementation of the ward ecosystem restoration and regenerative farming practices road map.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
      <Link to={`/resource-center-management`}>
        <Button styles={`mt-10`} />
      </Link>
      </div>
    </div>
  </section>
);

export default WardResourceCenter;
