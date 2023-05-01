export function InputText(props: any) {

    const { label, value, setValue, placeholder } = props;

    return (
        <div className="form-field">
            <label className='fs-12'>{label}</label>
            <input onInput={(e: any) => setValue(e.target.value)} value={value} type="text" placeholder={placeholder} />
        </div>
    )
}