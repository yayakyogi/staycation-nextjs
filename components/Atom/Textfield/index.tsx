import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface TextFieldProps {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function TextField(props: TextFieldProps) {
  const { id, label, type, onChange } = props;
  return (
    <label htmlFor={id} className="font-poppins-regular text-base text-primary">
      {label}
      <input
        name={id}
        id={id}
        type={type}
        pattern="[a-z0-9]{1,15}"
        onChange={onChange}
        title="Password should be digits (0 to 9) or alphabets (a to z)."
        className="block w-full mt-1.5 mb-3 py-3 px-5 rounded-md bg-secondary text-primary placeholder:text-secondary  placeholder:text-sm focus:outline-none"
        placeholder="Please type here .."
        autoComplete="off"
      />
    </label>
  );
}
