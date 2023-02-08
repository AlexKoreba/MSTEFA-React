import "./Useful.css";

const Useful = () => {
    return ( 
        <main className="useful">
            <div className="container">
                <div className="useful-wrapper">

                    <h4 className="usuful-title">Delivery and pay</h4>

                    <div className="delivery-options">

                        <h3>We offer 3 delivery options:</h3>

                        <ul>
                            <li>Free delivery by courier in Belarus. Delivery time: 1-2 working days (if the product is in stock).</li>
                            <li>Delivery by the CDEK delivery service across the territory of Russia, Kazakhstan, Armenia and Kyrgyzstan is carried out at the expense of the Buyer within 5 to 20 days following the day the payment for the order is received on the Seller's account.</li>
                            <li>Courier delivery to anywhere in the world. Delivery time: up to 14 working days.</li>
                        </ul>

                        <p>
                            <strong>
                                Sending the order is carried out depending on the load, but no later than 3 days from the date of payment.<br /> 
                                In other cases, we will contact you to clarify the terms of dispatch.
                            </strong>
                        </p>

                        <p>
                            Delivery is carried out by courier to the door from 10:00 to 21:00 (Mon-Sat).<br />
                            The courier will contact you.<br />
                            When placing an order, you can choose the delivery interval: (10:00 - 17:00, 18:00 - 21:00).<br />
                            In case of cancellation of the purchase, the shipping cost is deducted from the buyer.
                        </p>

                    </div>

                    <div className="delivery-cost">

                        <h3>Shipping cost:</h3>

                        <ul>
                            <li>Free delivery by courier in Belarus.</li>
                            <li>Delivery by CDEK delivery service to the CIS countries &ndash; 25-40 BYN.</li>
                            <li>Delivery to another part of the world &ndash; 60 BYN.</li>
                        </ul>

                        <p>
                            <strong>
                                The shipping method and cost will be automatically selected when you enter a shipping address.<br />
                                Delivery times may vary due to reasons beyond our control.
                            </strong>
                        </p>
                    </div>

                    <div className="pay-options">

                        <h3>Pay options:</h3>

                        <p>
                            Bank card via the Internet.<br />
                            After clicking the &laquo;Buy&raquo; button, you will be redirected to a special secure payment page of the processing system.<br />
                            The payment page will show the order number and payment amount. To pay, you need to enter your card details and confirm the payment by clicking the &laquo;Pay&raquo; button.<br />
                            If your card supports 3-D Secure technology, your system will prompt you to go through the standard one-minute cardholder verification procedure on the page of your bank (the bank that issued your card).<br />
                            Please note that after the payment is made, a confirmation of payment will be sent to the email address you specified. Please save your payment details.<br />
                            We accept payments with the following bank cards: <strong>Visa</strong>, <strong>Visa Electron</strong>, <strong>MasterCard</strong>, <strong>Maestro</strong>, <strong>Belkart</strong>, <strong>Apple Pay</strong>, <strong>Samsung Pay</strong>.
                        </p>
                    </div>

                    <div className="pay-security">

                        <h3>Security of remote payments</h3>

                        <ol>
                            <span>All aggregators and payment systems strictly monitor the security of transactions. Most payment services use a combination of several technologies in order to protect customers' funds as much as possible. The most popular are:</span>
    
                            <li>
                                <strong>Verified by Visa.</strong>
                                <span>This is a technology that ensures the reliability of payments in online stores. When making a purchase, the buyer is redirected to the website of the bank that issued the card. The user needs to enter a special code or password that was given to him when connecting to the Verified by Visa service.</span>
                            </li>
    
                            <li>
                                <strong>MasterCard SecureCode.</strong>
                                <span>This technology is similar to the one offered by Visa. The buyer needs to enter a secret password that allows you to authenticate the bank's client and make a payment.</span>
                            </li>
    
                            <li>
                                <strong>PCI DSS.</strong>
                                <span>This is a certificate that all structures working with payment cards must receive. The PCI DSS standard describes the requirements that apply to data protection. The standard strictly regulates the rules for the development of payment systems, infrastructure operation and other aspects. Most often, large online stores undergo certification, since this procedure costs about 20 thousand euros.</span>
                            </li>
                        </ol>
                    </div>

                    <div className="production">

                        <h3>Production:</h3>

                        <p>Belarus, Gomel, Golovatskogo street, 19</p>

                        <p>There is no warranty period.</p>

                    </div>     
                </div>
            </div>
        </main>
    );
};
 
export default Useful;