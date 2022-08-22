import Image from "next/image";

interface IndexControllerProps {
  index: number;
  isActive?: boolean;
  isDone?: boolean;
}

export default function IndexController(props: IndexControllerProps) {
  const { index, isActive = false, isDone = false } = props;
  if (isDone) {
    return (
      <div className="w-12 h-12">
        <Image src="/icons/ic_done.png" width={80} height={80} />
      </div>
    );
  }
  return (
    <div
      className={`w-14 h-14 rounded-full border-grey flex justify-center items-center ${
        isActive && "border"
      }`}
    >
      <div className="w-12 h-12 rounded-full bg-grey flex justify-center items-center">
        <p className="font-poppins-medium text-secondary text-lg">{index}</p>
      </div>
    </div>
  );
}
