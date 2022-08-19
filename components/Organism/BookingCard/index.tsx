import { ButtonSubmit } from "../../Atom";
import {
  BookingDate,
  BookingLong,
  BookingPayment,
  BookingPrice,
} from "../../Molecul";

export default function BookingCard() {
  return (
    <div className="px-20 py-16 border border-gray-300 rounded-2xl">
      <h1 className="font-poppins-medium text-xl text-primary mb-3.5">
        Start Booking
      </h1>

      {/* component biaya permalam */}
      <BookingPrice price={290} />

      {/* component set booking day */}
      <BookingLong
        night={2}
        onDecrement={() => console.log("Decrement")}
        onIncrement={() => console.log("Increment")}
      />

      {/* component booking tanggal */}
      <BookingDate
        onClick={() => console.log("klik date")}
        date="20 Jan - 22 Jan"
      />

      {/* component total bayar dan total booking(hari) */}
      <BookingPayment night={2} total={390} />

      {/* component button */}
      <ButtonSubmit isPrimary route="/" title="Continue to Book" />
    </div>
  );
}
