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
const VectorIcon = styled.img`
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
const VectorIcon1 = styled.img`
  position: absolute;
  height: 77%;
  width: 100%;
  top: 11.67%;
  right: 0%;
  bottom: 11.33%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 54%;
  width: 57%;
  top: 0%;
  right: 43%;
  bottom: 46%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon3 = styled.img`
  position: absolute;
  height: 45.33%;
  width: 50%;
  top: 0%;
  right: 50%;
  bottom: 54.67%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const UnitedStatesOfAmericaUs = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  width: 40px;
  position: relative;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 20px;
  }
`;
const UnitedState = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: var(--font-size-base);
  }
`;
const UnitedStatesOfAmericaUsParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const AspenGroveDrive = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-base);
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color);
  white-space: pre-wrap;
  @media screen and (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`;
const Us = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xl);
  @media screen and (max-width: 768px) {
    gap: var(--gap-8xl);
  }
  @media screen and (max-width: 544px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const UnitedKingdomGbParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const TheGateInternational = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-base);
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color);
  @media screen and (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`;
const Uk = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xl);
  @media screen and (max-width: 544px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const UsParent = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--raisin-black-100);
  font-family: var(--h5);
  @media screen and (max-width: 544px) {
    flex-direction: column;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;
const CountryFlagRoot = styled.section`
  align-self: stretch;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-4xl) var(--padding-21xl) 0px;
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

const CountryFlag = () => {
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
    <CountryFlagRoot data-animate-on-scroll>
      <UsParent>
        <Us>
          <UnitedStatesOfAmericaUsParent>
            <UnitedStatesOfAmericaUs>
              <VectorIcon alt="" src="/vector.svg" />
              <VectorIcon1 alt="" src="/vector1.svg" />
              <VectorIcon2 alt="" src="/vector2.svg" />
              <VectorIcon3 alt="" />
            </UnitedStatesOfAmericaUs>
            <UnitedState>UNITED STATE</UnitedState>
          </UnitedStatesOfAmericaUsParent>
          <AspenGroveDrive>
            403 ASPEN GROVE DRIVE, SUITE 700, FRANKLININ 37067,USA
          </AspenGroveDrive>
        </Us>
        <Uk>
          <UnitedKingdomGbParent>
            <UnitedStatesOfAmericaUs>
              <VectorIcon alt="" src="/vector4.svg" />
              <VectorIcon alt="" src="/vector5.svg" />
              <VectorIcon alt="" src="/vector6.svg" />
              <VectorIcon alt="" src="/vector7.svg" />
              <VectorIcon alt="" src="/vector8.svg" />
            </UnitedStatesOfAmericaUs>
            <UnitedState>UNITED KINGDOM</UnitedState>
          </UnitedKingdomGbParent>
          <TheGateInternational>
            THE GATE INTERNATIONAL DRIVE,SOLIHULL, B90 4WA, UNITED KINGDOM
          </TheGateInternational>
        </Uk>
        <Uk>
          <UnitedKingdomGbParent>
            <UnitedStatesOfAmericaUs>
              <VectorIcon alt="" src="/clip-path-group.svg" />
            </UnitedStatesOfAmericaUs>
            <UnitedState>JAPAN</UnitedState>
          </UnitedKingdomGbParent>
          <TheGateInternational>
            1-21, SHIBAURA 3-SHOME, MINATO-KU, TOKYO 108-8410, JAPAN
          </TheGateInternational>
        </Uk>
      </UsParent>
    </CountryFlagRoot>
  );
};

export default CountryFlag;
