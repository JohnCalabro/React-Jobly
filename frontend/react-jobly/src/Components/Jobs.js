import JobCard from "./JobCard";
import { useState, useEffect } from "react";
import "../App.css";
import JoblyApi from "../api";


const Jobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        async function getJobs () {
            let data  = await JoblyApi.getAllJobs();
            console.log(data)
         
            setJobs(data.jobs)
            // console.log(jobs)
        }
        getJobs()
    }, [])

    return (
        <>
            {console.log(jobs)}
            <h1>List of Jobs</h1>
            {jobs.map((job) => {
                return <div className="jobCard">
                    <JobCard job={job}/>
                </div>
                
            })}
        </>
    )
}

export default Jobs;