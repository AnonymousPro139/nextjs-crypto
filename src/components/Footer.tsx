import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="py-4 flex justify-center font-primary items-center mt-4">
      Built with{" "}
      <FontAwesomeIcon icon={faHeart} className="w-5 text-red-600 mx-1" /> by{" "}
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="text-palette-primary font-bold px-1"
      >
        Cryptor,
      </a>
      <div className="text-palette-dark font-bold px-1">2023-2024</div>
    </footer>
  );
}

export default Footer;
