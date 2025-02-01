import Header from "@/components/card/header";
import Body from "@/components/card/body";
import Footer from "@/components/card/footer";

export default function Card() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center justify-between w-[80%] h-[80%] p-6 bg-white shadow-lg rounded-[35px] z-10">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
