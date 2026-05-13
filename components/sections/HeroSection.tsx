import { ArrowRight, ArrowUpRight, MoveRight } from "lucide-react";
import { BaseGrid } from "../BaseGrid";
import { GridOverlay } from "../GridOverlay";
import { BrasiliaClock } from "../BrasiliaClock";

export function HeroSection() {
  return (
    <section className="w-full h-dvh overflow-x-hidden">
      <BaseGrid>
        <div className="col-start-1 col-span-1 row-start-1 row-span-11 bg-background border-r-concrete border-r py-8">
          <div className="flex flex-col gap-4 items-center justify-between h-full w-full">
            <div className="text-3xl flex flex-col items-center w-full px-8">
              <div className="flex gap-4">
                <h1>G</h1>
                <h1>H</h1>
              </div>
              <h1>M</h1>
            </div>

            <div className="w-px flex-1 bg-white"></div>

            <p className="[writing-mode:vertical-rl] rotate-180 font-medium text-white tracking-widest">
              FULL <span className="text-blue">STACK</span>{" "}
              <span className="text-yellow">WEB</span>{" "}
              <span className="text-red">DEVELOPER</span>
            </p>
          </div>
        </div>

        {/* HEADER LINE */}
        <div className="col-start-2 col-span-15 row-start-1 row-span-1 border-b border-concrete"></div>

        {/* HEADER CONTENT */}
        <div className="col-start-2 col-span-10 row-start-1 row-span-1 flex items-center justify-between px-8 font-medium text-white tracking-widest text-xs wide:text-base">
          <p className="font-bold text-yellow">TECH STACK</p>

          <div className="flex items-center gap-4">
            <p>NEXT.JS</p>

            <div className="w-2 h-2 bg-red"></div>

            <p>NODE.JS</p>

            <div className="w-2 h-2 bg-red"></div>

            <p>MONGODB</p>

            <div className="w-2 h-2 bg-red"></div>

            <p>TYPESCRIPT</p>

            <div className="w-2 h-2 bg-red"></div>

            <p>GSAP</p>

            <div className="w-2 h-2 bg-red"></div>

            <p>TAILWIND</p>
          </div>
        </div>

        <div className="col-start-15 col-span-2 row-start-1 flex items-center justify-center font-black tracking-widest text-background z-20 text-xl">
          <BrasiliaClock />
        </div>

        <div className="col-start-2 col-span-6 row-start-2 row-span-10 pl-8 py-8 flex flex-col justify-between border-r border-concrete">
          <p className="text-red font-medium tracking-widest text-base wide:text-lg">
            /// PRODUCT BUILDER
          </p>

          <h1 className="text-[7vw] wide:text-[8vw] leading-[6vw] wide:leading-[7vw]">
            DIGITAL <br /> SYSTEMS <br /> FOR HUMAN <br /> EXPERIENCE
          </h1>

          <div className="pr-8">
            <p className="font-medium tracking-widest text-base wide:text-lg text-white">
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

          <div className="w-full flex items-center gap-8">
            <div className="w-20 h-20 border border-concrete flex flex-col items-center justify-center relative group">
              <div className="w-10 h-10 bg-red -skew-20 rotate-45 absolute inset-0 m-auto -top-9 z-3 transition-all duration-500 group-hover:scale-150 group-hover:top-9 group-hover:z-1"></div>
              <div className="w-10 h-10 bg-yellow -skew-20 rotate-45 absolute inset-0 m-auto z-2 transition-all duration-500 group-hover:scale-150"></div>
              <div className="w-10 h-10 bg-blue -skew-20 rotate-45 absolute inset-0 m-auto top-9 z-1 transition-all duration-500 group-hover:scale-150 group-hover:-top-9 group-hover:z-3"></div>
            </div>

            <div className="text-background py-2 pl-8 font-bold tracking-widest bg-yellow flex-1 flex items-center gap-8">
              <span>SCROLL TO EXPLORE</span>

              <div className="h-[2px] flex-1 bg-black"></div>
            </div>
          </div>
        </div>

        <div className="col-start-8 col-span-2 bg-blue row-start-10 row-span-2"></div>

        <div className="col-start-10 col-span-2 bg-yellow row-start-7 row-span-5"></div>

        <div className="col-start-9 col-span-7 bg-white row-start-3 row-span-7 rounded-full"></div>

        <div className="col-start-10 row-start-2 col-span-2 row-span-10 border-x border-concrete"></div>

        <div className="col-start-8 row-start-6 col-span-4 row-span-1 border-t border-concrete"></div>

        {/* CONCRETE CARD */}
        <div className="col-start-12 col-span-5 row-start-1 row-span-5 bg-concrete"></div>

        {/* CONCRETE CARD - RIGHT CONTENT */}
        <div className="col-start-15 col-span-2 row-start-2 row-span-4 border-background border-l z-10 w-full h-full p-8 flex flex-col items-center justify-between">
          <h1 className="text-background text-[10vw] leading-[9vw]">24</h1>

          <div className="w-full text-background text-sm font-medium tracking-widest wide:text-lg">
            <p>BRAZIL</p>

            <p>UTC -03:00</p>
          </div>
        </div>

        {/* CONCRETE CARD - LEFT CONTENT */}
        <div className="col-start-12 col-span-3 row-start-2 row-span-4 z-10 w-full h-full p-8 space-y-8">
          <p className="text-background tracking-widest font-black wide:text-lg">
            STATUS
          </p>

          <div className="w-10 h-[2px] bg-red"></div>

          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-background shrink-0"></div>

            <p className="text-background tracking-widest text-sm font-medium">
              AVAILABLE FOR PROJECTS
            </p>
          </div>
        </div>

        {/* BLACK CARD */}
        <div className="col-start-12 col-span-5 row-start-6 row-span-3 bg-background p-8">
          <div className="flex justify-between items-center h-full">
            <div className="flex flex-col justify-between h-full">
              <p className="text-white tracking-widest font-black wide:text-lg">
                FOCUS
              </p>

              <div className="w-10 h-[2px] bg-red"></div>

              <div className="text-white text-base font-medium tracking-widest">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-yellow [clip-path:polygon(50%_0%,0%_100%,100%_100%)] rotate-90" />

                  <p>BEAUTIFUL INTERFACES</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-yellow [clip-path:polygon(50%_0%,0%_100%,100%_100%)] rotate-90" />

                  <p>STARTUPS</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-yellow [clip-path:polygon(50%_0%,0%_100%,100%_100%)] rotate-90" />

                  <p>USER EXPERIENCE</p>
                </div>
              </div>
            </div>

            <div className="relative w-10 wide:w-15 h-10 wide:h-15">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2" />

              <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white -translate-x-1/2" />
            </div>
          </div>
        </div>

        {/* RED CARD */}
        <a
          href="https://festivalbrasiliasobrerodas.com.br"
          target="_blank"
          className="col-start-12 col-span-5 row-start-9 row-span-3 bg-red p-8 space-y-8 relative group"
        >
          <p className="text-white tracking-widest font-black wide:text-lg">
            LATEST WORK
          </p>

          <div className="w-10 h-[2px] bg-background"></div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-background"></div>

            <p className="tracking-widest font-bold text-white w-1/2 wide:w-full">
              FESTIVAL BRASÍLIA SOBRE RODAS
            </p>
          </div>

          <div className="absolute w-20 h-20 rounded-full border-white border-8 bottom-8 right-8 flex items-center justify-center transition-all duration-500 group-hover:text-background group-hover:border-background">
            <ArrowUpRight size={60} />
          </div>
        </a>

        {/* LINES */}
        <div className="col-start-12 col-span-5 row-start-1 row-span-1 border-background border-b z-10 w-full h-full"></div>

        <div className="col-start-15 col-span-2 row-start-1 row-span-5 border-background border-l z-10 w-full h-full"></div>

        <div className="col-start-1 col-span-20 row-start-12 self-end border-t border-concrete h-full px-4">
          <div className="flex items-center justify-between px-8 h-full tracking-widest text-white font-medium">
            <p className="col-start-2">
              BASED IN <span className="text-red">BRAZIL</span>
            </p>

            <p>@ 2026 GABRIEL HOFMANN</p>
          </div>
        </div>
      </BaseGrid>
    </section>
  );
}
