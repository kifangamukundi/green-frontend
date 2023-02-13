import { Helmet } from 'react-helmet-async';
import styles, { layout } from "../style";
import ExampleTest from "../mdfiles/example.md";


const Example = () => (
  <div>
    <Helmet>
        <title>Example</title>
    </Helmet>
    
    {/* About className="container w-full md:max-w-3xl mx-auto pt-20" */}
    <div className="container w-full md:max-w-3xl mx-auto pt-20 prose">
      <ExampleTest />
    </div>

  </div>
);

export default Example;
