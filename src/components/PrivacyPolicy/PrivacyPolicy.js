import React from "react";
// import "./userAgreement.css";
import logo from "../images/logo.png";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar">
          <a href="/" className="logo d-flex ">
            <img src={logo} alt="logo" />
          </a>
        </nav>
      </div>

      <section className="userAgreement-section mt-5 mb-5">
        <div className="container">
          <div className="userAgreement-header text-center">
            <h3>Trans23 Privacy Policy</h3>
          </div>
          <div className="privacy-wrapper">
            <h4>Introduction:</h4>
            <ul>
              <li>
                This Privacy Policy applies to all the mobile applications
                ("Apps"), which are owned and operated by Trans23 Pvt. Ltd. Our
                commitment to privacy is reflected in the following policy,
                which outlines how we collect, use, store and share personal
                information from the users of our Apps.
              </li>
            </ul>

            <h4>Information Collection:</h4>
            <ul>
              <li>
                We may automatically store the following information including
                but not limited to: data such as location, mobile phone no,
                email, addresses and other similar information, whether and when
                you update the app, date and time of use, error logs, and other
                similar information about how you use the apps.
              </li>
              <br />
              <li>
                Usage patterns such as the number of clicks, finger movements,
                scrolling, and time spent on the apps.
              </li>

              <li>
                navigation data on the apps such as pages viewed and the order
                of those viewing, date and time of use, session duration, and
                error logs
              </li>
              <li>
                learning data such as content watched or read, total minutes
                watched, and categories of content or learning data you search
                for and Other similar information.
              </li>
              <br />
              <li>We may use third-party providers to log your activity.</li>
            </ul>

            <h4>Information Use:</h4>
            <ul>
              <li>
                We may also collect and store personal information provided by
                you from time to time on the Apps. We may use your personal
                information to provide you with the products and services you
                have requested. We may also use your personal information to
                communicate with you about our products and services, to conduct
                research and analysis, and to improve our Apps and our services.
                We may collect and use such information from you that we
                consider necessary for achieving a seamless, efficient and safe
                experience, customized to your needs including.
              </li>
            </ul>
            <h4>
              We may use your personal information for the following purposes:
            </h4>
            <ul>
              <li>1. provide services.</li>

              <li>2. respond to an individual request.</li>

              <li>3. maintaining contact with clients.</li>
              <li>
                4. keeping clients and others informed of the services we offer and
                industry developments that may be of interest to them,
              </li>
              
              <li>
              and
                notify them of our service offerings.
              </li>
              <li>5. sending you marketing and promotional communications</li>
              <li>
                6. general management and accounting purposes such as invoicing and
                account management
              </li>
              <li>7. providing customer support and services you request</li>
              <li>resolve disputes if any and troubleshooting</li>
              <li>
                8. all other lawful purposes related to our business and in
                furtherance to the fulfilment of a lawful contract
              </li>
              <li>9. compliance with laws</li>
              <li>
               10. Personal information collected by us through the Apps is used
                for the intended purposes stated at the time the information is
                collected or for the purposes specified above.
              </li>
              </ul>
              <h4>Information Sharing:</h4>
              <ul>
              <li>
                Personal Information may be shared with third-party service
                providers who perform services on our behalf, such as vendors
                who assist in managing our services, payment processors, or
                transactional message processors. Additionally, Personal
                Information may be shared with our group companies. These
                third-party service providers and partners will use the
                information we provide in accordance with their respective
                privacy policies, and we take reasonable measures to ensure that
                they are bound by confidentiality agreements to protect Personal
                Information on our behalf.
              </li>
              <br/>
              <li>
                In certain circumstances, we may share Personal Information to
                comply with legal obligations or to safeguard our own interests.
                This may include sharing Personal Information in response to a
                court order or government request from an investigatory body.
                Personal Information may also be shared when investigating
                potentially fraudulent activity. Furthermore, Personal
                Information may be shared with any successor to all or part of
                our business.
              </li>
            </ul>
            <h4>Data Security:</h4>
            <ul>
              <li>
                We use industry-standard security measures to protect your
                personal information from unauthorized access and use. However,
                no method of transmission over the internet or method of
                electronic storage is 100% secure. Therefore, while we strive to
                use commercially acceptable means to protect your personal
                information, we cannot guarantee its absolute security.
              </li>
            </ul>
            <h4>Cookies:</h4>
            <ul>
              <li>
                Cookies are small data files that are placed on your computer or
                mobile device when you visit anApp. We use cookies to enhance
                your user experience and track App usage.
              </li>
              <br/>
              <li>
                We use cookies to gather information and customize your
                experience with our Services. These technologies enable us to
                gain an understanding of your particular App preferences and to
                offer you a more personalized experience in the future. They
                help us recognize your device, store your settings and
                preferences, and provide you with content and advertising that
                align with your interests.
              </li>
              <br/>
              <li>
                Cookies also allow us to perform searches and analytics, as well
                as provide security and administrative functions. As we adopt
                additional technologies, we may also collect information through
                other means.
              </li>
            </ul>
            <h4>Links to Other Websites:</h4>
            <ul>
              <li>
                Our Apps may contain links to other websites or apps. We are not
                responsible for the privacy practices or content of these other
                websites or apps.
              </li>
            </ul>
          </div>
          {/* <div className="privacy-wrapper">
            <ul>
              <li  style={{marginBottom:"9px"}}>1. Once the user creates the profile, the data gets stored it in the Trans23 database.
              </li>
             
              <li  style={{marginBottom:"9px"}}>2. Trans23 will use its database for sending newsletters and marketing items.</li>
          
              <li  style={{marginBottom:"9px"}}>3. Trans23 shall verify the Account by requesting for the one-time password from the User. The User undertakes and agrees that a mobile number can only be used once to create an Account. The User is prohibited from creating multiple Accounts.</li>
       
              <li  style={{marginBottom:"9px"}}>4. Trans23, at all times, reserves the right, to reject or disable an Account in the event of the User’s violation of any Applicable Law or anything done by the User in contravention of this Agreement and including but not limited for any other reason in relation to the safe and secure operation of the Site.</li>
          
            </ul>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
