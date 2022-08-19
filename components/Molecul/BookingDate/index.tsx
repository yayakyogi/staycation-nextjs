import Image from "next/image";

interface BookingDateProps {
  date: string;
  onClick(): void;
}

export default function BookingDate(props: BookingDateProps) {
  const { date, onClick } = props;
  return (
    <div className="mb-3.5">
      <h2 className="font-poppins-regular text-base text-primary mb-2">
        How long you will stay?
      </h2>
      <button
        onClick={onClick}
        type="button"
        className="flex bg-secondary w-80 rounded-md"
      >
        <div className="w-14 h-11 bg-dark rounded-md flex justify-center items-center">
          <Image src="/icons/ic_calendar.png" width={30} height={30} />
        </div>
        <div className="text-center w-full pt-2 pr-8">{date}</div>
      </button>
    </div>
  );
}
