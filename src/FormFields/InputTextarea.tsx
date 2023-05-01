export default function InputTextarea(props: any) {

    const { value, setValue, label, placeholder, cols, rows } = props;

    return (
        <div className="form-field remarks">
            <label className="fs-12">{label}</label>
            <textarea onInput={(e: any) => setValue(e.target.value)} value={value} name="" id="" cols={cols} rows={rows} placeholder={placeholder}></textarea>
        </div>
    )
}