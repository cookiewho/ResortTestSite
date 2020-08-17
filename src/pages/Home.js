import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom"
import Services from "../components/Services"
export default function Home() {
  return (
    <React.Fragment>
    <Hero hero="defaultHero">
      <Banner title="Luxurious Rooms" subtitle="delux rooms starting at $299">
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>{" "}
      </Banner>
    </Hero>
    <Services></Services>
    </React.Fragment>
  );
}
