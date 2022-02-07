import './JobPosting.css'

const SERVER = 'http://localhost:4000'

function JobPosting(props) {
    const { item } = props;

    const deleteJobPosting = async () => {
        const response = await fetch(`${SERVER}/jobpostings/${item.id}`, {
            method: 'DELETE'
        });
        return response.json();
    }

    return (
        <div className='job'>
            <div className='item1'>{item.descriere}</div>
            <div className='item2'>{item.deadline}</div>
            <button className='button' onClick={deleteJobPosting}>Sterge</button>
        </div>
    )
}

export default JobPosting;