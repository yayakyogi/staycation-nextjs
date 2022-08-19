interface BookingPaymentProps {
  total: number;
  night: number;
}

export default function BookingPayment(props: BookingPaymentProps) {
  const { total, night } = props;
  return (
    <div className="mb-10">
      <span className="font-poppins-light text-base text-secondary">
        You will pay
        <span className="font-poppins-medium text-primary">
          {` $${total} USD `}
        </span>
        per
        <span className="font-poppins-medium text-primary">
          {` ${night} night${night > 1 ? "s" : ""}`}
        </span>
      </span>
    </div>
  );
}
