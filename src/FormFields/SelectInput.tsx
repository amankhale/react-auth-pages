import { Assets } from "../utils/DropdownData";

interface SelectInputProp {
  name: string;
  list: Assets[];
  value: string;
  setValue: any;
  label: string;
}

export default function SelectInput(props: SelectInputProp) {
  const { list, value, setValue, label, name } = props;

  return (
    <div className="form-field d-flex flex-column">
      <label className="fs-12">{label}</label>
      <select
        onChange={(e: any) => setValue(e)}
        value={value}
        name={name}
        placeholder="Select Highest Education"
      >
        {list.map((x: any) => (
          <option key={x.id} value={x.value}>
            {x.value}
          </option>
        ))}
      </select>
    </div>
  );
}
