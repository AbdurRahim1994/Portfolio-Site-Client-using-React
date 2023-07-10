import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { ReferenceListRequest } from '../../APIRequests/portfolioAPIRequest';
import { useSelector } from 'react-redux';


const Reference = () => {
    useEffect(() => {
        ReferenceListRequest();
    }, [])

    const ReferenceList = useSelector((state) => state.portfolio.ReferenceList);

    return (
        <div className='container-fluid' style={{ marginLeft: "300px", marginTop: "80px" }}>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className='row'>
                        {
                            ReferenceList.map((item, i) =>
                                <div className='col-lg-6'>
                                    <Card border="dark" style={{ width: '18rem' }}>
                                        <Card.Header className='text-center h4 text-muted' style={{ fontStyle: 'italic', fontFamily: 'sans-serif', fontWeight: 'bolder' }}>Reference</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                <p><span className='h6'>Name :</span> {item.name}</p>
                                                <p><span className='h6'>Organization :</span> {item.organization}</p>
                                                <p><span className='h6'>Designation :</span> {item.designation}</p>
                                                <p><span className='h6'>Address :</span> {item.address}</p>
                                                <p><span className='h6'>Mobile :</span> {item.mobile}</p>
                                                <p><span className='h6'>Email :</span> {item.email}</p>
                                                <p><span className='h6'>Relation :</span> {item.relation}</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reference;