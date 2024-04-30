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
const Button = styled.div`
  position: relative;
  font-size: var(--h6-size);
  font-weight: 500;
  font-family: var(--h5);
  color: var(--white);
  text-align: left;
  @media screen and (max-width: 350px) {
    font-size: var(--font-size-xl);
  }
`;
const ArrowRightIcon = styled.img`
  width: 24px;
  position: relative;
  height: 24px;
  display: none;
`;
const Button1 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: var(--color);
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-6xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3xs);
`;
const ButtonWrapper = styled.div`
  width: 237px;
  height: 54px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const ArrowRightIcon1 = styled.img`
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
  width: 24px;
  position: relative;
  height: 24px;
`;
const FrameParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 0;
  @media screen and (max-width: 1200px) {
    padding-left: 0px;
    padding-top: 0px;
    box-sizing: border-box;
  }
`;
const ListItemChild = styled.img`
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-3xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 1;
`;
const Text1 = styled.div`
  width: 0px;
  position: absolute;
  margin: 0 !important;
  top: 285px;
  left: 347px;
  display: inline-block;
  z-index: 2;
`;
const Text2 = styled.div`
  width: 0px;
  position: absolute;
  margin: 0 !important;
  top: 500px;
  left: 534px;
  display: inline-block;
  z-index: 3;
`;
const Text3 = styled.div`
  width: 0px;
  position: absolute;
  margin: 0 !important;
  top: 484px;
  left: 218px;
  display: inline-block;
  z-index: 4;
`;
const ListItem = styled.div`
  flex: 1;
  height: 464px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: var(--gap-12xl);
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-mini);
    padding-top: var(--padding-mini);
    box-sizing: border-box;
  }
  @media screen and (max-width: 768px) {
    flex: unset;
    align-self: stretch;
  }
`;
const Button2 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: var(--color);
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-6xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3xs);
  @media screen and (max-width: 1200px) {
    padding-left: 0px;
    padding-right: 0px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
  @media screen and (max-width: 350px) {
    padding-top: var(--padding-11xl);
    padding-bottom: var(--padding-11xl);
    box-sizing: border-box;
  }
`;
const ButtonContainer = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  height: 54px;
  width: 328px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 350px) {
    align-items: flex-start;
    justify-content: center;
  }
`;
const FrameGroup = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 0;
  @media screen and (max-width: 350px) {
    align-items: center;
    justify-content: flex-end;
  }
`;
const CarCardsRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-mini) var(--padding-21xl) var(--padding-3xs);
  gap: var(--gap-xl);
  opacity: 0;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--color-black);
  font-family: var(--font-inter);
  &.animate {
    animation: 1s ease 0s 1 normal forwards ${animationSlideInBottom};
  }
  @media screen and (max-width: 1200px) {
    gap: var(--gap-xl);
  }
  @media screen and (max-width: 960px) {
    gap: var(--gap-xl);
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: var(--gap-mini);
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 700px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 544px) {
    padding-left: var(--padding-3xs);
    padding-right: var(--padding-3xs);
    box-sizing: border-box;
  }
  @media screen and (max-width: 420px) {
    padding-left: var(--padding-3xs);
    padding-right: var(--padding-3xs);
    box-sizing: border-box;
  }
  @media screen and (max-width: 350px) {
    padding-left: var(--padding-3xs);
    padding-right: var(--padding-3xs);
    box-sizing: border-box;
  }
`;

const CarCards = () => {
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
    <CarCardsRoot data-animate-on-scroll>
      <ListItem>
        <FrameParent>
          <ButtonWrapper>
            <Button1>
              <Button>All wheel drive</Button>
              <ArrowRightIcon alt="" src="/arrowright2.svg" />
            </Button1>
          </ButtonWrapper>
          <ArrowRight>
            <ArrowRightIcon1 alt="" src="/arrowright3.svg" />
          </ArrowRight>
        </FrameParent>
        <ListItemChild alt="" src="/frame-16@2x.png" />
        <Text1 />
        <Text2 />
        <Text3 />
      </ListItem>
      <ListItem>
        <FrameGroup>
          <ButtonContainer>
            <Button2>
              <Button>Enviromental friendliness</Button>
              <ArrowRightIcon alt="" src="/arrowright2.svg" />
            </Button2>
          </ButtonContainer>
          <ArrowRight>
            <ArrowRightIcon1 alt="" src="/arrowright3.svg" />
          </ArrowRight>
        </FrameGroup>
        <ListItemChild alt="" src="/frame-16@2x.png" />
        <Text1 />
        <Text2 />
        <Text3 />
      </ListItem>
    </CarCardsRoot>
  );
};

export default CarCards;
