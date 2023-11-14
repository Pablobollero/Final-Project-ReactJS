import './Landing.css';

const Landing = ({greeting, companyName, about, queHacemos}) => {
    return(
        <div className="landing">
            <h2 className='greeting'>{greeting}</h2>
            <h1 className='companyName'>{companyName}</h1>
            <h3 className='about'>{about}</h3>
            <p className='queHacemos'>{queHacemos}</p>
        </div>
    )
}

export default Landing;