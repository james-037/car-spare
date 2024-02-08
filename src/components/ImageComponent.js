// ImageComponent.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ImageComponent = () => {
  const [carData, setCarData] = useState([]);
 

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch('http://localhost:4133/api/getCarData');
        const data = await response.json();

        setCarData(data);
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
            <th scope="col">Car Image</th>
            <th scope="col">Model Name</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(carData) &&
            carData.map((car, index) => (
            
              <tr key={index}>
                
                <td>
                  {car.base64Image && (
                    <Link to={`/category/${car.VEH_CODE.trim()}`}>
                      <img
                        src={`data:image/jpeg;base64,${car.base64Image}`}
                        alt={car.EVEH_NAME}
                        style={{ maxWidth: '100px' }}
                      />
                      </Link>
                  )}
                </td>
                <td><Link to={`/category/${car.VEH_CODE.trim()}`}>{car.EVEH_NAME} </Link></td>
              </tr>
             
            ))}
      </tbody>
    </table>
    
    </div >
  );
};

export default ImageComponent;



































































































/*import React, { useState, useEffect } from 'react';

const ImageComponent = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch('http://localhost:4134/api/getCarData');
        const data = await response.json();

        setCarData(data);

        // Log car data to the console
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
            <th scope="col">Car Image</th>
            <th scope="col">Model Name</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(carData) &&
            carData.map((car, index) => (
              <tr key={index}>
                <td>
                  {car.base64Image && (
                    <img src={`data:image/jpeg;base64,${car.base64Image}`} alt={car.EVEH_NAME} style={{ maxWidth: '100px' }} />
                  )}
                </td>
                <td>{car.EVEH_NAME}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImageComponent; */




































































































/*import React, { useState, useEffect } from 'react';

const ImageComponent = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch('http://localhost:4134/api/getCarData');
        const data = await response.json();

        const updatedData = await Promise.all(
          data.map(async (record) => {
            if (record.VEHIMAGE) {
              const base64Image = await convertBlobToBase64(record.VEHIMAGE);
              return { ...record, base64Image };
            }
            return record;
          })
        );

        setCarData(updatedData);

        console.log('Car Data:', updatedData);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCarData();
  }, []);

  const convertBlobToBase64 = (blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(new Blob([blob], { type: 'image/jpeg' }));
    });
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Car Image</th>
            <th scope="col">Model Name</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(carData) &&
            carData.map((car, index) => (
              <tr key={index}>
                <td>
                  {car.base64Image && (
                    <img src={car.base64Image} alt=" " style={{ maxWidth: '100px' }} />
                  )}
                </td>
                <td>{car.EVEH_NAME}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImageComponent; */




























/*import React, { useState, useEffect } from 'react';

const ImageComponent = () => {
  const [imageData, setImageData] = useState('');

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await fetch('http://localhost:4134/api/getImage');
        const data = await response.arrayBuffer();
        const base64Image = btoa(new Uint8Array(data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        setImageData(base64Image);

        // Log base64Image to the console
        console.log('Base64 Image:', base64Image);

      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };

    fetchImageData();
  }, []);

  return (
    <div>
      {imageData && <img src={`data:image/jpeg;base64,${imageData}`} alt=" " />}
    </div>
  );
};

export default ImageComponent; */
