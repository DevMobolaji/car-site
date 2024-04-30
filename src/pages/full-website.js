import HeroSection from "../components/hero-section";
import WriteUp3 from "../components/write-up3";
import FAQ from "../components/f-a-q";
import CarCards from "../components/car-cards";
import WriteUp2 from "../components/write-up2";
import CarCard1 from "../components/car-card1";
import CarCard from "../components/car-card";
import WriteUp1 from "../components/write-up1";
import FullImage from "../components/full-image";
import CardDetails from "../components/card-details";
import WriteUp from "../components/write-up";
import AboutCard from "../components/about-card";
import Email from "../components/email";
import CountryFlag from "../components/country-flag";
import Footer from "../components/footer";
import styled from "styled-components";

const FullWebsiteRoot = styled.main`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;

const FullWebsite = () => {
  return (
    <FullWebsiteRoot>
      <HeroSection />
      <WriteUp3 />
      <FAQ />
      <CarCards />
      <WriteUp2 />
      <CarCard1 />
      <CarCard />
      <WriteUp1 />
      <FullImage />
      <CardDetails />
      <WriteUp />
      <AboutCard />
      <Email />
      <CountryFlag />
      <Footer />
    </FullWebsiteRoot>
  );
};

export default FullWebsite;
