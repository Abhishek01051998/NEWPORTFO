import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Internship Role */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer (Intern)</h4>
                <h5>Amazon (AWS Redshift)</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Architected click metrics for cluster creation, increasing data accuracy by 47% and 
              reducing error rates by 80% via Gamma pipeline deployments. Created visualization 
              dashboards on Amazon wiki to monitor daily user console usage and interaction trends.
            </p>
          </div>
                    {/* Current / Most Recent Role */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Amazon (AWS Redshift)</h5>
              </div>
              <h3>2023 - 2025</h3>
            </div>
            <p>
              Developed serverless datashare features using AWS Secrets Manager, improving access by 30%. 
              Optimized recovery systems and centralized API calls, reducing latency by 40% and redundant 
              requests by 50% for 200k+ users. Managed on-call rotations maintaining 99.9% uptime and 
              introduced capacity reservations to improve cost predictability by 35%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;