import {Link} from "react-router-dom";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} bg-gray-300`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-sans font-semibold text-green-500 text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-sans font-normal text-green-900 text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        What is, <br className="sm:block hidden" /> Green Villages International.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Green Villages International (GreVillas Int’l) is a Community Based Organization (CBO) 
      formed on 20th Jan 2019 but registered in Jan 2020. It covers Ikolomani 
      sub-county in Kakamega County. It is a non-political and non-religious group 
      whose main objective is to improve livelihoods in the community through 
      sustainable utilization of natural resources and provision of regenerative agriculture
       and other socio- economic services to all households in the target sub-county.
      </p>
      <Link to={`/about`}>
        <Button styles={`mt-10`} />
      </Link>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
