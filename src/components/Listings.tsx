import React from "react";
import Item from "../components/Item";

function Listings({ Items }: { Items: any[] }) {
  return (
    <div className="pt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
      {Items.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </div>
  );
}

export default Listings;
