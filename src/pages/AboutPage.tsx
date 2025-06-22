import React from 'react';

export default function AboutPage() {
  return (
    <div className="page active">
      <section className="about-header">
        <div className="container">
          <h1>About NU Mantra Infotech</h1>
          <p>Pioneering Innovation in Electronics and Robotics Since 2018</p>
        </div>
      </section>

      <section className="company-overview">
  <div className="container">
    <div className="about-content">
      <h2>Company Overview</h2>
      <p><strong>NU Mantra Infotech stands at the forefront of electronics and robotics innovation, serving educators, makers, and professionals since 2018.</strong></p>
      
      <div className="mission-vision-container">
        <div className="mission-vision">
          <div className="mission">
            <h3>Our Mission</h3>
            <p>Democratizing access to cutting-edge electronics and fostering innovation through comprehensive IoT and robotics solutions. We believe that technology should be accessible to everyone, from students learning their first circuit to engineers developing the next breakthrough product.</p>
          </div>
          <div className="vision">
            <h3>Our Vision</h3>
            <p>To become the leading platform empowering makers, educators, and professionals with advanced electronics technology. We envision a world where innovative ideas can quickly become reality through accessible, high-quality components and expert support.</p>
          </div>
        </div>
      </div>

      <div className="core-values">
        <h3>Core Values</h3>
        <div className="values-grid">
          <div className="value-item">
            <strong>Quality First</strong>
            <p>Every component is tested and verified for reliability</p>
          </div>
          <div className="value-item">
            <strong>Innovation</strong>
            <p>Continuously seeking the latest technologies and solutions</p>
          </div>
          <div className="value-item">
            <strong>Education</strong>
            <p>Supporting learning and knowledge sharing in STEM fields</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


     <section className="company-story">
  <div className="container">
    <h2>Our Story & Journey</h2>
    <p><strong>NU Mantra Infotech began with a simple mission — to help engineers, students, and makers easily access reliable electronics at honest prices.</strong></p>

    <div className="timeline">
      <div className="timeline-item">
        <div className="year">Late 2023</div>
        <div className="content">
          <h4>Humble Beginnings</h4>
          <p>Started by a small team of engineers in Pune with a few core components, working out of a shared workspace and fulfilling local orders manually.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="year">Early 2024</div>
        <div className="content">
          <h4>Early Traction</h4>
          <p>Received positive feedback from local colleges and hobbyists. We added more boards, modules, and sensors to our catalog based on user needs.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="year">Mid 2024</div>
        <div className="content">
          <h4>Better Logistics</h4>
          <p>Shifted to a dedicated fulfillment space, improved packaging and shipping timelines, and partnered with national couriers for pan-India delivery.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="year">Late 2024</div>
        <div className="content">
          <h4>Expanding Reach</h4>
          <p>Collaborated with student tech clubs and small startups. Launched educational bundles and basic kits for labs and workshops.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="year">2025</div>
        <div className="content">
          <h4>Staying Focused</h4>
          <p>Rather than scaling fast, we focused on consistency, honest pricing, and building a support-driven community around electronics and embedded tech.</p>
        </div>
      </div>
    </div>
  </div>
</section>


     <section className="team">
  <div className="container">
    <h2>Our Team & Vision</h2>
    <p><strong>A small but dedicated team working to make electronics more accessible and beginner-friendly across India.</strong></p>

    <div className="team-stats">
      <div className="stat-item">
        <span className="stat-number">6</span>
        <span className="stat-label">Team Members</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">1.5+</span>
        <span className="stat-label">Years of Learning & Building</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">15+</span>
        <span className="stat-label">Colleges & Startups Served</span>
      </div>
    </div>

    <div className="expertise-areas">
      <h1>Areas We Focus On</h1>
      <br></br>
      <div className="expertise-grid">
        <div className="expertise-item">
          <h4>Prototyping Support</h4>
          <p>Quick-turn electronics kits and modules to bring ideas to life</p>
        </div>
        <div className="expertise-item">
          <h4>IoT & Wireless</h4>
          <p>Helping beginners with WiFi modules, cloud setup, and sensors</p>
        </div>
        <div className="expertise-item">
          <h4>Lab Kits & Tools</h4>
          <p>Supplying practical, affordable tools for college labs and workshops</p>
        </div>
        <div className="expertise-item">
          <h4>Friendly Tech Support</h4>
          <p>We respond quickly and simplify the tech for anyone starting out</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}