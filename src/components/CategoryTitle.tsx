import React from "react";

interface CategoryTitle {
  title: string;
  color?: string;
  fontSize?: number;
}

export default function CategoryTitle({
  title,
  color,
  fontSize,
}: CategoryTitle) {
  return (
    <div
      style={{
        color: color ? color : "black",
        marginTop: 15,
        marginBottom: 20,
        marginLeft: 10,
        fontSize: fontSize ? fontSize : 15,
        flexDirection: "column",
        fontWeight: "bolder",
        justifyContent: "flex-end",
      }}
    >
      {title}
    </div>
  );
}
