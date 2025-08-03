import {Link, withRouter} from "react-router-dom"
import './index.css';



const DoctorItem = (props) => {
    const {data} = props 
    const {id, name, specialisation, imageUrl, status} = data

    const book = () => {
        const {history} = props 
        history.push(`/booking/${id}`)
    }
    return (
            <li>
                <Link to={`/profile/${id}`} className="list-item">
                
                <div className='doc-data'>
                    <img className='profile' src={imageUrl} alt="profile"/>
                    <div className="details">
                        <h1>Name: {name}</h1>
                        <h2>Specilisation in {specialisation}</h2>
                        <p>Availability: {status}</p>
                    </div>
                </div>
                </Link>
                {status === "Available Today" ? <button type="button" onClick={book}>
                    Book 
                </button> : <p>{status}</p>}
            </li>
    
    )
}

export default withRouter(DoctorItem)