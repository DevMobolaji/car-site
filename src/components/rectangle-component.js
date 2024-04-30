import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const animationSlideInRight = keyframes`
    0% {
        transform: translateX(200px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 86.67%;
  width: 90.91%;
  top: 7.14%;
  right: 4.55%;
  bottom: 6.19%;
  left: 4.55%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 26.19%;
  width: 27.27%;
  top: 37.62%;
  right: 36.36%;
  bottom: 36.19%;
  left: 36.36%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const XCircle = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  width: 22px;
  height: 21px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Home = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  text-transform: capitalize;
`;
const HomeWrapper = styled.div`
  width: 67px;
  position: relative;
  height: 33px;
  color: var(--raisin-black-100);
`;
const HomeContainer = styled.div`
  width: 106px;
  position: relative;
  height: 33px;
`;
const HomeFrame = styled.div`
  align-self: stretch;
  position: relative;
  height: 33px;
`;
const FrameDiv = styled.div`
  width: 91px;
  position: relative;
  height: 33px;
`;
const Button = styled.div`
  position: relative;
  font-weight: 500;
`;
const ArrowRightIcon = styled.img`
  width: 24px;
  position: relative;
  height: 24px;
  display: none;
`;
const Button1 = styled.div`
  width: 213px;
  border-radius: var(--br-6xs);
  background-color: var(--color);
  height: 51px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3xs);
  color: var(--white);
`;
const InstanceParent = styled.div`
  align-self: stretch;
  height: 687px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 35px;
  @media screen and (max-width: 960px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
const XCircleParentRoot = styled.div`
  width: 350px;
  height: 844px;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 35px 31px;
  box-sizing: border-box;
  gap: 66px;
  opacity: 0.8;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  font-size: var(--h6-size);
  color: var(--color);
  font-family: var(--h5);
  &.animate {
    animation: 0.25s ease 0s 1 normal forwards ${animationSlideInRight};
  }
  @media screen and (max-width: 1122px) {
    width: 350px;
  }
`;

const RectangleComponent = ({ onClose }) => {
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
    <XCircleParentRoot data-animate-on-scroll>
      <XCircle>
        <VectorIcon alt="" src="/vector9.svg" />
        <VectorIcon1 alt="" src="/vector10.svg" />
        <VectorIcon1 alt="" src="/vector11.svg" />
      </XCircle>
      <InstanceParent>
        <HomeWrapper>
          <Home>home</Home>
        </HomeWrapper>
        <HomeContainer>
          <Home>Model</Home>
        </HomeContainer>
        <HomeFrame>
          <Home>Beyond car</Home>
        </HomeFrame>
        <FrameDiv>
          <Home>Airtreck</Home>
        </FrameDiv>
        <Button1>
          <Button>Contact us</Button>
          <ArrowRightIcon alt="" src="/arrowright6.svg" />
        </Button1>
      </InstanceParent>
    </XCircleParentRoot>
  );
};

export default RectangleComponent;
