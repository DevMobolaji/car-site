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
const EnhanceDrivingDynamics = styled.h2`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  text-transform: capitalize;
  font-weight: 700;
  font-family: inherit;
  opacity: 0.8;
  @media screen and (max-width: 960px) {
    font-size: var(--font-size-15xl);
  }
  @media screen and (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }
  @media screen and (max-width: 700px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 544px) {
    font-size: var(--font-size-xl);
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    font-size: var(--font-size-xl);
  }
  @media screen and (max-width: 350px) {
    font-size: var(--font-size-sm);
  }
`;
const LoremIpsumDolor = styled.p`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: var(--h6-size);
  font-weight: 500;
  opacity: 0.8;
  @media screen and (max-width: 960px) {
    font-size: var(--font-size-xl);
  }
  @media screen and (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
  @media screen and (max-width: 700px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 544px) {
    font-size: var(--font-size-base);
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    font-size: var(--font-size-base);
  }
  @media screen and (max-width: 350px) {
    font-size: var(--font-size-3xs);
  }
`;
const EnhanceDrivingDynamicsAndRParent = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-17xl);
  text-align: left;
  font-size: var(--font-size-21xl);
  color: var(--raisin-black-100);
  font-family: var(--h5);
  @media screen and (max-width: 960px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: var(--gap-3xs);
  }
  @media screen and (max-width: 544px) {
    flex-direction: column;
    gap: var(--gap-3xs);
  }
`;
const WriteUpRoot = styled.section`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini) var(--padding-21xl) 0px;
  opacity: 0;
  &.animate {
    animation: 1s ease 0s 1 normal forwards ${animationSlideInBottom};
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    padding-left: var(--padding-11xl);
    padding-right: var(--padding-11xl);
    box-sizing: border-box;
    &:active {
      padding-left: var(--padding-11xl);
      padding-right: var(--padding-11xl);
      box-sizing: border-box;
    }
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
    flex-direction: row;
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

const WriteUp3 = () => {
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
    <WriteUpRoot data-animate-on-scroll>
      <EnhanceDrivingDynamicsAndRParent>
        <EnhanceDrivingDynamics>
          Enhance driving dynamics and revealed legacy of the airtreck driving
        </EnhanceDrivingDynamics>
        <LoremIpsumDolor>{`Lorem ipsum dolor sit amet consectetur. Massa porttitor porttitor quis faucibus egestas donec. Ullamcorper est lacus urna mi aenean eget maecenas mattis non. Magna molestie `}</LoremIpsumDolor>
      </EnhanceDrivingDynamicsAndRParent>
    </WriteUpRoot>
  );
};

export default WriteUp3;
