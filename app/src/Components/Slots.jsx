import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { url } from '../url';

const Slots = () => {
  const navigate = useNavigate();
  const { areaId, slotId } = useParams();
  const [areadata, setareaData] = useState({});
  const [data, setData] = useState({});
  const [selectedSlot, setSelectedSlot] = useState('');
  const [existingReservations, setExistingReservations] = useState([]);

  console.log('slotId', slotId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/slots/${slotId}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };
    fetchData();
  }, [slotId]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/reservedarea/${areaId}`);
        setareaData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [areaId]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`${url}/reservations`);
        setExistingReservations(response.data);
        console.log('existingReservations:', response.data); // Add this line
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };
    fetchReservations();
  }, []);

  console.log('existingReservations', existingReservations);
  console.log('data', data);

  const { area, date, time } = data;
  console.log('area', area);
  console.log('date:', date);
  console.log('time:', time);
  console.log('areaId:', areaId);

  const reservationsInSameSlot = existingReservations.filter(reservation => {
    return (
      reservation.area === area &&
      reservation.areaId === areaId &&
      reservation.date === date &&
      reservation.time === time
    );
  });

  console.log('reservationsInSameSlot', reservationsInSameSlot);


  const space = parseInt(areadata?.space) || 0;
  const slots = Array.from({ length: space }, (_, index) => `Slot ${index + 1}`);

  const slotsStatusTrue = reservationsInSameSlot.filter(reservation => reservation.status === true);
  console.log('Slots with status true:', slotsStatusTrue);


  const handleSlotClick = (slot) => {
    if (existingReservations.some(reservation => reservation.slotno === slot && reservation.area === area)) {
      return;
    }
    setSelectedSlot(selectedSlot === slot ? '' : slot);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    if (selectedSlot && data) {
      console.log('dataaa', { slot: selectedSlot });
      try {
        const response = await axios.put(`${url}/addslot/${slotId}`, { slotno: selectedSlot });
        console.log('Server response:', response.data);
        alert('Slot reserved successfully');
        navigate(`/userpage/reservations/${response.data.userId}`)
      } catch (error) {
        console.error('Error reserving slot:', error);
        alert('Error reserving slot');
      }
    } else {
      alert('No slot selected');
    }
  };

  return (
    <section style={{ marginTop: '150px', marginBottom: '50px' }} className='reserve'>
      <div className='hd2'>Select Your Slot</div>
      <div className='slot container'>
        <div>
          {slots.map((slot, index) => (
            <div
              key={index}
              className={`slots ${selectedSlot === slot ? 'selected' : ''}`}
              onClick={() => handleSlotClick(slot)}
              style={{
                backgroundColor: selectedSlot === slot ? 'green' : slotsStatusTrue.some(reservation => reservation.slotno === slot ) ? 'red' : '',
                cursor: slotsStatusTrue.some(reservation => reservation.slotno === slot ) ? 'not-allowed' : 'pointer',
                opacity: slotsStatusTrue.some(reservation => reservation.slotno === slot ) ? 0.5 : 1
              }}
              disabled={slotsStatusTrue.some(reservation => reservation.slotno === slot)}
            >
              {slot}
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className='btn2' onClick={handleClick}>
          Reserve Your Parking
        </button>
      </div>
    </section>
  );
};

export default Slots;


