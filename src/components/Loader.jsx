import { Skeleton } from "./ui/skeleton";

export default function Loader() {
  return (
    <div className="flex justify-center items-center p-4 bg-slate-300">
      <Skeleton>LOADING . . .</Skeleton>
    </div>
  );
}
