import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-gray-500">
      <p className="flex justify-center items-center gap-1 text-gray-700 dark:text-black-300">
        Built with
        <span className="text-red-500 text-lg">❤️</span>
        by <a  href="#"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-purple-700 hover:underline cursor-pointer">Cryptor</a>,
        <span className="ml-1">2023–2025</span>
      </p>
      <p className="mt-1 text-xs text-black-400 ">version - 2.1.0</p>
    </footer>
  );
}

export default Footer;
