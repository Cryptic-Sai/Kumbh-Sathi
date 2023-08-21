import React from 'react'
import styled from 'styled-components';
import avatarImage from '../assets/avatarImage.jpg'
const Testimonial = () => {
  return (
    <Section id='testimonials'>
      <div className="title">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Pilgrim Experience</h4>
              <span>"Kumbh Mela unites diverse souls in faith, reminding us of our shared humanity." - <b>Aarti Devi</b></span>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Artists and Performers</h4>
              <span>"Kumbh Mela's energy fueled my art, creating an unforgettable experience." -<b>Nisha Kapoor</b> </span>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Community Leaders</h4>
              <span>"Organizing Kumbh Mela brings pride and prosperity to our town, showcasing our heritage." -<b> M Anjali Patel</b></span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
export default Testimonial;
const Section = styled.section`
  margin: 5rem 0;
  .title{
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials{
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial{
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0;
      transition: 0.3s ease-in-out;
      &:hover{
        transform: translate(0.4rem, -1rem);
        box-shadow: rgba(0,0,0,0.35) 0 5px 15px;
      }
      .info{
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img{
          border-radius: 3rem;
          width: 3rem;
          height: 3rem;
        }
        .details{
          span{
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px){
    .testimonials{
      flex-direction: column;
      margin: 0;
      .testimonial{
        justify-content: center;
        .info{
          flex-direction: column;
          justify-content-center;
        }
      }
    }
  }
`;