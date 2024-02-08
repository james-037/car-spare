// DetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
  const { itemcode } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => { 
    const fetchDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4133/api/getItemDetails/${itemcode}`);
        const data = await response.json();

        setDetails(data[0]);
        console.log('Details :', data);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchDetails();
  }, [itemcode]);

  return (
    <div>
    
      <div>{details.SHORTNAME}</div>
      <div>{details.ITEM_NAME}</div>
      <div>{details.PART_NO}</div>
      <div>{details.RMRP}</div>
    </div>
  );
};

export default ItemDetails;



