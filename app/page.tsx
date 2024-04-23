import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Landingpage from "./components/Body/Landingpage";

export default function Home() {
  return (
    <div className=" bg-gradient-to-br from-red-300 via-rose-50 to-teal-200 flex items-center justify-center pt-28  flex-col">
      <Landingpage />
    </div>
  );
}
