import React from 'react';
import { About, Footer, Header, Hero, HtmlHead, Introduction, Layouts, Projects, Stack } from '../components';

const IndexPage = () => (
  <Layouts.Base>
    <HtmlHead title="Alvaro Montero" />
    <Header />
    <Hero />
    <Introduction />
    <Projects />
    <Stack />
    <About />
    <Footer />
  </Layouts.Base>
);

export default IndexPage;
