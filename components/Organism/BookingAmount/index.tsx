import Image from "next/image";

interface BookingAmountProps {
  tax: number;
  subTotal: number;
  total: number;
  bankLogo: string;
  bankName: string;
  bankNumber: string;
  bankAccount: string;
}

export default function BookingAmount(props: BookingAmountProps) {
  const { tax, subTotal, total, bankLogo, bankName, bankNumber, bankAccount } =
    props;

  return (
    <>
      <p className="font-poppins-regular text-base text-primary mb-5">
        Transfer Pembayaran :
      </p>
      <p className="font-poppins-regular text-base text-primary mb-2.5">
        Tax :
        <span className="font-poppins-medium text-base text-primary">{`${tax}%`}</span>
      </p>
      <p className="font-poppins-regular text-base text-primary mb-2.5">
        Sub total :
        <span className="font-poppins-medium text-base text-primary">
          {`$${subTotal} USD`}
        </span>
      </p>
      <p className="font-poppins-regular text-base text-primary mb-5">
        Total :
        <span className="font-poppins-medium text-base text-primary">
          {`$${total} USD`}
        </span>
      </p>
      <div className="flex items-start">
        <Image src={bankLogo} width={60} height={35} />
        <div className="ml-5">
          <p>{bankName}</p>
          <p>{bankNumber}</p>
          <p>{bankAccount}</p>
        </div>
      </div>
    </>
  );
}
