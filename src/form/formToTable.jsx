import React, { useState } from 'react';

const FormToTable = ({ setStaff }) => {
    const inputValues = {
        person: '',
        age: "",
        job: "",
        status: ""
    }

    const [state, setState] = useState(inputValues);

    const onChangeInput = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }

    const onClickForm = (e) => {
        e.preventDefault();
        setStaff(inputValues);
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor='person'>Person:</label>
                <input type="text" id='person' name='person' onChange={onChangeInput} />

                <label htmlFor='age'>Age:</label>
                <input type="text" id='age' name='age' onChange={onChangeInput} />

                <label htmlFor='job'>Job:</label>
                <input type="text" id='job' name='job' onChange={onChangeInput} />

                <label htmlFor='status'>Status:</label>
                <input type="text" id='status' name='status' onChange={onChangeInput} />
                <button onClick={onClickForm}>Set data</button>
            </form>

            <table id='table'>
                <thead>
                    <tr>
                        <th>Person</th>
                        <th>Age</th>
                        <th>Job</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className='formTable'>
                    <tr>
                        <td>{state.person}</td>
                        <td>{state.age}</td>
                        <td>{state.job}</td>
                        <td>{state.status}</td>
                    </tr>

                </tbody>
            </table>

        </>
    )
}
export default FormToTable;