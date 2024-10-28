"use client";
import React from "react";
import Image from "next/image";
import Intro from "@/components/Intro";
import Dropdown from "@/components/Dropdown";
const logo = "/img/differential_analys.png";

function Analys_feal4() {
  const setHandler = (e: any) => {};

  return (
    <div className="container">
      <Intro title="Криптоанализ!" description="Differential attack" />

      <div className="columns" style={{ margin: 2 }}>
        <div className="column is-one-third">
          <Image
            src={logo}
            width={130}
            height={130}
            alt="photo"
            priority={true}
            style={{ width: "auto" }}
          />
        </div>

        <div
          className="column"
          style={{
            alignSelf: "center",
            color: "black",
            fontSize: 20,
            fontWeight: "bolder",
          }}
        >
          Feal4-т дифференциал довтолгоо хийх
        </div>

        <div className="column" style={{ alignSelf: "center" }}>
          <Dropdown
            url={"/analysis/feal4"}
            info={"Цэс"}
            data={[
              {
                text: "Тайлбар",
                endpoint: "show",
              },
              {
                text: "Довтолгоо хийх",
                endpoint: "attack",
              },
            ]}
            onClick={(endpoint: any) => setHandler(endpoint)}
          />
        </div>
      </div>

      <div
        className="text-center mb-16"
        style={{ color: "#485FC7", fontWeight: "bold" }}
      >
        Тун удахгүй...
      </div>
    </div>
  );
}

export default Analys_feal4;
