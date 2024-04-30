import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserDetails = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        let response = await axios.get('http://localhost:4000/users')
        console.log(response.data);
        setData(response.data)
      } catch (error) {
        console.log('Error fetching data', error);
      }
    }
    fetchdata();
  }, [])

  console.log('jhj', data);


  const handleDelete = async (id) => {
    let response = await axios.delete(`http://localhost:4000/deleteuser/${id}`);
    console.log(response);
    window.location.reload();
  }


  return (
    <>

      <section className='section'>
        {/* <div className='table'>
          {data.length > 0 ? (
            <table>
              <tr>
                <th>User Id</th>
                <th >Name</th>
                <th>Date of Birth</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Usertype</th>
                <th>Action</th>
              </tr>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.dob}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.address}</td>
                  <td>{item.phn}</td>
                  <td>{item.usertype}</td>
                  <td><a href="" onClick={()=>{handleDelete(item._id)}}>Delete</a></td>
                </tr>
              ))}
            </table>
          ) : (
            <div>No Users Found</div>
          )}
        </div> */}

        <div className='tablediv'>
          {data.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">User Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date of Birth</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Usertype</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.dob}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.address}</td>
                    <td>{item.phn}</td>
                    <td>{item.usertype}</td>
                    <td><a href="" onClick={() => { handleDelete(item._id) }}>Delete</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className=' text-center '>No Users Found</div>
          )}
        </div>



      </section>


    </>
  )
}

export default UserDetails


