import { useState, useCallback, useEffect } from "react";
import RectangleComponent from "./rectangle-component";
import PortalPopup from "./portal-popup";
import styled, { keyframes } from "styled-components";

const animationSlideInTop = keyframes`
    0% {
        transform: translateY(-200px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
  `;
const TheElectronicVehicle = styled.b`
  align-self: stretch;
  position: relative;
  line-height: 120%;
  @media screen and (max-width: 960px) {
    font-size: var(--font-size-41xl);
  }
  @media screen and (max-width: 768px) {
    font-size: var(--font-size-29xl);
  }
`;
const LoremIpsumDolor = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--h6-size);
  @media screen and (max-width: 768px) {
    font-size: var(--font-size-xl);
  }
`;
const Button = styled.div`
  position: relative;
  font-size: var(--h6-size);
  font-weight: 500;
  font-family: var(--h5);
  color: var(--color);
  text-align: left;
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
  padding: var(--padding-11xl) 0px;
  background-color: var(--white);
  width: 235px;
  height: 60px;
  border-radius: var(--br-6xs);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: var(--gap-3xs);
  @media screen and (max-width: 1200px) {
    width: 235px;
    height: 60px;
  }
`;
const TheElectronicVehiclePioneerParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
  @media screen and (max-width: 1200px) {
    height: auto;
    padding-top: var(--padding-xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 1140px) {
    flex: unset;
    align-self: stretch;
  }
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
`;
const ArrowRightCircle = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  width: 24px;
  position: relative;
  height: 24px;
`;
const ArrowButton = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  gap: var(--gap-2xl);
`;
const ModelAirtreck = styled.b`
  align-self: stretch;
  position: relative;
  text-transform: uppercase;
`;
const FrameChild = styled.div`
  width: 86px;
  position: relative;
  border-top: 2px solid var(--white);
  box-sizing: border-box;
  height: 2px;
`;
const ModelAirtreckParent = styled.div`
  width: 235px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-smi);
`;
const LoremIpsumDolor1 = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 500;
`;
const FrameContainer = styled.div`
  align-self: stretch;
  backdrop-filter: blur(10px);
  border-radius: var(--br-6xs);
  background-color: var(--color-whitesmoke-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-8xl);
  gap: var(--gap-5xl);
`;
const LeftColumn = styled.div`
  width: 538.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-mid) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-lgi);
  @media screen and (max-width: 700px) {
    align-self: stretch;
    width: auto;
  }
  @media screen and (max-width: 350px) {
    align-self: stretch;
    width: auto;
  }
`;
const LeftColumnWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--font-size-base);
  @media screen and (max-width: 350px) {
    width: auto;
    align-self: unset;
  }
`;
const FrameGroup = styled.section`
  align-self: stretch;
  height: 516px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-14xl);
  opacity: 0;
  z-index: 0;
  text-align: left;
  font-size: var(--font-size-45xl);
  color: var(--white);
  font-family: var(--h5);
  &.animate {
    animation: 1s ease 0s 1 normal forwards ${animationSlideInTop};
  }
  @media screen and (max-width: 1200px) {
    padding-top: 0px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1140px) {
    align-self: stretch;
    height: auto;
    flex-direction: column;
    padding-top: 0px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1122px) {
    align-self: stretch;
    height: auto;
    padding-top: 0px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 960px) {
    align-self: stretch;
    height: auto;
    padding-top: var(--padding-xl);
    padding-bottom: 0px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 768px) {
    align-self: stretch;
    height: auto;
  }
  @media screen and (max-width: 700px) {
    align-self: stretch;
    height: auto;
  }
  @media screen and (max-width: 544px) {
    align-self: stretch;
    height: auto;
  }
  @media screen and (max-width: 420px) {
    padding-top: 0px;
    box-sizing: border-box;
  }
`;
const Home = styled.b`
  width: 69px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const Model = styled.div`
  width: 72px;
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
`;
const BeyondTheCar = styled.div`
  width: 184px;
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
`;
const CenterNav = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-2xs) 0px;
  gap: var(--gap-21xl);
  text-align: left;
  font-size: var(--h6-size);
  color: var(--white);
  font-family: var(--h5);
  @media screen and (max-width: 960px) {
    display: none;
    padding-right: var(--padding-base);
    box-sizing: border-box;
  }
  @media screen and (max-width: 420px) {
    padding-left: var(--padding-8xl);
    padding-right: var(--padding-mini);
    box-sizing: border-box;
  }
`;
const Airtreck = styled.b`
  position: absolute;
  top: 12.5px;
  left: -2px;
`;
const LeftNav = styled.div`
  align-self: stretch;
  width: 88px;
  position: relative;
`;
const Menu = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  height: 24px;
  width: 24px;
  position: relative;
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;
const Button2 = styled.b`
  position: relative;
`;
const Button3 = styled.div`
  width: 176px;
  border-radius: var(--br-6xs);
  background-color: var(--color);
  height: 50px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3xs);
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const Navbar = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-100);
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Navbar1 = styled.nav`
  margin: 0 !important;
  width: calc(100% + 1px);
  position: absolute;
  top: -2px;
  right: 0px;
  left: -1px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-15xl) var(--padding-xl)
    var(--padding-21xl);
  box-sizing: border-box;
  opacity: 0;
  z-index: 1;
  text-align: left;
  font-size: var(--h6-size);
  color: var(--white);
  font-family: var(--h5);
  &.animate {
    animation: 1s ease 0s 1 normal forwards ${animationSlideInTop};
  }
  @media screen and (max-width: 960px) {
    padding-left: var(--padding-6xl);
    padding-right: var(--padding-6xl);
    box-sizing: border-box;
  }
