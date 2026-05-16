export function DesignCard() {
  return (
    <div className="w-full h-full p-8 flex flex-col gap-2 cursor-none">
      <div className="flex items-end gap-4">
        <h1 className="text-red text-[8vw] leading-[8.5vw]">[03]</h1>
        <p className="text-[4vw] font-black">DESIGN</p>
      </div>

      <div>
        <p className="wide:text-xl text-lg font-bold tracking-widest text-justify uppercase text-background mb-4">
          Crafting interfaces that balance{" "}
          <span className="bg-yellow">clarity</span>,{" "}
          <span className="bg-red">emotion</span> and{" "}
          <span className="bg-blue">usability</span> through intentional
          decisions.
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-[30%] aspect-square bg-yellow [clip-path:polygon(50%_0%,0%_100%,100%_100%)] opacity-80 mr-[-15%] rotate-90 bg-blend-difference" />

        <div className="w-[25%] aspect-square bg-red mt-[10%] rounded-full opacity-80 bg-blend-difference"></div>

        <div className="w-[20%] aspect-square bg-blue ml-[-10%] mt-[-10%] bg-blend-difference opacity-80"></div>
      </div>
    </div>
  );
}
