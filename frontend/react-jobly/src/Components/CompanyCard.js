const CompanyCard = ({company}) => {
    return (
        <>
            {console.log(company)}
            <h1>{company.name}</h1>
            <p>{company.description}</p>

        </>
    )
}

export default CompanyCard;