export function InputDate(props: any) {

    const { value, setValue, label } = props;

    return (
        <div className="form-field">
            <label className="fs-12">{label}</label>
            <input onInput={(e: any) => setValue(e.target.value)} value={value} type="date"/>
        </div>
    )
}