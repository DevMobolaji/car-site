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
const TheSpaciousLuxurious = styled.h1`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  font-weight: 700;
  font-family: inherit;
  opacity: 0.8;
  @media screen and (max-width: 960px) {
    font-size: var(--font-size-15xl);
  }
  @media screen and (max-width: 768px) {
    font-size: var(--font-size-9xl);
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 700px) {
    font-size: var(--h6-size);
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 544px) {
    font-size: var(--font-size-xl);
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    font-size: var(--font-size-base);
    flex: unset;
    align-self: stretch;
  }
`;
const LoremIpsumDolor = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--h6-size);
  font-weight: 500;
  opacity: 0.8;
  @media screen and (max-width: 960px) {
    font-size: var(--font-size-xl);
  }
  @media screen and (max-width: 768px) {
    font-size: var(--font-size-base);
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 700px) {
    font-size: var(--font-size-sm);
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 544px) {
    font-size: var(--font-size-base);
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    font-size: var(--font-size-xs);
    flex: unset;
    align-self: stretch;
  }
`;
const TheSpaciousLuxuriousAirtreParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  text-align: left;
  font-size: var(--font-size-21xl);
  color: var(--raisin-black-100);
  font-family: var(--h5);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: var(--gap-3xs);
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: var(--gap-3xs);
  }
  @media screen and (max-width: 544px) {
    flex-direction: column;
    gap: var(--gap-3xs);
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
    gap: var(--gap-3xs);
  }
`;
const WriteUpRoot = styled.section`
  align-self: stretch;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) var(--padding-21xl) var(--padding-mini);
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

const WriteUp1 = () => {
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
      <TheSpaciousLuxuriousAirtreParent>
        <TheSpaciousLuxurious>
          The spacious, luxurious airtreck interior for your life relaxation
        </TheSpaciousLuxurious>
        <LoremIpsumDolor>{`Lorem ipsum dolor sit amet consectetur. Massa porttitor porttitor quis faucibus egestas donec. Ullamcorper est lacus urna mi aenean eget maecenas mattis non. Magna molestie `}</LoremIpsumDolor>
      </TheSpaciousLuxuriousAirtreParent>
    </WriteUpRoot>
  );
};

export default WriteUp1;
