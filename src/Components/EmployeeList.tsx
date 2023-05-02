export default function EmployeeList(props: any) {

    const { empList, handleDelete, handleEdit } = props;

    return (
        <div className="employee-list">
            <h2>Employee List</h2>
            {
                empList.length ?
                    <table className='employee-table'>
                        <thead>
                            <tr>
                                <td>SNo.</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Designation</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {empList.map((data: any, index: number) =>

                                <tr key={index}>
                                    <td>{index + 1}.</td>
                                    <td>{data?.firstName} {data?.lastName}</td>
                                    <td>{data?.email}</td>
                                    <td>{data?.designation}</td>
                                    <td className='action-btn'>
                                        <button onClick={() => handleEdit(data)} className='edit-btn'>Edit</button>
                                        <button onClick={() => handleDelete(index)} className='delete-btn'>Delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table> :
                    <div className="no-data-found">
                        No data found
                    </div>
            }
        </div>
    )
}