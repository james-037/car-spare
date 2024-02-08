// DetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const DetailsPage = () => {
  const { vehCode } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => { console.log(vehCode);
    const fetchDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4133/api/getDetails/${vehCode}`);
        const data = await response.json();

        setDetails(data);
        console.log('Details:', data);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchDetails();
  }, [vehCode]);

  return (
    <div>
      
      <table className="table">
        <thead>
          <tr>
          <th scope="col">Image</th>
            <th scope="col">Item Name</th>
            <th scope="col">Part No</th>
            <th scope='col'>MRP</th>
          </tr>
        </thead>
        <tbody>{Array.isArray(details) &&
            details.map((detail, index) => (
            
              <tr key={index}> 
              <Link to={`/itemdetails/${detail.ITEM_CODE.trim()}`}>
                <td>{detail.SHORTNAME}</td>
                </Link>
                <td>{detail.ITEM_NAME}</td>
            <td>{detail.PART_NO}</td>
            <td>{detail.MRP}</td>
                
              </tr>
             
            ))}
        
        </tbody>
      </table>
    </div>
  );
};

export default DetailsPage;



