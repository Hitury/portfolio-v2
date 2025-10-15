import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <div className="flex flex-col justify-start items-start w-screen h-screen px-45 py-45 overflow-hidden">
      <Badge className="bg-primary/10 dark:bg-primary/20 hover:bg-primary/10 text-amber-500 shadow-none rounded-full mb-4">
        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" /> <span className="text-primary">Available for Projects</span>
      </Badge>
      <div className="flex flex-col justify-center items-start gap-3.5 w-full">
        <h1 className="text-5xl font-bold">Hello, I'm <span className="text-primary">Hitury</span></h1>
        <h1 className="text-5xl font-bold">I'm a <span className="text-primary">Software Developer</span></h1>
      </div>
    </div>
  );
}

export default Hero;
