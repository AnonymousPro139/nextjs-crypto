import Image from "next/image";
import Link from "next/link";

interface Data {
  move: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

function Item({ data }: { data: Data }): JSX.Element {
  let { move, imgSrc, imgAlt, title, description } = data;

  return (
    <Link
      href={`/pages/${move}`}
      className="h-120 w-72 rounded-3xl shadow-lg mx-auto border border-palette-lighters mb-10 overflow-hidden"
      passHref
    >
      <div
        className="h-72 border-b-2 border-palette-lighter relative"
      >
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="transform duration-500 ease-in-out hover:scale-110"
            // style={{borderRadius: 20}}
          />
      </div>
      <div className="h-48 relative">
        <div className="font-primary text-xl pt-4 px-4 font-semibold " style={{color: "#485FC7"}}>
          {title}
        </div>
        <div className="text-md text-gray-600 m-4 font-primary font-light text-justify">
          {description}
        </div>
      </div>
    </Link>
  );
}

export default Item;
