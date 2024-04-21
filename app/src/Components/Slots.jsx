import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Slots = () => {

  const navigate = useNavigate();
  const { areaId, slotId } = useParams();
  const [areadata, setareaData] = useState([]);
  const [data, setData] = useState([])
  const [selectedSlot, setSelectedSlot] = useState([]);
  console.log('areaid', areaId);
  console.log('slotid', slotId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/slots/${slotId}`);
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
        const response = await axios.get(`http://localhost:4000/reservedarea/${areaId}`);
        setareaData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [areaId]);

  const space = parseInt(areadata?.space) || 0;
  const slots = Array.from({ length: space }, (_, index) => `Slot ${index + 1}`);

  const handleSlotClick = (slot) => {
    setSelectedSlot(selectedSlot === slot ? null : slot);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    if (selectedSlot && data) {
      const updatedData = { ...data, slot: selectedSlot };
      console.log('dataaa', { slot: selectedSlot });
      try {
        const response = await axios.put(`http://localhost:4000/addslot/${slotId}`, { slotno: selectedSlot });
        console.log('Server response:', response.data);
        alert('Slot reserved successfully');
        navigate(`/userpage/reservations/${response.data._id}`)
      } catch (error) {
        console.error('Error reserving slot:', error);
        alert('Error reserving slot');
      }
    } else {
      alert('No slot selected');
    }
  };

  console.log('Selected Slot:', selectedSlot);
  console.log('Reserved Slot:', data);
  console.log('Reserved Area:', areadata);



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
                backgroundColor: selectedSlot === slot ? 'green' : data.slot === slot ? 'red' : '',
              }}
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
