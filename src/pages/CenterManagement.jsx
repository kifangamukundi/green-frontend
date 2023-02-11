import { Helmet } from 'react-helmet-async';
import styles from "../style";

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
        

        <ol className={`${styles.paragraph} list-decimal list-inside`}>
            <li>Coordination and planning for production safe storage household’s including institutions food requirements and for various markets</li>
            <li>Provide facilities and space for produce aggregation, loading and unloading ramps, value addition, drying and storage</li>
            <li>Provide a platform for all service providers/ occupations especially youth and women to offer quality services to value chain actors at competitive rates</li>
            <li>Provide training facilities including ITK knowledge exchange platform, nutrition, wellness and recreational center</li>
        </ol>
        
    </div>

  </div>
);

export default CenterManagement;
