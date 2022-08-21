import { ReactNode } from "react";

interface BookingTemplateProps {
  title: string;
  subTitle: string;
  children: ReactNode;
}

export default function BookingTemplate(props: BookingTemplateProps) {
  const { title, subTitle, children } = props;
  return (
    <div className="px-40 mt-12 w-full">
      <h1 className="font-poppins-semibold text-4xl text-primary mb-1 text-center">
        {title}
      </h1>
      <h2 className="font-poppins-light text-lg text-secondary text-center">
        {subTitle}
      </h2>
      <div className="flex justify-between my-12">{children}</div>
    </div>
  );
}
