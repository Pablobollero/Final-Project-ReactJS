const Landing = ({greeting, companyName, about, queHacemos}) => {
    return(
        <div>
            <h2>{greeting}</h2>
            <h1>{companyName}</h1>
            <h3>{about}</h3>
            <p>{queHacemos}</p>
        </div>
    )
}

export default Landing;