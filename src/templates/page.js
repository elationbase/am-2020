import React from 'react';
import {
  Design,
  HtmlHead,
  Introduction,
  Layouts,
  ProjectHeader,
  ProjectInformation,
  ProjectStack,
  Screens,
} from '../components';

const Page = ({ pageContext }) => {
  const {
    title,
    content,
    acf: { company, main_color, url, project, role, date_released, color_palette, typography, stack, screens },
  } = pageContext;

  return (
    <Layouts.Base>
      <HtmlHead title={project} />
      <ProjectHeader mainColor={main_color} company={company} title={title} url={url} />
      <main>
        <article>
          <ProjectInformation project={project} company={company} roles={role} dateReleased={date_released} />
        </article>
        <article>
          <Introduction content={content} />
          <Design colorPalette={color_palette} typography={typography} />
          <ProjectStack stacks={stack} />
          <Screens images={screens} />
        </article>
      </main>
    </Layouts.Base>
  );
};

export default Page;