`;
const FrameParentRoot = styled.div`
  align-self: stretch;
  height: 632px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-81xl) var(--padding-13xl) var(--padding-46xl)
    var(--padding-17xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-11xl);
  background-image: url("/frame-45@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  @media screen and (max-width: 1200px) {
    padding-top: var(--padding-81xl);
    padding-bottom: var(--padding-46xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 1140px) {
    height: auto;
  }
  @media screen and (max-width: 1122px) {
    height: auto;
  }
  @media screen and (max-width: 960px) {
    height: auto;
    flex-direction: row;
    gap: var(--gap-31xl);
    padding-top: var(--padding-61xl);
    box-sizing: border-box;
  }
`;

const HeroSection = () => {
  const [isRectanglePopupOpen, setRectanglePopupOpen] = useState(false);
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

  const openRectanglePopup = useCallback(() => {
    setRectanglePopupOpen(true);
  }, []);

  const closeRectanglePopup = useCallback(() => {
    setRectanglePopupOpen(false);
  }, []);

  return (
    <>
      <FrameParentRoot>
        <FrameGroup data-animate-on-scroll>
          <TheElectronicVehiclePioneerParent>
            <TheElectronicVehicle>
              The Electronic Vehicle Pioneer For Adventure
            </TheElectronicVehicle>
            <LoremIpsumDolor>
              Lorem ipsum dolor sit amet consectetur. Nibh et fames arcu dui ac
              eu lectus euismod tincidunt. Nibh mi in euismod eget elementum.
            </LoremIpsumDolor>
            <Button1>
              <Button>Learn more</Button>
              <ArrowRightIcon alt="" src="/arrowright.svg" />
            </Button1>
          </TheElectronicVehiclePioneerParent>
          <LeftColumnWrapper>
            <LeftColumn>
              <ArrowButton>
                <ArrowRightCircle>
                  <ArrowRightCircleIcon alt="" src="/arrowrightcircle.svg" />
                </ArrowRightCircle>
                <ArrowRightCircle>
                  <ArrowRightCircleIcon alt="" src="/arrowleftcircle.svg" />
                </ArrowRightCircle>
              </ArrowButton>
              <FrameContainer>
                <ModelAirtreckParent>
                  <ModelAirtreck>Model Airtreck</ModelAirtreck>
                  <FrameChild />
                </ModelAirtreckParent>
                <LoremIpsumDolor1>{`Lorem ipsum dolor sit amet consectetur. Nibh et fames arcu dui ac eu lectus euismod tincidunt. Nibh mi in euismod eget proin blandit elementum. ui ac eu lectus euismod tincidunt. Nibh mi in euis proin blandit elementum. `}</LoremIpsumDolor1>
              </FrameContainer>
            </LeftColumn>
          </LeftColumnWrapper>
        </FrameGroup>
        <Navbar1 data-animate-on-scroll>
          <Navbar>
            <CenterNav id="header">
              <Home>Home</Home>
              <Model>Model</Model>
              <BeyondTheCar>Beyond The Car</BeyondTheCar>
            </CenterNav>
            <LeftNav>
              <Airtreck>Airtreck</Airtreck>
            </LeftNav>
            <Menu onClick={openRectanglePopup}>
              <ArrowRightCircleIcon alt="" src="/menu.svg" />
            </Menu>
            <Button3>
              <Button2>Contact us</Button2>
              <ArrowRightIcon alt="" src="/arrowright1.svg" />
            </Button3>
          </Navbar>
        </Navbar1>
      </FrameParentRoot>
      {isRectanglePopupOpen && (
        <PortalPopup placement="Top right" onOutsideClick={closeRectanglePopup}>
          <RectangleComponent onClose={closeRectanglePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HeroSection;
