import { useState } from 'react'
import './JobPostingForm.css'

function JobPostingForm(props) {
    const { onAdd } = props;
    const { onUpdate } = props;
    const [id, setId] = useState('');
    const [descriere, setDescriere] = useState('');
    const [deadline, setDeadline] = useState('');

    const addJobPosting = () => {
        onAdd({
            id,
            descriere,
            deadline
        })
    }

    const updateJobPosting = () => {
        onUpdate({
            id,
            descriere,
            deadline
        })
    }

    return (
        <div className='job-form'>
            <input type='text' placeholder='id' onChange={(evt) => setId(evt.target.value)} />
            <input type='text' placeholder='descriere' onChange={(evt) => setDescriere(evt.target.value)} />
            <input type='date' onChange={(evt) => setDeadline(evt.target.value)} />
            <button onClick={addJobPosting}>Add</button>
            <button onClick={updateJobPosting}>Update</button>
        </div>
    )
}

export default JobPostingForm;