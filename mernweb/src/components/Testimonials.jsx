import React from "react";
import styled from "styled-components";
import Kathyayani from "./kathyayani.jpeg";
import kiranmaye from "./kiranmaye.jpeg";
import perumall from "./perumall.jpeg";
import uday from "./uday.jpeg";
import hari from "./hari.jpeg";
import shreya from "./shreya.jpeg";
import avani from "./avani.jpeg"
const Testimonials =() => {
  return (
    
     <Section id="testimonials">
      <div className="title">
        <h2>FOUNDERS</h2>
      </div>
      <div className="testimonials">
      <div className="testimonial">
          <p>
          
          </p>
          <div className="info">
            <img src={uday} alt="" />
            <div className="details">
              <h4>UDAY KUMAR</h4>
              <span>LIT2021039</span>
            </div>
          </div>
        </div>
      
        <div className="testimonial">
          <div className="info">
          <img src={perumall} alt="" />
            <div className="details">
              <h4>PERUMALL</h4>
              <span>LIT2021001</span>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p>
          
          </p>
          <div className="info">
            <img src={hari} alt="" />
            <div className="details">
              <h4>HARI PRASAD</h4>
              <span>LIT2021003</span>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p>
            
          </p>
          <div className="info">
            <img src={Kathyayani} alt="" />
            <div className="details">
              <h4>KATHYAYANI</h4>
              <span>LIT2021044</span>
            </div>
          </div>
        </div>
        </div>

        <div className="testimonials">
        <div className="testimonial">
          <p>
          
          </p>
          <div className="info">
          <img src={kiranmaye} alt="" />
            <div className="details">
              <h4>KIRANMAYE</h4>
              <span>LCS2021019</span>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p>
            
          </p>
          <div className="info">
            <img src={avani} alt="" />
            <div className="details">
              <h4>AVANI</h4>
              <span>LCS2021030</span>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p>
            
          </p>
          <div className="info">
            <img src={shreya} alt="" />
            <div className="details">
              <h4>SHREYA</h4>
              <span>LIT2021020</span>
            </div>
          </div>
        </div>
        </div>
     
    </Section>
    
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 2rem 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      width: auto;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;

      
     
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        

      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
export default Testimonials;
