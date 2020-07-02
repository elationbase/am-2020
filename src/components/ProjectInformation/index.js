import React from 'react';

const ProjectInformation = ({ project, company, roles, dateReleased }) => (
  <>
    <section>
      <h3>Project</h3>
      <p>{project}</p>
    </section>
    <section>
      <h3>Company</h3>
      <p>{company}</p>
    </section>
    <section>
      <h3>Role</h3>
      <div>
        {roles.map((role, index) => (
          <p key={index} style={{ backgroundColor: 'lightgray', padding: 16 }}>
            {role}
          </p>
        ))}
      </div>
    </section>
    <section>
      <h3>Date Released</h3>
      <p>{dateReleased}</p>
    </section>
  </>
);

export default ProjectInformation;
