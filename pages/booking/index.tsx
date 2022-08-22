import { ChangeEvent, useState } from "react";
import {
  BookingAmount,
  BookingCompleted,
  BookingItem,
  BookingTemplate,
  ButtonSubmit,
  GlobalTemplate,
  PageController,
  TextField,
} from "../../components";

export default function Booking() {
  const [indexPage, setIndexPage] = useState<number>(1);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    sender: "",
    bank_origin: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSendBookingInformation = () => {
    console.log("data : ", data);
    setIndexPage(indexPage + 1);
  };

  return (
    <GlobalTemplate isCenterTitle>
      <PageController indexActive={indexPage} />
      {/* Page Booking Information */}
      {indexPage === 1 && (
        <>
          <BookingTemplate
            title="Booking Information"
            subTitle="Please fill up the blank fields below"
          >
            {/* section informasi apartemen */}
            <div className="w-1/2 pr-20">
              <BookingItem
                image="/images/img-mostpicked-4.png"
                place="Podo Wae"
                city="Madiun"
                country="Indonesia"
                price={480}
                long={2}
              />
            </div>
            {/* section line */}
            <div className="w-0.5 h-[432px] bg-grey" />
            {/* section informasi form */}
            <div className="w-1/2 pl-20">
              <form onSubmit={onSendBookingInformation}>
                <TextField
                  id="first_name"
                  label="First Name"
                  type="text"
                  onChange={onChange}
                />
                <TextField
                  id="last_name"
                  label="Last Name"
                  type="text"
                  onChange={onChange}
                />
                <TextField
                  id="email"
                  label="Email Address"
                  type="email"
                  onChange={onChange}
                />
                <TextField
                  id="phone_number"
                  label="Phone Number"
                  type="text"
                  onChange={onChange}
                />
              </form>
            </div>
          </BookingTemplate>
          <div className="flex justify-center items-center mb-12">
            <div>
              {data.first_name !== "" &&
                data.last_name !== "" &&
                data.email !== "" &&
                data.phone_number !== "" && (
                  <div className="w-56">
                    <ButtonSubmit
                      title="Continue to Book"
                      isButtonSubmit
                      isPrimary
                      onClick={onSendBookingInformation}
                    />
                  </div>
                )}
              <div className="w-56 mt-5">
                <ButtonSubmit isPrimary={false} title="Cancel" route="/" />
              </div>
            </div>
          </div>
        </>
      )}
      {/* Page Payment */}
      {indexPage === 2 && (
        <>
          <BookingTemplate
            title="Payment"
            subTitle="Kindly follow the instructions below"
          >
            {/* Section transfer pembayaran */}
            <div className="w-1/2 pr-20">
              <BookingAmount
                tax={10}
                subTotal={480}
                total={580}
                bankLogo="/images/logo_bank_bca.png"
                bankName="Bank Central Asia"
                bankNumber="09808800"
                bankAccount="Yayak Yogi Ginantaka"
              />
            </div>
            {/* Section line */}
            <div className="w-0.5 h-[300px] bg-grey" />
            {/* Section form */}
            <div className="w-1/2 pl-20">
              <form onSubmit={onSendBookingInformation}>
                <TextField
                  id="bank_origin"
                  label="Asal Bank"
                  type="text"
                  onChange={onChange}
                />
                <TextField
                  id="sender"
                  label="Nama Pengirim"
                  type="text"
                  onChange={onChange}
                />
              </form>
            </div>
          </BookingTemplate>
          <div className="flex justify-center items-center mb-12">
            <div>
              {data.sender !== "" && data.bank_origin !== "" && (
                <div className="w-56">
                  <ButtonSubmit
                    title="Continue to Book"
                    isButtonSubmit
                    isPrimary
                    onClick={onSendBookingInformation}
                  />
                </div>
              )}
              <div className="w-56 mt-5">
                <ButtonSubmit isPrimary={false} title="Cancel" route="/" />
              </div>
            </div>
          </div>
        </>
      )}
      {/* Page Booking Completed */}
      {indexPage > 2 && <BookingCompleted />}
    </GlobalTemplate>
  );
}
