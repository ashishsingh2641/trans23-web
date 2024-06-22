import React, { useEffect } from 'react'
// import './Subscription.css'
import './SubscriptionTwo.css'
import axios from 'axios'; 
import { v4 as uuidv4 } from 'uuid';
import SubsNubbar from './SubsNubbar';
import { useFormData } from '../../Context/FormDataContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 

import { useLocation } from 'react-router-dom';



const Subscription = () => {

  const { formData } = useFormData();

  const location = useLocation();

   // Parse the query parameters from the location search
   const queryParams = new URLSearchParams(location.search);
   const testParam = queryParams.get('test');
   const transactionIdParam = queryParams.get('transactionId');
 
   console.log('test query param:', testParam);
   console.log('transactionId query param:', transactionIdParam);
   const navigate = useNavigate();
   useEffect(() => {
    if (testParam && transactionIdParam) {
      const apiUrl = `http://localhost:7070/api/subscription/check-status?test=${testParam}&transactionId=${transactionIdParam}`;

      axios
        .get(apiUrl)
        .then((response) => {
          if (response.data.success) {
            // Display a success alert if the response indicates success
            Swal.fire({
              icon: 'success',
              title: 'Payment Successful',
              text: 'Your payment is successful.',
            });

            navigate('/');
          } else {
            // Handle other cases here if needed
            console.log('Payment not successful:', response.data.message);
          }
        })
        .catch((error) => {
          console.error('Error making GET request:', error);
        });
    }
  }, [testParam, transactionIdParam]);

  console.log('form data form subscription', formData)


  const handleClick = (e) => {
    // Extract the package amount from the clicked button's parent element
    const packageAmount = e.target.closest('.SupCard').querySelector('.pricepackage').textContent;

    // Remove the "$" sign and spaces to get the numeric amount
    const amount = parseInt(packageAmount.replace(/\$|,/g, ''), 10);

    // Generate a random transaction ID with 15 characters
    const transactionId = uuidv4().substring(0, 15);

    // Create the data object to send in the POST request
    const postData = {
      amount: amount,
      transection_id: transactionId,
      test: true,
    };

    // Make the POST request
    axios.post('http://localhost:7070/api/subscription/pay', postData)
      .then((response) => {
        // Handle the response if needed
        console.log('POST request successful:', response.data);

            // Check if the response contains a success flag
            if (response.data.success && response.data.redirect_url) {
              // Open the payment URL in a new browser window or tab
              window.open(response.data.redirect_url, '_self');
            }
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error making POST request:', error);
      });
  };

    
    return (
        <>
        <SubsNubbar></SubsNubbar>
      <div id='subscription'>
        <div className='wraper'>

            {/* card one  */}
            <div className='SupCard movers'>
                <h3 className='packagename'>Movers & Packers</h3>
                <h1 className="pricepackage">$ 12000</h1>
                <ul style={{paddingLeft:0}}>
                    <li>Professional Team</li>
                    <li>Comprehensive Packing</li>
                    <li>Safe Transportation</li>
                    <li>Local and Long-Distance</li>
                </ul>
                <button onClick={handleClick} className="subButton">Purchase</button>
            </div>

                  {/* card two  */}
                  <div className='SupCard storage'>
                <h3 className='packagename'>Storage</h3>
                <h1 className="pricepackage">$ 40000</h1>
                <ul style={{paddingLeft:0}}>
                    <li>Luxurious Solutions</li>
                    <li>Customizable Spaces</li>
                    <li>Secure and Private</li>
                    <li>VIP Access</li>
                </ul>
                <button onClick={handleClick} className="subButton">Purchase</button>
            </div>

                  {/* card three  */}
                  <div className='SupCard courier'>
                <h3 className='packagename'>Courier</h3>
                <h1 className="pricepackage">$ 82000</h1>
                <ul style={{paddingLeft:0}}>
                    <li>Express Delivery</li>
                    <li>Nationwide Coverage</li>
                    <li>Secure Handling</li>
                    <li>Nationwide Coverage</li>
                </ul>
                <button onClick={handleClick} className="subButton">Purchase</button>
            </div>
                  {/* card four  */}
                  <div className='SupCard movers'>
                <h3 className='packagename'>Vehicle Transport</h3>
                <h1 className="pricepackage">$ 879000</h1>
                <ul style={{paddingLeft:0}}>
                    <li>Safe and Secure Transport</li>
                    <li>Door-to-Door Service</li>
                    <li>Open Transport Solutions</li>
                    <li>Experienced Drivers</li>
                </ul>
                <button onClick={handleClick} className="subButton">Purchase</button>
            </div>

        </div>
      </div>
      </>
    )
}

export default Subscription