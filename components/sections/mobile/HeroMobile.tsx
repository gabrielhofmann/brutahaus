import { BrasiliaClock } from "@/components/BrasiliaClock";
import { ArrowUpRight } from "lucide-react";

export function HeroMobile() {
  return (
    <section className="w-screen bg-background desktop:hidden overflow-x-hidden">
      <div className="w-screen h-screen bg-background flex flex-col justify-between">
        <header className="w-full border-b border-concrete z-20 bg-background">
          <div className="flex items-center justify-between p-4 gap-8">
            <div className="text-3xl flex flex-col items-center">
              <div className="flex gap-">
                <h1>G</h1>
                <h1>.H.</h1>
                <h1>M</h1>
              </div>
            </div>

            <p className="text-sm tracking-widest font-bold text-end">
              FULL <span className="text-blue">STACK</span>{" "}
              <span className="text-yellow">WEB</span>{" "}
              <span className="text-red">DEVELOPER</span>
            </p>
          </div>
        </header>

        <div className="flex-1 flex flex-col justify-between relative">
          <div className="absolute top-8 right-[-20vw] w-[40vw] h-[40vw] bg-white rounded-full"></div>

          <p className="tracking-widest text-red font-medium p-4">
            /// PRODUCT BUILDER
          </p>

          <h1 className="text-[23vw] leading-[20vw] p-4">
            DIGITAL SYSTEMS FOR{" "}
            <span className="bg-yellow text-background">HUMAN</span> EXPERIENCE
          </h1>

          <div className="p-4 text-justify">
            <p className="font-medium tracking-widest text-base text-white">
              I <span className="text-red">LOVE</span> TO{" "}
              <span className="text-yellow">BUILD</span> THINGS.
            </p>

            <p className="font-medium tracking-widest text-lg text-white">
              MY GOAL IS TO BUILD SYSTEMS THAT CONNECT{" "}
              <span className="text-blue">FUNCTION</span>,{" "}
              <span className="text-yellow">DESIGN</span> AND{" "}
              <span className="text-red">MEANING</span>.
            </p>
          </div>

          <div className="w-full flex items-center gap-4">
            <div className="w-20 h-20 border border-concrete flex flex-col items-center justify-center relative group mb-4 ml-4">
              <div className="w-10 h-10 bg-red -skew-20 rotate-45 absolute inset-0 m-auto -top-9 z-3 transition-all duration-500 group-hover:scale-150 group-hover:top-9 group-hover:z-1"></div>
              <div className="w-10 h-10 bg-yellow -skew-20 rotate-45 absolute inset-0 m-auto z-2 transition-all duration-500 group-hover:scale-150"></div>
              <div className="w-10 h-10 bg-blue -skew-20 rotate-45 absolute inset-0 m-auto top-9 z-1 transition-all duration-500 group-hover:scale-150 group-hover:-top-9 group-hover:z-3"></div>
            </div>

            <div className="text-background py-2 pl-8 font-bold tracking-widest bg-yellow flex-1 flex items-center gap-8 text-sm">
              <span>SCROLL TO EXPLORE</span>

              <div className="h-[2px] flex-1 bg-black"></div>
            </div>
          </div>
        </div>

        <footer className="w-full border-t border-concrete">
          <div className="p-4 flex items-center justify-between font-bold text-sm tracking-widest text-concrete">
            <p>
              BASED IN <span className="text-red">BRAZIL</span>
            </p>

            <p>@ GABRIEL HOFMANN</p>
          </div>
        </footer>
      </div>

      <div className="w-screen bg-background flex flex-col">
        <div className="w-full bg-concrete border-b border-background p-4 text-background tracking-widest font-bold flex items-center justify-center text-lg">
          <BrasiliaClock />
        </div>

        <div className="bg-concrete w-full flex flex-col">
          <div className="flex overflow-hidden mx-auto border-b border-background w-full pt-4 items-center justify-center">
            <h1 className="text-center text-[50vw] leading-[45vw] text-background">
              24
            </h1>
          </div>

          <div className="bg-concrete w-full p-4 flex items-center justify-between text-background tracking-widest font-bold">
            <p>BRAZIL</p>

            <p>UTC -03:00</p>
          </div>
        </div>

        <div className="w-full border-t border-concrete h-[50vw] flex justify-end relative">
          <div className="bg-blue w-[25vw] h-1/2"></div>

          <div className="bg-yellow w-[25vw] h-full"></div>

          <div className="bg-red w-[40vw] h-[40vw] rounded-full absolute left-[-20vw] top-0 bottom-0 my-auto"></div>
        </div>

        <p className="mx-auto py-8 w-full text-center text-yellow font-bold text-xl border-y border-concrete">
          TECH STACK
        </p>

        <div className="w-full grid grid-cols-3 items-center justify-center text-center gap-y-8 tracking-widest font-bold text-white text-lg px-4 py-8">
          <p className="text-start">NEXT.JS</p>

          <div className="w-3 h-3 bg-red mx-auto"></div>

          <p className="text-end">NODE.JS</p>

          <p className="text-start">MONGODB</p>

          <div className="w-3 h-3 bg-red mx-auto"></div>

          <p className="text-end">TYPESCRIPT</p>

          <p className="text-start">GSAP</p>

          <div className="w-3 h-3 bg-red mx-auto"></div>

          <p className="text-end">TAILWIND</p>
        </div>

        <div className="w-full bg-concrete h-fit border-y border-background p-8 space-y-4">
          <p className="text-background font-bold text-xl tracking-widest">
            STATUS
          </p>

          <div className="w-10 h-[2px] bg-red"></div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-red"></div>

            <p className="text-background tracking-widest font-medium">
              AVAILABLE FOR PROJECTS
            </p>
          </div>
        </div>

        <div className="w-full bg-background h-fit border-y border-background p-8 space-y-4">
          <p className="text-white font-bold text-xl tracking-widest">FOCUS</p>

          <div className="w-10 h-[2px] bg-red"></div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-blue [clip-path:polygon(50%_0%,0%_100%,100%_100%)] rotate-90" />

            <p className="text-white tracking-widest font-medium">
              BEAUTIFUL INTERFACES
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-blue [clip-path:polygon(50%_0%,0%_100%,100%_100%)] rotate-90" />

            <p className="text-white tracking-widest font-medium">STARTUPS</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-blue [clip-path:polygon(50%_0%,0%_100%,100%_100%)] rotate-90" />

            <p className="text-white tracking-widest font-medium">
              USER EXPERIENCE
            </p>
          </div>
        </div>

        <div className="w-full bg-red h-fit border-y border-background p-8 space-y-4 flex flex-col">
          <p className="text-white font-bold text-xl tracking-widest">
            LATEST WORK
          </p>

          <div className="w-10 h-[2px] bg-background"></div>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-background rounded-full"></div>

              <p className="text-white tracking-widest font-bold">
                FESTIVAL BRASÍLIA <br /> SOBRE RODAS
              </p>
            </div>

            <div className="self-end flex items-center justify-center border-8 border-background text-background rounded-full p-2">
              <ArrowUpRight size={40} strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
