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
const ExploringSpecificationPerfo = styled.b`
  flex: 1;
  position: relative;
  text-transform: capitalize;
  opacity: 0.8;
  @media screen and (max-width: 960px) {
    font-size: var(--font-size-21xl);
  }
  @media screen and (max-width: 768px) {
    font-size: var(--h6-size);
    text-align: left;
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
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 350px) {
    font-size: var(--font-size-base);
  }
`;
const LoremIpsumDolor = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--h6-size);
  font-weight: 500;
  opacity: 0.8;
  @media screen and (max-width: 960px) {
    font-size: var(--font-size-lg);
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
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 350px) {
    font-size: var(--font-size-sm);
  }
`;
const ExploringSpecificationPerfoParent = styled.section`
  flex: 1;
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3xs);
  text-align: left;
  font-size: var(--font-size-21xl);
  color: var(--raisin-black-100);
  font-family: var(--h5);
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
const WriteUpRoot = styled.section`
  align-self: stretch;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) var(--padding-21xl);
  opacity: 0;
  &.animate {
    animation: 1s ease 0s 1 normal forwards ${animationSlideInBottom};
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

const WriteUp2 = () => {
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
      <ExploringSpecificationPerfoParent>
        <ExploringSpecificationPerfo>
          Exploring specification, Performance product
        </ExploringSpecificationPerfo>
        <LoremIpsumDolor>{`Lorem ipsum dolor sit amet consectetur. Massa porttitor porttitor quis faucibus egestas donec. Ullamcorper est lacus urna mi aenean eget maecenas mattis non. Magna molestie `}</LoremIpsumDolor>
      </ExploringSpecificationPerfoParent>
    </WriteUpRoot>
  );
};

export default WriteUp2;
