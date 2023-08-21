import React from 'react'
import styled from 'styled-components';
import {BsLinkedin,BsFacebook, BsGithub} from 'react-icons/bs';
import {AiFillGithub, AiFillInstagram} from 'react-icons/ai';


const Footer = ()=> {
  return (
    <FooterContainer>
      <ul className='links'>
        <li><a href="#hero">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#recommend">Places</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>

      <ul className="social_links">
        <li><BsFacebook/></li>
        <li><a href = "www.linkedin.com/in/saianand08"></a><BsLinkedin/></li>
        <li><AiFillInstagram/></li>
        <li><a href="www.github.com/CrypticSai-08"></a><BsGithub/></li>
      </ul>
    </FooterContainer>
  )
}
export default Footer;
const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  // background-color: #40e0d0;
  background-color: #83654d;
  padding: 2.5rem;
  border-radius: 0.5rem;
  ul{
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li{
      a{
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover{
          color: #302ce9;
        }
      }
      svg{
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover{
          color: #302ce9;
        }
      }
    }
  }
  
  @media screen and (min-width: 280px) and (max-width: 1024px){
    flex-direction: column;
    gap: 2rem;
    ul{
      flex-direction: column;
    }
    .socail_links{
      flex-direction: row;
    }
  }
`;