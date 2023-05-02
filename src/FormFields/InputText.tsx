export function InputText(props: any) {

    const { label, value, setValue, placeholder, error } = props;

    return (
        <div className="form-field d-flex flex-column">
            <label className='fs-12'>{label}</label>
            <input className={error ? 'input-invalid' : ''} onInput={(e: any) => setValue(e.target.value)} value={value} type="text" placeholder={placeholder} />
            {error && <span className="fs-10 error-msg">{error}</span>}
        </div>
    )
}