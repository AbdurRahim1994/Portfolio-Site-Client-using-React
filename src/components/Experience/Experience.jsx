import React, { useEffect } from 'react';
import { ExperienceListRequest } from '../../APIRequests/portfolioAPIRequest';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

const Experience = () => {
    useEffect(() => {
        ExperienceListRequest()
    }, [])

    const ExperienceList = useSelector((state) => state.portfolio.ExperienceList)

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='row'>
                        {
                            ExperienceList.map((item, i) =>
                                <div className='col-lg-4 mt-5'>
                                    <Card border="dark" style={{ width: '18rem' }}>
                                        <Card.Header className='text-center h4 text-muted' style={{ fontStyle: 'italic', fontFamily: 'sans-serif', fontWeight: 'bolder' }}>Experience</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                <p><span className='h6'>Position :</span> {item.position}</p>
                                                <p><span className='h6'>Company :</span> {item.company}</p>
                                                <p><span className='h6'>Address :</span> {item.address}</p>
                                                <p><span className='h6'>Duration :</span></p>
                                                <p><span className='h6'>Start :</span> {moment(item.startDate).format("MMMM DD YYYY")}</p>
                                                <p><span className='h6'>End :</span> {moment(item.endDate).format("MMMM DD YYYY")}</p>
                                                <p><span className='h6 text-center'>Responsibilities :</span></p>
                                                {
                                                    item.responsibilities.map((res, i) =>
                                                        <ol start={i + 1}>
                                                            <li>{res}</li>
                                                        </ol>
                                                    )
                                                }
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

export default Experience;