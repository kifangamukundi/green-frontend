import { Helmet } from 'react-helmet-async';
import styles from "../style";

const TechnicalCommittee = () => (
  <div>
    <Helmet>
        <title>Sub County and Ward Sustainable Resilient Food Systems Technical Committee</title>
    </Helmet>
    
    {/* About */}
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

        <ol className={`${styles.paragraph} list-decimal list-inside`}>
            <li>Capacity building of the committees</li>
            <li>Backstopping of planned activities</li>
            <li>Approval of the annual work plans and budgets</li>
            <li>Link partners to the committees for implementation of relevant projects</li>
            <li>Organize technology dissemination forums for the service providers, occupations and lead farmers</li>
            <li>Monitor all planned activities prepare and share independent performance reports</li>
        </ol>
        
    </div>

  </div>
);

export default TechnicalCommittee;
