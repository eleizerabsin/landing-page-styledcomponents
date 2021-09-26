import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { Button } from '../../globalStyles';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialIcon
} from './Footer.elements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Fusce vulputate accumsan massa sit amet feugiat. Nullam vehicula nibh sodales mollis commodo. 
        </FooterSubHeading>
        <FooterSubText>
          Pellentesque ut nibh sed tellus malesuada tristique.
        </FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>
            Proin dictum
            </FooterLinkTitle>
            <FooterLink to='/sign-up'>Vestibulum vitae</FooterLink>
            <FooterLink to='/'>Vestibulum vitae</FooterLink>
            <FooterLink to='/'>Vestibulum vitae</FooterLink>
            <FooterLink to='/'>Vestibulum vitae</FooterLink>
            <FooterLink to='/'>Vestibulum vitae</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>
            Nam rutrum
            </FooterLinkTitle>
            <FooterLink to='/sign-up'>Vestibulum vitae</FooterLink>
            <FooterLink to='/'>Vestibulum vitae</FooterLink>
            <FooterLink to='/'>Vestibulum vitae</FooterLink>
            <FooterLink to='/'>Vestibulum vitae</FooterLink>
            <FooterLink to='/'>Vestibulum vitae</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>
            Aenean sed
            </FooterLinkTitle>
            <FooterLink to='/sign-up'>Vestibulum vitae</FooterLink>
            <FooterLink to='/'>Vestibulum vitae</FooterLink>
            <FooterLink to='/'>Vestibulum vitae</FooterLink>
            <FooterLink to='/'>Vestibulum vitae</FooterLink>
            <FooterLink to='/'>Vestibulum vitae</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>
            Mauris eget
            </FooterLinkTitle>
            <FooterLink to='/sign-up'>Vestibulum vitae</FooterLink>
            <FooterLink to='/'>Vestibulum vitae</FooterLink>
            <FooterLink to='/'>Vestibulum vitae</FooterLink>
            <FooterLink to='/'>Vestibulum vitae</FooterLink>
            <FooterLink to='/'>Vestibulum vitae</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            NITRO
          </SocialLogo>
          <WebsiteRights>NITRO 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target="_blank" arial-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target="_blank" arial-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target="_blank" arial-label="Youtube" rel="noopener noreferrer">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target="_blank" arial-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target="_blank" arial-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
