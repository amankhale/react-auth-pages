export default function SelectInput(props: any) {

    const { list, value, setValue, label } = props;

    return (
        <div className="form-field">
            <label className="fs-12">{label}</label>
            <select onChange={(e: any) => setValue(e.target.value)} value={value} name="graduation" placeholder='Select Highest Education'>
                {list.map((x: any) => <option key={x.id} value={x.value}>{x.value}</option>)}
            </select>
        </div>
    )
}