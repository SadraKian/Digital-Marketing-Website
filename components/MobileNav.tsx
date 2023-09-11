import Image from "next/image";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

const MobileNav = ({ isMobileNavVisible, setIsMobileNavVisible }: NavProps) => {
  return (
    <div className="flex landscape:gap-9 flex-col gap-12 ">
      <button
        onClick={() => setIsMobileNavVisible(!isMobileNavVisible)}
        className="absolute right-[10px] top-[10px] text-2xl hover:bg-gray-700 p-2 rounded-full transition-all ease-in duration-300">
        <FaTimes />
      </button>
      <div className="flex  gap-1 object-contain">
        <Image
          src="/assets/images/logo.png"
          alt="Rasam logo"
          title="Rasam"
          width="280"
          height="557"
          className="w-6 h-12"
        />
        <Image
          src="/assets/images/logoText.png"
          width="588"
          height="124"
          className="w-[120px] h-[24px] mt-7"
          alt="Digital marketing logo"
          title="Digital Marketing"
        />
      </div>
      <nav
        aria-label="Main Mobile Nav"
        className=" flex flex-col landscape:gap-7 gap-14 font-semibold text-lg ">
        <Link href="" className="hover:text-yellow-300">
          Home
        </Link>
        <Link href="" className="hover:text-yellow-300">
          Blog
        </Link>
        <Link href="" className="hover:text-yellow-300">
          About Us
        </Link>
        <Link href="" className="hover:text-yellow-300">
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default MobileNav;
