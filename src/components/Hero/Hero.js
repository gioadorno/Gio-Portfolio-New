import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Giovanni's Portfolio
      </SectionTitle>
      <SectionText>
        My ambition is to bring vision to life, utilizing my range of skills from business to software engineering.
      </SectionText>
      <Button>
       <a href='mailto:adorno.gio@gmail.com'>Learn More</a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;