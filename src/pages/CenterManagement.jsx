import { Helmet } from 'react-helmet-async';
import styles, { layout } from "../style";
import { star  } from "../assets";

const points = [
  {
    id: "feature-1",
    icon: star,
    content:
      "Coordination and planning for production safe storage household’s including institutions food requirements and for various markets.",
  },
  {
    id: "feature-2",
    icon: star,
    content:
      "Provide facilities and space for produce aggregation, loading and unloading ramps, value addition, drying and storage.",
  },
  {
    id: "feature-3",
    icon: star,
    content:
      "Provide a platform for all service providers/ occupations especially youth and women to offer quality services to value chain actors at competitive rates.",
  },
  {
    id: "feature-4",
    icon: star,
    content:
      "Provide training facilities including ITK knowledge exchange platform, nutrition, wellness and recreational center.",
  },
];

const ListPoints = ({ icon, content, index }) => (
  <div className={`flex flex-col p-6 rounded-[20px] w-1/2 ${index !== points.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);


const CenterManagement = () => (
  <div>
    <Helmet>
        <title>Ward Resource Centre Management Team</title>
    </Helmet>
    
    {/* About */}
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <h1 className={styles.heading2}>
        Ward Resource Centre Management Team
        </h1>
        <p className={`${styles.paragraph} mt-5`}>
        The team will be responsible for overall leadership, planning and implementation of the ward ecosystem restoration and regenerative farming practices road map.
        </p>
        <p className={`${styles.paragraph} mt-5`}>
        In addition, the leaders will be responsible for facilitating inclusive collective action in production, marketing and value addition of priority enterprises by facilitating the MSMEs/actors to form ward clusters with a common Community Resource Centre (CRC) and satellite collection centers.
        </p>
        <p className={`${styles.paragraph} mt-5`}>
        The CRC will be run by a team represented by elected leaders Manager and assistant Managers in charge of: 
        </p>
        <p className={`${styles.paragraph} mt-5`}>
        Compassion and social Inclusion, Resilient Food systems, Habitat and soil health restoration, Marketing and value addition and Responsible consumption, sanitation & Food safety and hired staff to coordinate services on day to day basis. 
        </p>
        <p className={`${styles.paragraph} mt-5`}>
        The team will:
        </p>

        {/* Points */}
        <section id="features" className={layout.section}>
          <div className={`${layout.sectionImg} flex-wrap items-center`}>
            {points.map((feature, index) => (
              <ListPoints key={feature.id} {...feature} index={index} />
            ))}
          </div>
        </section>
        
    </div>

  </div>
);

export default CenterManagement;
