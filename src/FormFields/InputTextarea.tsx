interface InputTextareaProp {
  value: string;
  setValue: any;
  label: string;
  placeholder: string;
  cols: number;
  rows: number;
}

export default function InputTextarea(props: InputTextareaProp) {
  const { value, setValue, label, placeholder, cols, rows } = props;

  return (
    <div className="form-field remarks d-flex flex-column">
      <label className="fs-12">{label}</label>
      <textarea
        onInput={(e: any) => setValue(e.target.value)}
        value={value}
        name=""
        id=""
        cols={cols}
        rows={rows}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
