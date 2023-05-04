import { Assets } from "../utils/DropdownData";

interface InputRadioProp {
  list: Assets[];
  value: string[];
  setValue: any;
  error: string | undefined;
  label: string;
}

function InputRadio(props: InputRadioProp) {
  const { list, value, setValue, error, label } = props;

  return (
    <div className="form-field">
      <label className="fs-12">{label}</label>
      <div className="d-flex gap-20">
        {list.map((x: Assets) => (
          <label className="cursor-pointer fs-14" htmlFor={x.value} key={x.id}>
            <input
              onChange={(e: any) => setValue(e.target.value)}
              checked={value?.includes(x.value)}
              type="checkbox"
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
