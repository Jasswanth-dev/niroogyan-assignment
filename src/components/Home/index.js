
import {useState, useEffect} from 'react'
import DoctorItem from "../DoctorItem"
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

const Home = () => {
    const [search, setSearch] = useState('')
    const [doctors,setDoctors] = useState(doctorsList)

    useEffect(() => {
        const newDoctors = doctorsList.filter(each => each.name.includes(search) || each.specialisation.includes(search))
        setDoctors(newDoctors)
    },[search,doctors])
    return (
        <div className='bg-container'>
            <label htmlFor='search'>
                Search
            </label>
            <input type='search' value={search} onChange={(e) => setSearch(e.target.value)}/>
            <ul>
                {doctors.map(each => <DoctorItem key={each.id} data={each}/>)}
            </ul>
        </div>
    )
}

export default Home;