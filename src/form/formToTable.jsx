import React from 'react';
import { useState } from 'react';

const FormToTable = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const inputRef = React.createRef();
    const inputRef1 = React.createRef();
    const onClickHandler = (e) => {
        e.preventDefault();
        setName(inputRef.current.value);
        setAge(inputRef1.current.value);
    }

    return (
        <>
            <form action="">
                <label htmlFor='name'>Name:</label>
                <input type="text" id='name' ref={inputRef} />
                <label htmlFor='age'>Age:</label>
                <input type="text" id='age' ref={inputRef1} />
                <button onClick={onClickHandler}>Click</button>
            </form>

            <table id='table'>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                </thead>
                <tbody className='formTable'>
                    <td>{name}</td>
                    <td>{age}</td>
                </tbody>
            </table>

        </>
    )
}
export default FormToTable;