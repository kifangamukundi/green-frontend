import { Helmet } from 'react-helmet-async';
import styles, { layout } from "../style";
import { star  } from "../assets";

const points = [
  {
    id: "feature-1",
    icon: star,
    content:
      "Capacity building of the committees.",
  },
  {
    id: "feature-2",
    icon: star,
    content:
      "Backstopping of planned activities.",
  },
  {
    id: "feature-3",
    icon: star,
    content:
      "Approval of the annual work plans and budgets.",
  },
  {
    id: "feature-4",
    icon: star,
    content:
      "Link partners to the committees for implementation of relevant projects.",
  },
  {
    id: "feature-5",
    icon: star,
    content:
      "Organize technology dissemination forums for the service providers, occupations and lead farmers.",
  },
  {
    id: "feature-6",
    icon: star,
    content:
      "Monitor all planned activities prepare and share independent performance reports.",
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

const TechnicalCommittee = () => (
  <div>
    <Helmet>
        <title>Sub County and Ward Sustainable Resilient Food Systems Technical Committee</title>
    </Helmet>
    
    {/* About className="container w-full md:max-w-3xl mx-auto pt-20" */}
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <h1 className={styles.heading2}>
        Sub County and Ward Sustainable Resilient Food Systems Technical Committee
        </h1>
        <p className={`${styles.paragraph} mt-5`}>
        The CBO is conscious of the important role government departments have in providing technical support and oversight in all community projects and programs.
        </p>
        <p className={`${styles.paragraph} mt-5`}>
        Our consultations begin from the administrative leadership both for the two levels of government both at the ward as well as the sub county levels.
        </p>
        <p className={`${styles.paragraph} mt-5`}>
        The aim is to ensure buy-in of the approach, identify committed and credible persons within the community and of course clearance to freely engage with the community.
        </p>
        <p className={`${styles.paragraph} mt-5`}>
        We also hold briefing meeting with the relevant sub county and ward technical officers to identify gaps and build synergies with ongoing projects and programs.
        </p>
        <p className={`${styles.paragraph} mt-5`}>
        Finally, we emphasize the need to work together from the planning stages all through to implementation thus the need to form a standing committee with the following roles:
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

export default TechnicalCommittee;
