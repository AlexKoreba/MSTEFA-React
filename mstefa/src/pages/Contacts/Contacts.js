import "./Contacts.css";

const Contacts = () => {
    return ( 
        <main className="contacts">
            <div className="container">
                <div className="contacts-wrapper">

                    <h4 className="contacts-title">Contacts</h4>

                    <section className="contacts-content">
    
                        <div className="contacts-info">
                            <h5 className="contacts-info-title">Online store</h5>
                            <div className="contacts-info-main">
                                <p className="working-number">
                                    <span className="working-number-title">Phone: </span>
                                    <span className="working-number-content">+375 44 707-40-54</span>
                                </p>
                                <p className="working-hours">
                                    <span className="working-hours-title">Working hours: </span>
                                    <span className="working-hours-content">Mon-Sun from 9:00 to 21:00</span>
                                </p>
                            </div>
    
                            <div className="contacts-info-social">
                                <p className="working-email">
                                    <span className="working-email-title">E-mail: </span>
                                    <a href="https://www.google.com/intl/en/gmail/about/" className="working-email-link" title="Our Email" target="_blank" rel="noreferrer">info@mstefa.com</a>
                                </p>
                                <p className="working-whatsup">
                                    <span className="working-whatsup-title">Write to us at </span>
                                    <a href="https://api.whatsapp.com/send/?phone=375447074054&text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%2C+&type=phone_number&app_absent=0" className="working-whatsup-link" title="Our WhatsUp" target="_blank" rel="noreferrer">WhatsUp</a>
                                </p>
                                <div className="working-another">
                                    <span className="working-another-title">Also you can contact us:</span>
                                    <p>
                                        <span>in direct message in </span>
                                        <a href="https://www.instagram.com/mstefa.brand/?igshid=cci57jwlm06m" className="working-instagram-title" title="Our Instagram" target="_blank" rel="noreferrer">Instagram</a><br />
                                        <span>or in </span>
                                        <a href="https://telegram.me/anne_de_biscuits" className="working-telegram-title" title="Our Telegram" target="_blank" rel="noreferrer">Telegram</a>
                                    </p>
                                </div>
                            </div>
    
                            <div className="contacts-info-details">
                                <h6 className="contacts-info-details-title">Details of the company</h6>
                                <span className="contacts-info-details-content">Individual Entrepreneur (IP) Stepchenko Maria Nikolaevna<br />Payer's Registration Number (UNP) 491494260<br />BY97ALFA30132565530010270000<br />CJSC (ZAO) &laquo;Alfa Bank&raquo;<br />ALFABY2X</span>
                            </div>
                        </div>
    
                        <div className="contacts-img">
                            <div className="img-wrapper" title="MSTEFA Family"></div>
                        </div>
                    </section>
    
                    <h4 className="contacts-title">we are on the map</h4>
    
                    <div className="contacts-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.0830385029209!2d31.00192388816633!3d52.43689759873119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d469ceccf93d57%3A0xe0add4e8deeb726f!2z0YPQuy4g0JrQuNGA0L7QstCwIDU5QSwg0JPQvtC80LXQu9GM!5e0!3m2!1sru!2sby!4v1667154623907!5m2!1sru!2sby" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="iframe"></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
};
 
export default Contacts;