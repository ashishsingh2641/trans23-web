import React from "react";
// import "./AppsuserAgreement.css";

const AppsUserAgreement = () => {
  return (
    <>


      <section className="userAgreement-section mt-5 mb-5">
        <div className="container">
          <div className="userAgreement-header text-center">
            <h3>User-Agreement</h3>
          </div>
          <div className="privacy-wrapper">
            <h4>Personal Information:</h4>
            <ul>
              <li>
                Once the user creates the profile, it stores it in the Trans23
                database.
              </li>
              <li>
                Trans23 will use its database for sending newsletters and
                marketing items.
              </li>
            </ul>

            <h4>Booking:</h4>
            <ul>
              <li>
                The user has to make the booking by paying the initial amount
                within a week of submitting the quotation.
              </li>
              <li>
                No money will be cancelled once the user makes the booking.
              </li>
              <li>Any additional package will be charged extra</li>
              <li>
                Any item marked as a free transition by Trans23 will be counted
                as unclaimed if broken and damaged during transition.
              </li>
              <li>Customers should check the items at the time of booking.</li>
            </ul>
            <h3>Inspection:</h3>
            <h4>Vehicle:</h4>
            <ul>
              <li>The customer should inform the vehicle's condition.</li>
              <li>
                Trans23 will not check the vehicle's performance and will not be
                responsible for any malfunction during the transition.
              </li>
              <li>Trans23 will not consider any hairline scratches.</li>
              <li>
                Trans23 will mention the total KM that will run during the
                transition. The cost of Trip 1 and Trip 2 will be at the
                client's scope. Trip 1 – Booking location to a hub. Trip 2 –
                Warehouse/parking area to the delivery point.
              </li>
              <li>
                The vehicle has to be either in the name of the sender or the
                receiver's name. The client has to submit the RC copy, PUC,
                Insurance, and valid identity proof of the vehicle owner.
              </li>
              <li>
                Any document is missing during the inspection, Trans23 will not
                be responsible for the loss or any damage to the vehicle.
              </li>
            </ul>
            <h4>Fragile item</h4>
            <ul>
              <li>
                The client has to identify the fragile item at the time of
                inspection.
              </li>
              <li>The client has to mention the cost of a fragile item.</li>
              <li>
                If the client wants to claim damage to any item during the
                transition, then the client has to mention it during inspection.
                Otherwise, the claim will not be granted.
              </li>
              <li>
                Any fragile item below Rs.50 will be counted as unclaimed if
                broken and damaged during transition.
              </li>
              <li>Household Item:</li>
              <li>
                Any household item with accessories has to be identified and
                notified to us during the booking.
              </li>
              <li>
                Any accessories of the household item that is missing at the
                delivery point have to be mentioned in the booking document for
                claiming.
              </li>
            </ul>
            <h4>Timing</h4>
            <ul>
              <li>
                Trans23 can reschedule anytime in case of any unavoidable
                circumstances.
              </li>
              <li>
                Any changes in time will be chargeable and per the condition.
                Trans23 will provide the charges with all the terms and
                conditions in one working day.
              </li>
              <li>
                Any halt due to a client is chargeable with a breakup made by
                Trans23. Because, Trans23 incurs extra costs for the driver,
                warehouse, and other facilities because of unscheduled halt.
              </li>
              <li>
                After booking, Trans23 will pick up the parcel within 24 hrs.
              </li>
              <li>
                Customer extends any tenure will be charged separately at the
                time of an extension.
              </li>
            </ul>
            <h4>Warehouse:</h4>
            <ul>
              <li>
                The client using a warehouse shall share the delivery point in
                the booking agreement.
              </li>
              <li>
                If the client wants to extend the timeline, then the client has
                to inform us in advance in two days. Otherwise, Trans23 will
                deliver automatically at the end of the tenure.
              </li>
              <li>
                Trans23 will decide on inside arrangements in the warehouse.
              </li>
            </ul>
            <h4>Damage:</h4>
            <ul>
              <li>
                Trans23 recommends their client have insurance during booking.
              </li>
              <li>
                Any consignment without insurance will follow the booking
                agreement for the damage settlement.
              </li>
              <li>
                Trans23 will register a claim within 12hrs after delivery.
              </li>
            </ul>
            <h4>Claim:</h4>
            <ul>
              <li>
                Customers cannot claim the performance of the vehicle comparing
                after-before conditions.
              </li>
              <li>
                Trans 23 is not liable for any Vehicle without incomplete
                documents.
              </li>
              <li>
                Free delivery is complementary to the Trans23 client. So, we
                consider the particular consignment as no claim against damage.
              </li>
              <li>
                Trans23 settles a claim within five working days if any item
                misplaces or lost in the warehouse.
              </li>
              <li>
                We will count free-of-cost transportation if the current
                valuation of the item goes less than equal to rs.50.
              </li>
              <li>
                The client has to claim their damage within 24 hrs after
                delivery. After 24 hrs, Trans23 will decide on the claim
                settlement.
              </li>
              <li>
                Settlement against damage more than the value of INR 10,000.00
                will only be made through insurance only. Without insurance,
                Trans23 will consider INR10000 as the value of the consignment.
                The booking agreement will decide the claim amount.
              </li>
            </ul>
            <h4>Insurance</h4>
            <ul>
              <li>
                Trans23 will only assist their client for their insurance claim.
                However, it is the responsibility of insurance company to
                deliver the needful to their client.
              </li>
              <li>Any claim shall proceed as per insurance guidelines.</li>
              <li>
                Insurance is must for transporting vehicle. Therefore claim
                shall not be granted without insurance.
              </li>
            </ul>
          </div>
             {/* <div className="privacy-wrapper" >
            <ul>
              <li style={{marginBottom:"9px"}}>1. The user has to make the booking by paying the initial amount within a week of submitting the quotation. </li>
            
              <li style={{marginBottom:"9px"}}>2. Booking amount can be refundable only before 24 hrs of the actual scheduled timing.</li>
           
              <li style={{marginBottom:"9px"}}>3. Any additional package will be charged extra</li>
            
              <li style={{marginBottom:"9px"}}>4. Any item marked as a free transition by Trans23 will be counted as unclaimed if broken and damaged during transition.
              </li>
              <li style={{marginBottom:"9px"}}>5. Customers should check the items at the time of booking. </li>
              <li style={{marginBottom:"9px"}}>6. To ensure smooth provision of the service, the Users are required to intimate Trans23 in advance if the vehicle of Trans23 can enter the premises/lane of the User, the distance between the vehicle of Trans23 and the lift/house gate, as the case may be, and the maximum time the vehicle can be retained inside the premises.
              </li>
              <li style={{marginBottom:"9px"}}>7. The packing materials used by Trans23 is the property of Trans23 and will be taken back on the same day of unloading, otherwise, rent will be charged as our Policy.
              </li>
              <li style={{marginBottom:"9px"}}>8. The fees quoted by Trans23 is subject to various factors and hence a slot is booked in advance. The fees quoted by Trans23 may change if the movement date/inventory/distance is changed after confirmation of payment. In this regard, a revised quotation will be offered as per the change in price if necessary.</li>
              <li style={{marginBottom:"9px"}}>9. The fees charged by Trans23 for the provision of the Service shall not include (i) any dismantling (carpenter work) and fittings of electrical, electronic appliances; (ii) any Mathadi (Union Labour & related) charges; and (iii) any arranging work which includes pipes, gas filling, extra wire, fittings associated etc. Additionally, materials have to be purchased separately for such mantle and dismantle work which is not part of the fees quotes by Trans23 and have to be borne by the User.
              </li>
              <li style={{marginBottom:"9px"}}>10. Where due to unforeseen circumstances, it is not reasonably practicable for either party to undertake the service, the liability, if any, in such a situation shall be limited to the token amount paid by the User for the service. Where the User cancels the service after the Trans23 reaches the pickup location, the transportation charges will be borne by the User, however, the token amount shall be fully refundable on shifting cancellation up to 1 day before the provision of the service.</li>
            </ul>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default AppsUserAgreement;
