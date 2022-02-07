import { useEffect, useState } from 'react';
import JobPosting from './JobPosting';
import JobPostingForm from './JobPostingForm';
import './JobPostingList.css'

const SERVER = 'http://localhost:4000';

function JobPostingList() {
    const [jobs, setJob] = useState([]);

    const getJobPosting = async () => {
        const response = await fetch(`${SERVER}/jobpostings`, {
            method: 'get',
            headers: {
                Accept: 'application/json'
            },
        })
        const data = await response.json();
        setJob(data);
    }

    const getSortedJobPosting = async () => {
        const response = await fetch(`${SERVER}/jobpostings`, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        const data = await response.json();
        setJob(data);
    }

    const addJobPosting = async (job) => {
        await fetch(`${SERVER}/jobpostings`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        })
        getJobPosting();
    }

    const updateJobPosting = async (job) => {
        await fetch(`${SERVER}/jobpostings/${job.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        })
        getJobPosting();
    }

    useEffect(() => {
        getJobPosting();
    }, []);

    return (
        <div className='job-list'>
            {
                jobs.map(e => <JobPosting key={e.id} item={e} />)
            }
            <JobPostingForm onAdd={addJobPosting} onUpdate={updateJobPosting} />
            <button onClick={getSortedJobPosting} className='button-sortare' title='Sortare crescator dupa deadline'>Sortare</button>
        </div>
    )
}

export default JobPostingList;