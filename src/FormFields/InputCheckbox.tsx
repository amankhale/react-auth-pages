import { Assets } from "../utils/DropdownData";

interface InputCheckboxProps {
  list: Assets[];
  value: string;
  setValue: any;
  error: string | undefined;
  label: string;
}

function InputCheckbox(props: InputCheckboxProps) {
  const { list, value, setValue, error, label } = props;

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
              onChange={() => setValue(x.value)}
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

export default InputCheckbox;
