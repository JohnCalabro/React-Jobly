import { useState } from "react";

const JobCard = ({job}) => {

    const [applied, setApplied] = useState('Apply')
    const applyClick = (e) => {
        setApplied('Applied')
    }

    return (
        <div>
            <h1>{job.title}</h1>
            <h2>{job.companyName}</h2>
            <p>Salary: {job.salary}</p>
            <p> Equity: {job.equity}</p>
            <button onClick={applyClick}>{applied}</button>
        </div>
    )
}

export default JobCard;