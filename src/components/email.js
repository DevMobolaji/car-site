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
const Helloairtreckcom = styled.div`
  align-self: stretch;
  height: 93px;
  position: relative;
  display: inline-block;
  opacity: 0.8;
  @media screen and (max-width: 1200px) {
    align-self: stretch;
    width: auto;
    flex: 1;
  }
  @media screen and (max-width: 960px) {
    font-size: var(--font-size-41xl);
  }
  @media screen and (max-width: 768px) {
    font-size: var(--font-size-31xl);
  }
  @media screen and (max-width: 700px) {
    font-size: var(--font-size-21xl);
  }
  @media screen and (max-width: 544px) {
    font-size: var(--font-size-11xl);
  }
  @media screen and (max-width: 420px) {
    font-size: var(--font-size-xl);
  }
  @media screen and (max-width: 350px) {
    font-size: var(--font-size-mini);
  }
`;
const Button = styled.div`
  position: relative;
  font-size: var(--h6-size);
  font-weight: 500;
  font-family: var(--h5);
  color: var(--color);
  text-align: left;
  @media screen and (max-width: 420px) {
    font-size: var(--font-size-xl);
  }
  @media screen and (max-width: 350px) {
    font-size: var(--font-size-base);
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
  padding: var(--padding-11xl) 0px;
  background-color: var(--white);
  width: 218px;
  border-radius: var(--br-6xs);
  height: 63px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: var(--gap-3xs);
  @media screen and (max-width: 768px) {
    width: 210px;
    height: 50px;
    padding-left: 0px;
    padding-right: 0px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 420px) {
    width: 180px;
    height: 48px;
    padding-left: 0px;
    padding-right: 0px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 350px) {
    width: 173px;
    height: 10px;
    padding-left: 0px;
    padding-right: 0px;
    box-sizing: border-box;
  }
`;
const Facebook = styled.div`
  position: relative;
  font-weight: 500;
  @media screen and (max-width: 700px) {
    font-size: var(--font-size-xl);
  }
  @media screen and (max-width: 544px) {
    font-size: var(--font-size-base);
  }
  @media screen and (max-width: 420px) {
    font-size: var(--font-size-xs);
  }
  @media screen and (max-width: 350px) {
    font-size: var(--font-size-3xs);
  }
`;
const Instagram = styled.div`
  position: relative;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: var(--h6-size);
  }
  @media screen and (max-width: 700px) {
    font-size: var(--font-size-xl);
  }
  @media screen and (max-width: 544px) {
    font-size: var(--font-size-base);
  }
  @media screen and (max-width: 420px) {
    font-size: var(--font-size-xs);
  }
  @media screen and (max-width: 350px) {
    font-size: var(--font-size-3xs);
  }
`;
const FacebookParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-81xl);
  @media screen and (max-width: 960px) {
    align-items: center;
    justify-content: center;
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 700px) {
    gap: var(--gap-51xl);
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 544px) {
    flex: 1;
    gap: var(--gap-21xl);
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 420px) {
    flex: 1;
    gap: var(--gap-xl);
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 350px) {
    gap: var(--gap-xl);
    flex: unset;
    align-self: stretch;
  }
`;
const ButtonParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-xl);
  font-size: var(--h6-size);
  font-family: var(--h5);
  @media screen and (max-width: 960px) {
    flex-direction: column;
    gap: var(--gap-11xl);
  }
  @media screen and (max-width: 350px) {
    flex-direction: column;
  }
`;
const HelloairtreckcomParent = styled.section`
  flex: 1;
  border-radius: var(--br-3xs);
  background-color: var(--raisin-black-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) 0px var(--padding-xl) var(--padding-mini);
  gap: var(--gap-161xl);
  text-align: left;
  font-size: var(--font-size-61xl);
  color: var(--white);
  font-family: var(--font-play);
  @media screen and (max-width: 1200px) {
    flex: 1;
    height: auto;
  }
  @media screen and (max-width: 960px) {
    flex: unset;
    align-self: stretch;
  }
`;
const EmailRoot = styled.section`
  align-self: stretch;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-21xl);
  opacity: 0;
  &.animate {
    animation: 1s ease 0s 1 normal forwards ${animationSlideInBottom};
  }
  @media screen and (max-width: 1200px) {
    flex-direction: row;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
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

const Email = () => {
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
    <EmailRoot data-animate-on-scroll>
      <HelloairtreckcomParent>
        <Helloairtreckcom>HELLO@AIRTRECK.COM</Helloairtreckcom>
        <ButtonParent>
          <Button1>
            <Button>Order Now</Button>
            <ArrowRightIcon alt="" src="/arrowright5.svg" />
          </Button1>
          <FacebookParent>
            <Facebook>FACEBOOK</Facebook>
            <Facebook>YOUTUBE</Facebook>
            <Instagram>INSTAGRAM</Instagram>
          </FacebookParent>
        </ButtonParent>
      </HelloairtreckcomParent>
    </EmailRoot>
  );
};

export default Email;
