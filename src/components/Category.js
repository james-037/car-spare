import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Category =() =>{
    const [catData, setCatData] = useState([]);
    const { vehCode } = useParams();
    useEffect(() => {
        const fetchCarData = async () => {
          try {
            const response = await fetch(`http://localhost:4133/api/getCatData/${vehCode}`);
            const data = await response.json();
    
            setCatData(data);
            console.log('Car Data:', data);
          } catch (error) {
            console.error('Error fetching car data:', error);
          }
        };
    
        fetchCarData();
      }, []);

      return (
        <div>
        <table className="table">
            <thead>
              <tr>
                <th scope="col">Part Category</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(catData) &&
                catData.map((car, index) => (
                
                  <tr key={index}>
                    
                    <td>
                      {car.Part_image && (
                        <Link to={`/details/${vehCode}`}>
                          <img
                            src={`data:image/jpeg;base64,${car.Part_image}`}
                            alt={car.EVEH_NAME}
                            style={{ maxWidth: '100px' }}
                          />
                          </Link>
                      )}
                    </td>
                    <td><Link to={`/details/${vehCode}`}>{car.EVEH_NAME} </Link></td>
                  </tr>
                 
                ))}
          </tbody>
        </table>
        </div >
      );
    };

export default Category;

