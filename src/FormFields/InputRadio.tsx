import { Assets } from "../utils/DropdownData";

interface InputRadioProps {
  name: string;
  list: Assets[];
  value: string;
  setValue: any;
  error: string | undefined;
  label: string;
}

function InputRadio(props: InputRadioProps) {
  const { list, value, setValue, error, label, name } = props;

  return (
    <div className="form-field">
      <label className="fs-12">{label}</label>
      <div className="d-flex gap-20">
        {list.map((x: Assets) => (
          <label
            key={x.id}
            className="cursor-pointer multiselect fs-14"
            htmlFor={x.value}
          >
            <input
              name={name}
              onChange={(e) => setValue(e)}
              checked={value == x.value}
              type="radio"
              value={x.value}
              id={x.value}
            />
            {x.value}
          </label>
        ))}
      </div>
      {error && <span className="fs-10 error-msg">{error}</span>}
    </div>
  );
}

export default InputRadio;
