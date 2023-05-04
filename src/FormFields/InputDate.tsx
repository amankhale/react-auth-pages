interface InputDateProp {
  name: string;
  value: string;
  setValue: any;
  label: string;
  error: string | undefined;
}

export default function InputDate(props: InputDateProp) {
  const { value, setValue, label, error, name } = props;

  return (
    <div className="form-field d-flex flex-column">
      <label className="fs-12">{label}</label>
      <input
        name={name}
        className={error ? "input-invalid" : ""}
        onInput={(e: any) => setValue(e)}
        value={value}
        type="date"
      />
      {error && <span className="fs-10 error-msg">{error}</span>}
    </div>
  );
}
