interface BookingPriceProps {
  price: number;
}

export default function BookingPrice({ price }: BookingPriceProps) {
  return (
    <div className="mb-3.5">
      <span className="font-poppins-medium text-4xl text-green">
        {`$${price} `}
      </span>
      <span className="font-poppins-extralight text-4xl text-secondary">
        per night
      </span>
    </div>
  );
}
