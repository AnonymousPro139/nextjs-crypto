import React from "react";
import PageTitle from "./PageTitle";
interface Data {
  title?: string;
  description?: string;
}

function Intro(data: Data): JSX.Element {
  return (
    <div className="divide-y">
      <PageTitle text={data.title != undefined ? data.title : "Cryptology"} />
      <p className="max-w-xl text-center px-2 mx-auto text-base text-gray-600">
        {data.description != undefined  ? data.description : "Cryptographers changed world! (world war 2)"}
      </p>
    </div>
  );
}

export default Intro;
