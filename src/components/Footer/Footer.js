import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            Email
          </LinkTitle>
          <LinkItem href='mailto:adorno.gio@gmail.com'>
            adorno.gio@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Always innovating
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/gioadorno'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/giovanni-adorno-16709a1a8/'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>

        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
