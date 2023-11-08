import CompanyCard from "./CompanyCard";
import { useState, useEffect } from "react";
import "../App.css";
import JoblyApi from "../api";



const Companies = () => {

    const [companies, setCompanies] = useState([])

    useEffect(() => {
        async function getComapnies () {
            let data  = await JoblyApi.getAllComapanies();
            console.log(data)
            let test = data.companies;
            console.log(test, typeof test)
            setCompanies(data.companies)
            console.log(companies)
        }
        getComapnies()
    }, [])

    console.log('COMP', companies)
    return (
        <>
            <h1>List of Companies</h1>
            {console.log('WHAT ARE YOU', companies)}

            {companies.map((company) => {
                return <div className="companyCard">
                    <CompanyCard company={company} />
                </div>
            })}

            

           
            
        </>
    )
}

export default Companies;