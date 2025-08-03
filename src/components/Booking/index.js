import {useState, useEffect} from 'react'
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
        status: "Fully booked"
    },
    {
        id: 4,
        name: 'doctor 4',
        specialisation: "specilisation 4",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "Available Today"
    }
]

const Booking = (props) => {
    const [doctor,setDoctor] = useState('')
    const [specialisation, setSpecilisation] = useState('')
    const [patientName, setPatientName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('') 

    const {match} = props 
    const {params} = match 
    const {id} = params
    const doctorDetails = doctorsList.find(each => each.id === parseInt(id))


    useEffect(() => {
        console.log(doctorDetails)
        const {name, specialisation} = doctorDetails
        setDoctor(name)
        setSpecilisation(specialisation)
    },[doctorDetails])

    const updateName = e => {
        setPatientName(e.target.value)
    }

    const updateEmail = e => {
        setEmail(e.target.value)
    }

    const updateMobileNumber = e => {
        setMobileNumber(e.target.value)

    }

    const onBook = () => {
        if (patientName !== "" &&  email !== "" && mobileNumber !== ""){
            alert("Your Appointmnet has been sheduled with the doctor. The confiramtion will be sent to your  email and mobile.no ")
            const {history} = props 
            history.replace("/")
        }
    }

    return (
        <div className="booking-bg-container">
            <h1>Booking Form</h1>
            <form className='booking-form' onSubmit={onBook}>
                <label htmlFor="dr">
                    Doctor Name:
                </label>
                <input type='text' id="dr" value={doctor} required/>
                
                <br/>

                <label htmlFor="spcialisation">
                    Specialisation:
                </label>
                <input type='text' id="spcialisation" value={specialisation} required/>
                
                <br/>

                <label htmlFor="name">
                    Patient Name:
                </label>
                <input type='text' id="name" value={patientName} required onChange={updateName}/>
                
                <br/>

                <label htmlFor="email">
                    Email:
                </label>
                <input type='email' id="email" value={email} required onChange={updateEmail}/>

                <br/>

                <label htmlFor="number">
                   Mobile.No:
                </label>
                <input type='text' id="number" value={mobileNumber} required onChange={updateMobileNumber}/>
                <br/>
                <button type="submit" >
                    Book Appointment
                </button>
            </form>
        </div>
    )
}

export default Booking