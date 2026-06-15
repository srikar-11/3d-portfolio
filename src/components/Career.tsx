import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – CS (AI &amp; ML)</h4>
                <h5>Guru Nanak Institute of Technology, Hyderabad</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Graduated with a focus on machine learning, deep learning, NLP, and
              computer vision. Active member of the AI &amp; ML Club—weekly study
              circles on diffusion models, presented sessions comparing diffusion
              models to GANs, and collaborated on inter-college hackathons.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AWS Solutions Architecture</h4>
                <h5>APAC Virtual Experience Program</h5>
              </div>
              <h3>Cert</h3>
            </div>
            <p>
              Hands-on virtual program covering cloud architecture fundamentals
              and AWS solution design, building practical familiarity with cloud
              infrastructure for deploying ML and backend applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analytics Job Simulation</h4>
                <h5>Deloitte Australia (via Forage)</h5>
              </div>
              <h3>Cert</h3>
            </div>
            <p>
              Completed a job simulation covering data classification, Tableau
              dashboards, and forensic data analysis—building practical experience
              with real-world data analytics workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IBM &amp; Qualcomm</h4>
                <h5>Data Science &amp; AI/ML Foundations</h5>
              </div>
              <h3>Cert</h3>
            </div>
            <p>
              IBM Data Science 101 and Qualcomm AI &amp; Machine Learning
              Foundations—covering the data science lifecycle, model building,
              and applied ML fundamentals. Also completed Accenture's Project
              Management Job Simulation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
