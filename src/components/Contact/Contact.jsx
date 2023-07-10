import React, { useEffect } from 'react';
import { ContactListRequest } from '../../APIRequests/portfolioAPIRequest';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { BsFacebook, BsLinkedin } from 'react-icons/bs'


const Contact = () => {
    useEffect(() => {
        ContactListRequest()
    }, [])

    const ContactList = useSelector((state) => state.portfolio.ContactList)

    return (
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                {
                    ContactList.map((item, i) =>
                        <div className='col-lg-5' style={{ marginTop: "100px", marginLeft: "50px" }}>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='text-center h4 text-muted' style={{ fontStyle: 'italic', fontFamily: 'sans-serif', fontWeight: 'bolder' }}><span className='h1'>Contact</span></Card.Title>
                                    <Card.Text>
                                        <input type='text' value={item.name} readOnly={true} className='form-control p-2 mb-3 mt-3'></input>
                                        <input type='text' value={item.email} readOnly={true} className='form-control p-2 mb-3'></input>
                                        <input type='text' value={item.mobile} readOnly={true} className='form-control p-2 mb-3'></input>
                                        <input type='text' value={item.address} readOnly={true} className='form-control p-2 mb-3'></input>
                                    </Card.Text>
                                    <Card.Link href="https://www.facebook.com/profile.php?id=100015396331719" target='_blank'>
                                        <BsFacebook size={25}></BsFacebook>
                                    </Card.Link>

                                    <Card.Link href="https://www.linkedin.com/in/abdur-rahim-729780256/" target='_blank'>
                                        <BsLinkedin size={25}></BsLinkedin>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Contact;