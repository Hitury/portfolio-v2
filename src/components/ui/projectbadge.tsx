import { Badge } from "@/components/ui/badge";


const SoftBadgeDemo = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {" "}
      <Badge className="bg-red-600/10 dark:bg-red-600/20 hover:bg-red-600/10 text-red-500 shadow-none rounded-full">
        {" "}
        <div className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2" /> Unavailable for Projects{" "}
      </Badge>{" "}
      <Badge className="bg-emerald-600/10 dark:bg-emerald-600/20 hover:bg-emerald-600/10 text-emerald-500 shadow-none rounded-full">
        {" "}
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2" /> Available for Projects{" "}
      </Badge>{" "}
    </div>
  );
};
export default SoftBadgeDemo;
