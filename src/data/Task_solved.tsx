"use client";
import React from "react";
import Image from "next/image";
import Intro from "@/components/Intro";
const img = "/img/news/e2ee1.png";
const img2 = "/img/news/e2ee2.png";

function Task() {
  return (
    <div className="container">
      <Intro
        title="Сонирхолтой бодолтууд"
        description="'The enemy knows the system' -Claude Shannon"
      />
      <div className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        labore alias dicta necessitatibus eligendi accusantium. Nisi placeat
        alias minus quis aut odit vel laborum sed et quos? Quisquam nemo in aut.
        Perferendis quo hic dolores nostrum iste recusandae ab illo!
      </div>

      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-second">
          <div className="p-2">
            <Image
              src={img}
              width={500}
              height={600}
              alt="photo"
              priority={true}
              style={{ width: "auto" }}
            />
          </div>

          <div className="flex items-center justify-center text-red-300">
            Зураг 1. X3DH algorithm
          </div>
        </div>

        <div className="column">
          <div className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eum
            sint, quam iure omnis suscipit sed totam voluptatem, ullam cum
            sapiente molestiae rerum. Nihil, voluptas at. Ex cumque sed, sint
            beatae accusantium nesciunt ut ipsa necessitatibus, voluptates, aut
            aperiam blanditiis expedita! Optio quod numquam maiores facilis
            sequi ipsum ut deserunt excepturi eaque consequuntur amet, quisquam
            atque saepe reiciendis vitae cum molestias, accusantium veniam
            provident? Iure animi laboriosam illum quos. Corrupti impedit
            doloribus voluptate quis perspiciatis doloremque amet incidunt odit
            qui voluptatem tempora autem minus eaque aut animi est maxime ea
            vitae iste illo, labore fuga provident quae debitis? Aut dolore,
            aperiam doloribus error illo eveniet explicabo, accusantium
            perspiciatis corporis maxime ea architecto nihil unde repellendus
            rem iste, aliquam voluptate earum minima a id quisquam quos
            necessitatibus fuga. Iure sed beatae saepe, impedit omnis eum
            consequatur accusantium aliquam, consectetur commodi vitae ipsa
            nulla distinctio nemo explicabo inventore rerum ducimus?
            Dignissimos, magnam?
          </div>
        </div>
      </div>

      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-second">
          <div className="p-2">
            <Image
              src={img2}
              width={500}
              height={600}
              alt="photo2"
              priority={true}
              style={{ width: "auto" }}
            />
          </div>
          <div className="flex items-center justify-center text-red-300">
            Зураг 2. Chain key болон Message Key үүсгэх алгоритм
          </div>
        </div>

        <div className="column">
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            assumenda perspiciatis rerum numquam nisi nesciunt ea adipisci
            maiores totam mollitia, alias earum aut possimus dolorem porro quo?
            Vel esse odit, atque iure est provident. Temporibus aperiam fuga
            laudantium fugiat aliquam!
          </div>
        </div>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        veniam iusto, harum et repellat, quidem porro, voluptatem sunt libero
        officia saepe. Cumque, quae. Officiis quia, saepe quaerat accusamus non
        quibusdam!
      </div>
      <div className="flex flex-col items-center mt-4 text-sm">
        <p
          style={{
            color: "gray",
            font: "inherit",
          }}
        >
          - published by <strong style={{ color: "gray" }}>Feedly</strong> -
          <br></br>
          <p
            className="flex justify-center items-center mt-1"
            style={{ color: "gray" }}
          >
            2024.11.19
          </p>
        </p>
      </div>
    </div>
  );
}

export default Task;
