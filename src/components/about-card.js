import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const animationSlideInBottom = keyframes`
    0% {
        transform: translateY(200px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }    
  `;
const AboutUs = styled.div`
  position: relative;
  font-weight: 500;
  opacity: 0.8;
`;
const ArrowRightCircleIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  transform: rotate(58.6deg);
`;
const ArrowRightCircle = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  width: 24px;
  position: relative;
  height: 24px;
  transform: rotate(-58.6deg);
`;
const AboutUsParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
const LoremIpsumDolor = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 500;
  opacity: 0.8;
`;
const FrameGroup = styled.div`
  flex: 1;
  border-radius: var(--br-3xs);
  background-color: var(--raisin-black-100);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  gap: var(--gap-146xl);
  @media screen and (max-width: 700px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const FrameContainer = styled.div`
  flex: 1;
  border-radius: var(--br-3xs);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  gap: var(--gap-146xl);
  color: var(--raisin-black-100);
  @media screen and (max-width: 700px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const InstanceParent = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--h6-size);
  color: var(--white);
  font-family: var(--h5);
  @media screen and (max-width: 960px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 768px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 544px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
    flex: unset;
    align-self: stretch;
  }
`;
const AboutUs1 = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  opacity: 0.8;
`;
const FrameDiv = styled.div`
  flex: 1;
  border-radius: var(--br-3xs);
  background-color: var(--raisin-black-100);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  gap: var(--gap-146xl);
  @media screen and (max-width: 544px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const FrameParent = styled.div`
  flex: 1;
  border-radius: var(--br-3xs);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  gap: var(--gap-146xl);
  color: var(--raisin-black-100);
  @media screen and (max-width: 544px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const InstanceGroup = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--h6-size);
  color: var(--white);
  font-family: var(--h5);
  @media screen and (max-width: 1200px) {
    height: auto;
    flex-direction: row;
  }
  @media screen and (max-width: 960px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 768px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 700px) {
    flex-direction: row;
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 544px) {
    flex-direction: column;
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
    flex: unset;
    align-self: stretch;
  }
`;
const FrameParent1 = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
  @media screen and (max-width: 544px) {
    flex-direction: column;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;
const AboutCardRoot = styled.section`
  align-self: stretch;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-21xl);
  opacity: 0;
  &.animate {
    animation: 1s ease 0s 1 normal forwards ${animationSlideInBottom};
  }
  @media screen and (max-width: 1200px) {
    overflow-x: scroll;
  }
  @media screen and (max-width: 768px) {
    padding-left: var(--padding-11xl);
    padding-top: var(--padding-sm);
    padding-right: var(--padding-11xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 700px) {
    padding-left: var(--padding-11xl);
    padding-right: var(--padding-11xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 544px) {
    padding-left: var(--padding-xl);
    padding-top: var(--padding-sm);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 420px) {
    padding-top: var(--padding-sm);
    box-sizing: border-box;
  }
  @media screen and (max-width: 350px) {
    padding-left: var(--padding-xl);
    padding-top: var(--padding-sm);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;

const AboutCard = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <AboutCardRoot data-animate-on-scroll>
      <FrameParent1>
        <InstanceParent>
          <FrameGroup>
            <AboutUsParent>
              <AboutUs>About Us</AboutUs>
              <ArrowRightCircle>
                <ArrowRightCircleIcon alt="" src="/arrowrightcircle1.svg" />
              </ArrowRightCircle>
            </AboutUsParent>
            <LoremIpsumDolor>
              Lorem ipsum dolor sit amet consectetur. Massa porttitor porttitor
              quis faucibus egestas donec. Ullamcorper est lacus urna mi aenean
              eget maecenas mattis
            </LoremIpsumDolor>
          </FrameGroup>
          <FrameContainer>
            <AboutUsParent>
              <AboutUs>Test Drive</AboutUs>
              <ArrowRightCircle>
                <ArrowRightCircleIcon alt="" src="/arrowrightcircle2.svg" />
              </ArrowRightCircle>
            </AboutUsParent>
            <LoremIpsumDolor>
              Lorem ipsum dolor sit amet consectetur. Massa porttitor porttitor
              quis faucibus egestas donec. Ullamcorper est lacus urna mi aenean
              eget maecenas mattis
            </LoremIpsumDolor>
          </FrameContainer>
        </InstanceParent>
        <InstanceGroup>
          <FrameDiv>
            <AboutUsParent>
              <AboutUs1>Latest News</AboutUs1>
              <ArrowRightCircle>
                <ArrowRightCircleIcon alt="" src="/arrowrightcircle1.svg" />
              </ArrowRightCircle>
            </AboutUsParent>
            <LoremIpsumDolor>
              Lorem ipsum dolor sit amet consectetur. Massa porttitor porttitor
              quis faucibus egestas donec. Ullamcorper est lacus urna mi aenean
              eget maecenas mattis
            </LoremIpsumDolor>
          </FrameDiv>
          <FrameParent>
            <AboutUsParent>
              <AboutUs>About Us</AboutUs>
              <ArrowRightCircle>
                <ArrowRightCircleIcon alt="" src="/arrowrightcircle2.svg" />
              </ArrowRightCircle>
            </AboutUsParent>
            <LoremIpsumDolor>
              Lorem ipsum dolor sit amet consectetur. Massa porttitor porttitor
              quis faucibus egestas donec. Ullamcorper est lacus urna mi aenean
              eget maecenas mattis
            </LoremIpsumDolor>
          </FrameParent>
        </InstanceGroup>
      </FrameParent1>
    </AboutCardRoot>
  );
};

export default AboutCard;
