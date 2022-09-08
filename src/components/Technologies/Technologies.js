import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      I have an excellent set of skills that makes me stand out from others from Business, Front-end Development and Design, to Back-end Development.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            ReactJS <br />
            NextJS <br />
            StyledComponents <br />
            TailwindCSS <br />
            Some SCSS <br />
            MaterialUI <br />
            SEO Knowledge <br />
            HTML/CSS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>
            Back-End
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            Javascript <br />
            NodeJS <br />
            ExpressJS <br />
            NoSQL Databases (MongoDB, DynamoDB) <br />
            Some SQL (PostgreSQL) <br />
            Some Typescript <br />
            Some GraphQL <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3rem' />
        <ListContainer>
          <ListTitle>
            Other
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS Cognito <br />
            AWS S3 <br />
            AWS Amplify <br />
            AWS Route53 <br />
            AWS Cloudfront <br />
            AWS IAM <br />
            Adobe Photoshop <br />
            Adoboe Illustrator <br />
            Adobe Premier Pro <br />
            Adobe XD <br />
            Final Cut Pro <br />
            Figma <br />
            SanityIO <br />
            GROQ <br />
            3DS Max <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
