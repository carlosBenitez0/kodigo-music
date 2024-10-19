import { Aside } from "./shared/components/Aside";
import { Header } from "./shared/components/Header";
import { Main } from "./shared/components/main/Main";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full bg-transparent  
    relative z-0"
    >
      {/* <Bubble
        left="100px"
        top="100px"
        blur="md"
        firstColor="green"
        secondColor="purple"
        w="200px"
        h="200px"
        bgDireccion="br"
      /> */}
      <div className=" left-72 top-72 bg-gradient-to-br blur-sm from-purple-500 to-green-500 w-48 h-48 rounded-full absolute"></div>
      <div className="left-20 top-60 bg-gradient-to-bl blur-lg from-orange-500 to-green-500 w-10 h-10 rounded-full absolute"></div>
      <div className=" right-96 top-20 bg-gradient-to-tr blur-md from-yellow-500 to-red-500 w-20 h-20 rounded-full absolute"></div>
      <div className=" right-10 top-20 bg-gradient-to-br blur-md from-blue-500 to-purple-500 w-96 h-96 rounded-full absolute"></div>

      <div className="z-10 min-h-screen w-full grid grid-cols-[auto,1fr] grid-rows-[auto,1fr] relative">
        <Aside />
        <Header />
        <Main />
      </div>
    </div>
  );
}
