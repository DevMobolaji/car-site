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
const Div = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 500;
  opacity: 0.8;
`;
const FrameChild = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.8;
`;
const Parent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const LoremIpsumDolor = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  font-size: var(--font-size-xl);
  font-weight: 500;
  opacity: 0.8;
`;
const DynamicShieldParent = styled.div`
  align-self: stretch;
  height: 190px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-28xl);
  font-size: var(--font-size-7xl);
  @media screen and (max-width: 768px) {
    gap: var(--gap-xl);
  }
  @media screen and (max-width: 700px) {
    gap: var(--gap-xl);
  }
  @media screen and (max-width: 544px) {
    font-size: var(--font-size-xl);
    gap: var(--gap-xl);
  }
  @media screen and (max-width: 420px) {
    gap: var(--gap-xl);
  }
  @media screen and (max-width: 350px) {
    gap: var(--gap-xl);
  }
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-18xl);
  @media screen and (max-width: 768px) {
    gap: var(--gap-mini);
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 700px) {
    gap: var(--gap-mini);
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 544px) {
    gap: var(--gap-mini);
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    gap: var(--gap-mini);
  }
`;
const LoremIpsumDolor1 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-xl);
  font-weight: 500;
  opacity: 0.8;
`;
const DynamicShieldGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-28xl);
  font-size: var(--font-size-7xl);
  @media screen and (max-width: 768px) {
    gap: var(--gap-xl);
  }
  @media screen and (max-width: 700px) {
    gap: var(--gap-xl);
  }
  @media screen and (max-width: 544px) {
    gap: var(--gap-xl);
  }
  @media screen and (max-width: 420px) {
    gap: var(--gap-xl);
  }
  @media screen and (max-width: 350px) {
    gap: var(--gap-xl);
  }
`;
const FrameGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-18xl);
  @media screen and (max-width: 768px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 700px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 544px) {
    gap: var(--gap-mini);
    flex: unset;
    align-self: stretch;
  }
`;
const InstanceParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xl);
  text-align: left;
  font-size: var(--h5-size);
  color: var(--raisin-black-100);
  font-family: var(--h5);
  @media screen and (max-width: 960px) {
    flex-direction: row;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
  @media screen and (max-width: 544px) {
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: space-between;
  }
`;
const CardDetailsRoot = styled.section`
  align-self: stretch;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-21xl) 0px;
  opacity: 0;
  &.animate {
    animation: 1s ease 0s 1 normal forwards ${animationSlideInBottom};
  }
  @media screen and (max-width: 768px) {
    padding-left: var(--padding-11xl);
    padding-right: var(--padding-11xl);
    padding-bottom: var(--padding-xl);
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

const CardDetails = () => {
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
    <CardDetailsRoot data-animate-on-scroll>
      <InstanceParent>
        <FrameParent>
          <Parent1>
            <Div>01</Div>
            <FrameChild alt="" src="/line-3.svg" />
          </Parent1>
          <DynamicShieldParent>
            <Div>Dynamic Shield</Div>
            <LoremIpsumDolor>{`Lorem ipsum dolor sit amet consectetur. Massa porttitor porttitor quis faucibus egestas donec. `}</LoremIpsumDolor>
          </DynamicShieldParent>
        </FrameParent>
        <FrameGroup>
          <Parent1>
            <Div>02</Div>
            <FrameChild alt="" src="/line-3.svg" />
          </Parent1>
          <DynamicShieldGroup>
            <Div>Hexaguard Horizon</Div>
            <LoremIpsumDolor1>{`Lorem ipsum dolor sit amet consectetur. Massa porttitor porttitor quis faucibus egestas donec. `}</LoremIpsumDolor1>
          </DynamicShieldGroup>
        </FrameGroup>
        <FrameGroup>
          <Parent1>
            <Div>03</Div>
            <FrameChild alt="" src="/line-3.svg" />
          </Parent1>
          <DynamicShieldGroup>
            <Div>Horizontal axis</Div>
            <LoremIpsumDolor1>{`Lorem ipsum dolor sit amet consectetur. Massa porttitor porttitor quis faucibus egestas donec. `}</LoremIpsumDolor1>
          </DynamicShieldGroup>
        </FrameGroup>
      </InstanceParent>
    </CardDetailsRoot>
  );
};

export default CardDetails;
