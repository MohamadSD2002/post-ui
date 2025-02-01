import Image from "next/image";
import nextIcon from "../../../../public/next-icon.png";
import nextSvg from "../../../../public/next.svg";

export default function Header() {
  return (
    <div className="flex items-center justify-center w-full text-center border-b pb-6">
      <div>
        <Image src={nextIcon} alt="next" className="w-[30px]" />
      </div>
      <div className="h-[70%] border-l border-[#31363f] m-2"></div>
      <div>
        <Image src={nextSvg} alt="next" className="w-[80px]" />
      </div>
    </div>
  );
}
