import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail/>,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni, corporis!",
      },
      {
        icon: <FaHiking/>,
        title: "Endless Hikeing",
        info:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni, corporis!",
      },
      {
        icon: <FaShuttleVan/>,
        title: "Free Shuttles",
        info:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni, corporis!",
      },
      {
        icon: <FaBeer/>,
        title: "Stongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni, corporis!",
      }
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
