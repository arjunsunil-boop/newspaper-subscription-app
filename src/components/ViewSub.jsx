import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewSub = () => {

    const [subscribers, setSubscribers] = useState([

        { "id": "1", "name": "Mark", "date": "12/12/2021" },
        { "id": "2", "name": "John", "date": "12/12/2021" },
        { "id": "3", "name": "Doe", "date": "12/12/2021" },
        { "id": "4", "name": "Smith", "date": "12/12/2021" },
        { "id": "5", "name": "Doe", "date": "12/12/2021" },
        { "id": "6", "name": "Smith", "date": "12/12/2021" },
        { "id": "7", "name": "Doe", "date": "12/12/2021" },
        { "id": "8", "name": "Smith", "date": "12/12/2021" },
        { "id": "9", "name": "Doe", "date": "12/12/2021" },
        { "id": "10", "name": "Smith", "date": "12/12/2021" }
        
    ])


    return (
        <div>
            <Navbar/>

            <div className="container">
                <br /><br />
                <h2 id="topnews">View Subscribers</h2>
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br /><br />

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Subscriber Name</th>
                                    <th scope="col">Member since</th>
                                    
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    subscribers.map(
                                        (value)=>{
                                            return(
                                                <tr>
                                                    <th scope="row">{value.id}</th>
                                                    <td>{value.name}</td>
                                                    <td>{value.date}</td>
                                                </tr>
                                            )
                                        }
                                    )
                                }

                            </tbody>
                        </table>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewSub