interface InputTextareaProp {
  name: string;
  value: string;
  setValue: any;
  label: string;
  placeholder: string;
  cols: number;
  rows: number;
}

export default function InputTextarea(props: InputTextareaProp) {
  const { value, setValue, label, placeholder, cols, rows, name } = props;

  return (
    <div className="form-field remarks d-flex flex-column">
      <label className="fs-12">{label}</label>
      <textarea
        onInput={(e: any) => setValue(e)}
        value={value}
        name={name}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
