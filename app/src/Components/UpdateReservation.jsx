import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { url } from '../url';

const UpdateReservation = () => {
    const [data, setData] = useState({});
    const [area, setArea] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/userreservation/${id}`);
                setData(response.data);
                const areaResponse = await axios.get(`${url}/allarea`);
                setArea(areaResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'date') {
            // No need to reverse the date format when updating the state
            setData({ ...data, [name]: value });
        } else {
            setData({ ...data, [name]: value });
        }

        if (name === 'hours') {
            const selectedArea = area.find((item) => item.area === data.area);
            if (selectedArea) {
                const totalCost = calculateCost(value, selectedArea.cost);
                setData({ ...data, totalcost: totalCost });
            }
        }
    };


    const calculateCost = (hours, costPerHour) => {
        const parsedHours = parseInt(hours);
        const totalCost = parsedHours * costPerHour;
        return totalCost;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Format the date before sending it to the server
            const formattedDate = data.date.split('-').reverse().join('-');

            const selectedArea = area.find((item) => item.area === data.area);
            if (selectedArea) {
                const response = await axios.put(`${url}/updatereservation/${id}`, {
                    ...data,
                    date: formattedDate // Use the formatted date
                });
                if (response.data) {
                    console.log('Updated slot:', response.data);
                    navigate(`/userpage/updateslot/${selectedArea._id}/${response.data._id}`);
                }
            }
            // alert('Updated Successfully');
        } catch (error) {
            console.log('Updation failed', error);
        }
    };


    return (
        <>
            <section style={{ marginTop: '150px' }} className='reserve'>
                <div>
                    <h1>Update Reservation</h1>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='data'>
                                <div>
                                    <label htmlFor='area'>Location</label>
                                    <select name='area' id='' value={data.area || ''} onChange={handleChange}>
                                        <option value=''>-select-</option>
                                        {area.map((item) => (
                                            <option key={item._id} value={item.area}>
                                                {item.area}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className='d-flex flex-column'>
                                    <label htmlFor='date'>Parking Date</label>
                                    <input type='date' name='date' id='' value={data.date || ''} onChange={handleChange} />
                                </div>

                                <div className='d-flex flex-column'>
                                    <label htmlFor='time'>Parking Time</label>
                                    <input type='time' name='time' id='' value={data.time || ''} onChange={handleChange} />
                                </div>

                                <div>
                                    <label htmlFor='hours'>Parking Hours</label>
                                    <select name='hours' id='' value={data.hours || ''} onChange={handleChange}>
                                        <option value=''>-select-</option>
                                        <option value='1hrs'>1hrs</option>
                                        <option value='2hrs'>2hrs</option>
                                        <option value='3hrs'>3hrs</option>
                                        <option value='4hrs'>4hrs</option>
                                        <option value='5hrs'>5hrs</option>
                                        <option value='6hrs'>6hrs</option>
                                        <option value='7hrs'>7hrs</option>
                                        <option value='8hrs'>8hrs</option>
                                        <option value='9hrs'>9hrs</option>
                                        <option value='10hrs'>10hrs</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor='slotno'>Parking Slot</label>
                                    <input type='text' name='slotno' id='' value={data.slotno || ''} onChange={handleChange} />
                                </div>

                                <div>
                                    <button className='btn p-1' type='submit'>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UpdateReservation;
