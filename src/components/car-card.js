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
const ImageIcon = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-3xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  @media screen and (max-width: 1200px) {
    flex: 1;
    align-self: stretch;
    height: auto;
  }
  @media screen and (max-width: 960px) {
    flex: 1;
    align-self: stretch;
    height: auto;
  }
  @media screen and (max-width: 700px) {
    flex: unset;
    align-self: stretch;
  }
`;
const EasyToDrive = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 500;
  @media screen and (max-width: 544px) {
    font-size: var(--font-size-9xl);
  }
`;
const LoremIpsumDolor = styled.div`
  flex: 1;
  position: relative;
`;
const LoremIpsumDolorSitAmetConWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const LearnMore = styled.b`
  position: relative;
  text-transform: capitalize;
`;
const ArrowRightIcon = styled.img`
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
`;
const ArrowRight = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  width: 22px;
  position: relative;
  height: 24px;
`;
const LearnMoreParent = styled.div`
  width: 125px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xl);
`;
const FrameChild = styled.div`
  width: 135px;
  position: relative;
  border-top: 2px solid var(--white);
  box-sizing: border-box;
  height: 2px;
`;
const FrameGroup = styled.div`
  width: 133px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 13px 29px;
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-22xl);
  font-size: var(--font-size-sm);
`;
const EasyToDriveWithLightSteerParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) 0px;
  gap: var(--gap-11xl);
`;
const FrameWrapper = styled.section`
  align-self: stretch;
  width: 423px;
  border-radius: var(--br-3xs);
  background-color: var(--raisin-black-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) 0px var(--padding-6xl);
  box-sizing: border-box;
  text-align: left;
  font-size: var(--h5-size);
  color: var(--white);
  font-family: var(--h5);
  @media screen and (max-width: 1200px) {
    width: 470px;
    padding-right: var(--padding-3xs);
    box-sizing: border-box;
  }
  @media screen and (max-width: 960px) {
    flex: 1;
  }
  @media screen and (max-width: 700px) {
    align-self: stretch;
    width: auto;
  }
`;
const ImageParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-mini);
  overflow-x: hidden;
  @media screen and (max-width: 1200px) {
    overflow-x: hidden;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const CarCardRoot = styled.section`
  align-self: stretch;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-21xl);
  opacity: 0;
  overflow-x: hidden;
  &.animate {
    animation: 1s ease 0s 1 normal forwards ${animationSlideInBottom};
  }
  @media screen and (max-width: 1200px) {
    width: auto;
    align-self: unset;
    height: auto;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-0);
  }
  @media screen and (max-width: 960px) {
    width: auto;
    align-self: unset;
  }
  @media screen and (max-width: 768px) {
    padding-left: var(--padding-11xl);
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
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 420px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 350px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;

const CarCard = () => {
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
    <CarCardRoot data-animate-on-scroll>
      <ImageParent>
        <ImageIcon alt="" src="/image@2x.png" />
        <FrameWrapper>
          <EasyToDriveWithLightSteerParent>
            <EasyToDrive>
              Easy to drive with light steering and a compliant ride
            </EasyToDrive>
            <FrameParent>
              <LoremIpsumDolorSitAmetConWrapper>
                <LoremIpsumDolor>
                  Lorem ipsum dolor sit amet consectetur. Nibh et fames arcu dui
                  ac eu lectus euismod tincidunt. Nibh mi in euismod eget proin
                  blandit elementum. ui ac eu lectus euismod tincidunt. Nibh mi
                  in euis proin blandit elementum. ui ac eu lectus euismod
                  tincidunt. Nibh mi in euis
                </LoremIpsumDolor>
              </LoremIpsumDolorSitAmetConWrapper>
              <FrameGroup>
                <LearnMoreParent>
                  <LearnMore>Learn More</LearnMore>
                  <ArrowRight>
                    <ArrowRightIcon alt="" src="/arrowright4.svg" />
                  </ArrowRight>
                </LearnMoreParent>
                <FrameChild />
              </FrameGroup>
            </FrameParent>
          </EasyToDriveWithLightSteerParent>
        </FrameWrapper>
      </ImageParent>
    </CarCardRoot>
  );
};

export default CarCard;
