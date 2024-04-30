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
const GroupIcon = styled.img`
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
const GroupIcon1 = styled.img`
  position: absolute;
  height: 83.33%;
  width: 83.33%;
  top: 8.33%;
  right: 8.33%;
  bottom: 8.33%;
  left: 8.33%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Copyright = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  width: 30px;
  position: relative;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
`;
const AirtreckAutos = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
`;
const CopyrightParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  z-index: 0;
  @media screen and (max-width: 1122px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 960px) {
    flex: unset;
    align-self: stretch;
  }
`;
const Headquaters = styled.b`
  align-self: stretch;
  position: relative;
  text-transform: capitalize;
  @media screen and (max-width: 544px) {
    font-size: var(--font-size-base);
  }
`;
const MitsubushiAvenue = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-mini);
  text-transform: capitalize;
  font-weight: 500;
  color: var(--color);
  @media screen and (max-width: 544px) {
    font-size: var(--font-size-smi);
  }
`;
const HeadquatersParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xl);
  @media screen and (max-width: 544px) {
    flex: unset;
    align-self: stretch;
  }
`;
const Home = styled.div`
  align-self: stretch;
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  @media screen and (max-width: 544px) {
    font-size: var(--font-size-smi);
  }
`;
const HomeParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  font-size: var(--font-size-mini);
  color: var(--color);
`;
const SitemapParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-xl);
`;
const CertifiedPreOwned = styled.b`
  align-self: stretch;
  position: relative;
  text-transform: uppercase;
  @media screen and (max-width: 544px) {
    font-size: var(--font-size-base);
  }
`;
const LoremIpsumDolor = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-mini);
  text-transform: lowercase;
  font-weight: 500;
  @media screen and (max-width: 544px) {
    font-size: var(--font-size-smi);
  }
`;
const CertifiedPreOwnedParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  @media screen and (max-width: 544px) {
    flex: unset;
    align-self: stretch;
  }
`;
const FrameGroup = styled.div`
  width: 785px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-33xl);
  z-index: 1;
  font-size: var(--font-size-lg);
  @media screen and (max-width: 1122px) {
    align-self: stretch;
    width: auto;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
  @media screen and (max-width: 960px) {
    align-self: stretch;
    width: auto;
  }
  @media screen and (max-width: 768px) {
    align-self: stretch;
    width: auto;
  }
  @media screen and (max-width: 700px) {
    align-self: stretch;
    width: auto;
  }
  @media screen and (max-width: 544px) {
    align-self: stretch;
    width: auto;
    flex-direction: column;
    gap: var(--gap-xl);
  }
`;
const FrameChild = styled.img`
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 2;
`;
const FrameParent = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-6xl) 0px var(--padding-mini);
  position: relative;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--raisin-black-100);
  font-family: var(--h5);
  @media screen and (max-width: 1122px) {
    flex-direction: column;
    gap: var(--gap-xl);
    align-items: flex-start;
    justify-content: space-between;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
    gap: var(--gap-xl);
    align-items: flex-start;
    justify-content: space-between;
  }
`;
const FooterRoot = styled.section`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-21xl);
  opacity: 0;
  &.animate {
    animation: 1s ease 0s 1 normal forwards ${animationSlideInBottom};
  }
  @media screen and (max-width: 1200px) {
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-0);
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

const Footer = () => {
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
    <FooterRoot data-animate-on-scroll>
      <FrameParent>
        <CopyrightParent>
          <Copyright>
            <GroupIcon alt="" />
            <GroupIcon1 alt="" src="/group.svg" />
          </Copyright>
          <AirtreckAutos>2024 AirTreck Auto’s</AirtreckAutos>
        </CopyrightParent>
        <FrameGroup>
          <HeadquatersParent>
            <Headquaters>HEADQUATERS</Headquaters>
            <MitsubushiAvenue>
              Mitsubushi avenue 21, 2161 SH born The Netherlands(Postal address,
              P.O Box 157, AD Sittard, The netherlands
            </MitsubushiAvenue>
          </HeadquatersParent>
          <SitemapParent>
            <Headquaters>SITEMAP</Headquaters>
            <HomeParent>
              <Home>Home</Home>
              <Home>About</Home>
              <Home>Contact</Home>
            </HomeParent>
          </SitemapParent>
          <CertifiedPreOwnedParent>
            <CertifiedPreOwned>Certified Pre-owned</CertifiedPreOwned>
            <LoremIpsumDolor>
              Lorem ipsum dolor sit amet consectetur. Congue risus mauris cursus
              eu sed. Quam posuere at enim mi fermentum maecenas turpis ut
              auctor.
            </LoremIpsumDolor>
          </CertifiedPreOwnedParent>
        </FrameGroup>
        <FrameChild alt="" src="/line-4.svg" />
      </FrameParent>
    </FooterRoot>
  );
};

export default Footer;
