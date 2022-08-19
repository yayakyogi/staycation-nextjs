interface BookingLongProps {
  night: number;
  onDecrement(): void;
  onIncrement(): void;
}

export default function BookingLong(props: BookingLongProps) {
  const { night, onDecrement, onIncrement } = props;
  return (
    <div className="mb-6 ">
      <h2 className="font-poppins-regular text-base text-primary mb-2 ">
        How long you will stay?
      </h2>
      <div className="flex bg-secondary rounded-md">
        <button
          onClick={onDecrement}
          type="button"
          className="bg-red w-14 h-11 rounded-md font-poppins-medium text-2xl text-white"
        >
          -
        </button>
        <div className="w-full h-11 text-center pt-2.5 font-poppins-regular text-base text-primary">
          {`${night} night${night > 1 ? "s" : ""}`}
        </div>
        <button
          onClick={onIncrement}
          type="button"
          className="bg-green w-14 h-11 rounded-md font-poppins-medium text-2xl text-white"
        >
          +
        </button>
      </div>
    </div>
  );
}
