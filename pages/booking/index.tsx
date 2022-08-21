import { ChangeEvent, useState } from "react";
import {
  BookingItem,
  BookingTemplate,
  ButtonSubmit,
  GlobalTemplate,
  PageController,
  TextField,
} from "../../components";

export default function Booking() {
  const [indexPage, setIndexPage] = useState<number>(1);
  const [data, setData] = useState<object>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    console.log("data : ", data);
    setIndexPage(indexPage + 1);
  };

  return (
    <GlobalTemplate isCenterTitle>
      <PageController indexActive={indexPage} />
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
        <div className="w-0.5 h-[432px] bg-grey" />
        {/* section informasi form */}
        <div className="w-1/2 pl-20">
          <form onSubmit={onSubmit}>
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
          <div className="w-56">
            <ButtonSubmit
              title="Continue to Book"
              isButtonSubmit
              isPrimary
              onClick={onSubmit}
            />
          </div>
          <div className="w-56 mt-5">
            <ButtonSubmit isPrimary={false} title="Cancel" route="/" />
          </div>
        </div>
      </div>
    </GlobalTemplate>
  );
}
