import {Link} from 'react-router-dom'
import './index.css'

const doctorsList = [
    {
        id: 1,
        name: 'doctor 1',
        specialisation: "specilisation 1",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "Available Today"
    },
    {
        id: 2,
        name: 'doctor 2',
        specialisation: "specilisation 2",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "on Leave"
    },
    {
        id: 3,
        name: 'doctor 3',
        specialisation: "specilisation 3",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "Fulli booked"
    },
    {
        id: 4,
        name: 'doctor 4',
        specialisation: "specilisation 4",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "Available Today"
    }
]


const BookButton = () => (
<Link>
<button type='button' class>
    Book Appointment
</button>
</Link>)

const Profile = (props) => {
    const {match} = props 
    const {params} = match
    const {id} = params
    const {name, imageUrl, specialisation,status} = doctorsList[id-1]
    return (
        <div className="profile-bg-container">
            <div className="doc-data">
                <img src={imageUrl} alt="profile" className="detailed-profile"/>
                <div className="details">
                    <h1>Name: {name}</h1>
                    <h2>Specilisation in {specialisation}</h2>
                    <p>Availability: {status}</p>
                </div>
            </div>
            <p> The Doctor is specialist is this profession from around 2019 with experienve of so on so</p>
            <div className='profile-book-btn'>
                {status === "Available Today" ? <BookButton/> : <p>{status}</p> }
            </div>
        </div>
    )
}

export default Profile