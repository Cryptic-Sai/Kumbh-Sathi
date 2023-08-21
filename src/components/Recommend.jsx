import React, {useState} from 'react'

import styled from 'styled-components';
import Destination1 from '../assets/Destination1.png';
import Destination2 from '../assets/Destination2.png';
import Destination3 from '../assets/Destination3.png';
import Destination4 from '../assets/Destination4.png';
import Destination5 from '../assets/Destination5.png';
import Destination6 from '../assets/Destination6.png';
const Recommend = ()=> {

  const data = [
    {
      image: Destination1,
      title: "Ujjain Kumbh",
      subTitle: "Ujjain's Kumbh Mela occurs every 12 years by the Shipra River. Pilgrims gather for sacred dips and venerate the Mahakaleshwar Jyotirlinga Temple, a revered Shiva shrine, making it the Kumbh's.",
      
    },
    {
      image: Destination2,
      title: "Haridwar Kumbh",
      subTitle: "Every 12 years, Haridwar's Kumbh Mela beckons souls for purifying Ganges dips, vibrant Ganga Aarti, and contemplation at the revered Har Ki Pauri, creating a spiritually enriching pilgrimage.",
    },
    {
      image: Destination3,
      title: "Nashik Kumbh",
      subTitle: "Amid the Godavari's tranquil banks, the Nashik Kumbh Mela gathers devotees every 12 years, blending ritual bathing with cultural vibrancy and reverence at Trimbakeshwar.",
      
    },
    {
      image: Destination4,
      title: "Prayagraj Kumbh",
      subTitle: "The world's largest spiritual gathering, the Prayagraj Kumbh Mela, unfurls at the confluence of three rivers, drawing millions for transformative dips, rituals, and cultural immersion at Triveni Sangam.",
      
    },
    {
      image: Destination5,
      title: "Varanasi",
      subTitle: "Varanasi's Ganga Aarti: Adorned priests sway, orchestrating flame dances at twilight. Flickering lamps on Ganges create celestial connection, uniting mortals and divine. A captivating blend of spirituality and spectacle tradition.",
    },
    
    {
      image: Destination6,
      title: "Omkareshwar",
      subTitle: "Omkareshwar, nestled by Narmada, cradles ancient devotion. Jyotirlinga temple's chants draw pilgrims, while river's embrace weaves sacred ambiance. Tranquil haven uniting faith, nature, and reverence.",
    },
  ];

  const packages = [
    "Dhams",
    "Nearby Places",
    "The Group Tour",
    "Emergency Services",
  ];

  const [active, setActive] = useState(1);

  return (
    <Section id='recommend'>
      <div className="title">
        <h2>Recommend Destinations</h2>
      </div>

      <div className="packages">
        <ul>
          {
            packages.map((pkg, index)=>{
              return(
                <li className={active === index+1? "active":""} onClick={()=> setActive(index+1)}>
                  {pkg}
                </li>
              )
            })
          }
        </ul>
      </div>

      <div className="destinations">
        {
          data.map(destination =>{
            return(
              <div className="destination">
                <img src={destination.image} alt="destination image" />
                <h3>{destination.title}</h3>
                <p>{destination.subTitle}</p>
                <div className='info'>
                  {/* <div className="services">
                    <img src={info1} alt="info" />
                    <img src={info2} alt="info" />
                    <img src={info3} alt="info" />
                  </div> */}
                  {/* <h4>Rs {destination.cost}</h4> */}
                </div>
                <button>Read More</button>
                {/* <div className="distance">
                  <span>100km</span>
                  <span>{destination.duration}</span>
                </div> */}
              </div>
            )
          })
        }
      </div>
    </Section>
  )
}
export default Recommend;
const Section = styled.section`
  padding: 2rem 0;
  .title{
    text-align: center;
  }
  .packages{
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul{
      list-style-type: none;
      display: flex;
      width: max-content;
      li{
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active{
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  
  .destinations{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination{
      padding 1rem;
      display:flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: aliceblue;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover{
        transform: translate(0.4rem, -1rem);
        box-shadow: rgba(0,0,0,0.35) 0 5px 15px;
      }
      img{
        width: 100%;
      }
      .info{
        display: flex;
        align-items: center;
        flex-direction: column;
        .services{
          display: flex;
          gap: 0.3rem;
          img{
            width: 2rem;
            border-radius: 1rem;
            background-color: #4d2ddb84;
            padding: 0.2rem 0.4rem;
          }
          .button{
            border-radius: 1rem;
          }
        }
        
      }
      
      .distance{
        display:flex;
        justify-content: space-between;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px){
    .packages{
      ul{
        li{
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active{
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations{
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
