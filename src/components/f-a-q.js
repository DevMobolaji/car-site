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
const B = styled.b`
  position: relative;
  letter-spacing: 0.03em;
  text-transform: capitalize;
`;
const B1 = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: 0.03em;
  text-transform: capitalize;
`;
const Ml = styled.b`
  position: absolute;
  top: 11px;
  left: 100px;
  font-size: var(--h5-size);
  letter-spacing: 0.03em;
  text-transform: lowercase;
`;
const Group = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
`;
const FrameContainer = styled.div`
  width: 140px;
  height: 55px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--font-size-21xl);
`;
const Parent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-6xl);
  @media screen and (max-width: 768px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 544px) {
    display: none;
  }
`;
const TheZeroEmission = styled.b`
  flex: 1;
  position: relative;
  @media screen and (max-width: 544px) {
    font-size: var(--font-size-xl);
  }
`;
const FrameChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 48px;
  height: 48px;
`;
const GroupWrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  width: 48px;
  position: relative;
  height: 48px;
`;
const TheZeroEmissionCrossoverIsParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-11xl);
  @media screen and (max-width: 768px) {
    flex: unset;
    align-self: stretch;
  }
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xs) 0px 0px;
  z-index: 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const ClosedFaqChild = styled.img`
  width: calc(100% - 50px);
  position: absolute;
  margin: 0 !important;
  top: 16px;
  right: 25px;
  left: 25px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 1;
`;
const ClosedFaq = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: var(--padding-base) var(--padding-xs) var(--padding-sm) 0px;
  position: relative;
`;
const AtJust2500rpm = styled.b`
  flex: 1;
  position: relative;
  @media screen and (max-width: 544px) {
    font-size: var(--font-size-xl);
  }
  @media screen and (max-width: 420px) {
    font-size: var(--font-size-xl);
  }
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xs) 0px 0px;
  z-index: 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const LoremIpsumDolor = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-base);
  text-transform: capitalize;
  font-weight: 500;
  color: var(--color-black);
  z-index: 1;
  @media screen and (max-width: 420px) {
    font-size: var(--font-size-sm);
  }
`;
const OpenedFaqChild = styled.img`
  width: calc(100% - 50px);
  position: absolute;
  margin: 0 !important;
  top: 16px;
  right: 25px;
  left: 25px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 2;
`;
const OpenedFaq = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-xs) var(--padding-sm) 0px;
  position: relative;
  gap: var(--gap-6xl);
`;
const FaqRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-mini) var(--padding-11xl) var(--padding-xl)
    var(--padding-21xl);
  gap: var(--gap-mini);
  opacity: 0;
  text-align: left;
  font-size: var(--h6-size);
  color: var(--raisin-black-100);
  font-family: var(--h5);
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

const FAQ = () => {
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
    <FaqRoot data-animate-on-scroll>
      <ClosedFaq>
        <FrameParent>
          <Parent1>
            <B>01</B>
            <FrameWrapper>
              <FrameContainer>
                <Group>
                  <B1>4360</B1>
                  <Ml>ml</Ml>
                </Group>
              </FrameContainer>
            </FrameWrapper>
          </Parent1>
          <TheZeroEmissionCrossoverIsParent>
            <TheZeroEmission>
              The zero emission crossover is 4360 millimeter long
            </TheZeroEmission>
            <GroupWrapper>
              <FrameChild alt="" src="/group-1.svg" />
            </GroupWrapper>
          </TheZeroEmissionCrossoverIsParent>
        </FrameParent>
        <ClosedFaqChild alt="" src="/line-5.svg" />
      </ClosedFaq>
      <OpenedFaq>
        <FrameGroup>
          <Parent1>
            <B>02</B>
            <FrameWrapper>
              <FrameContainer>
                <Group>
                  <B1>2500</B1>
                  <Ml>rpm</Ml>
                </Group>
              </FrameContainer>
            </FrameWrapper>
          </Parent1>
          <TheZeroEmissionCrossoverIsParent>
            <AtJust2500rpm>
              At just 2500rpm, performance should be like most suv’s
            </AtJust2500rpm>
            <GroupWrapper>
              <FrameChild alt="" src="/group-11.svg" />
            </GroupWrapper>
          </TheZeroEmissionCrossoverIsParent>
        </FrameGroup>
        <LoremIpsumDolor>
          Lorem ipsum dolor sit amet consectetur. Laoreet eros praesent rutrum
          auctor ac fermentum in. Velit fermentum et faucibus ac ultricies enim
          orci. Cum duis nisl eget pretium sit cras dictum. Integer nisi risus
          luctus vitae diam. r sit amet consectetur. Laoreet eros praesent
          rutrum auctor ac fe
        </LoremIpsumDolor>
        <OpenedFaqChild alt="" src="/line-5.svg" />
      </OpenedFaq>
      <ClosedFaq>
        <FrameParent>
          <Parent1>
            <B>03</B>
            <FrameWrapper>
              <FrameContainer>
                <Group>
                  <B1>2830</B1>
                  <Ml>mm</Ml>
                </Group>
              </FrameContainer>
            </FrameWrapper>
          </Parent1>
          <TheZeroEmissionCrossoverIsParent>
            <TheZeroEmission>
              A compact crossover with a wheelbase stretching at 2830 mm
            </TheZeroEmission>
            <GroupWrapper>
              <FrameChild alt="" src="/group-1.svg" />
            </GroupWrapper>
          </TheZeroEmissionCrossoverIsParent>
        </FrameParent>
        <ClosedFaqChild alt="" src="/line-5.svg" />
      </ClosedFaq>
    </FaqRoot>
  );
};

export default FAQ;
