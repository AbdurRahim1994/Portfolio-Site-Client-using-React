import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { TrainingListRequest } from '../../APIRequests/portfolioAPIRequest';
import { useSelector } from 'react-redux';
import moment from 'moment/moment';
import { calcDate, yearDiff } from '../../helpers/DateConversion';

const Training = () => {
    useEffect(() => {
        TrainingListRequest()
    }, [])

    const TrainingList = useSelector((state) => state.portfolio.TrainingList)

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='row'>
                        {
                            TrainingList.map((item, i) =>
                                <div className='col-lg-4 mt-5'>
                                    <Card border="dark" style={{ width: '18rem' }}>
                                        <Card.Header className='text-center h4 text-muted' style={{ fontStyle: 'italic', fontFamily: 'sans-serif', fontWeight: 'bolder' }}>Training</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                <p><span className='h6'>Certification :</span> {item.certification}</p>
                                                <p><span className='h6'>Institute :</span> {item.institute}</p>
                                                <p><span className='h6'>Location :</span> {item.location}</p>
                                                <p><span className='h6'>Total Time :</span> </p>
                                                <p><span className='h6'>Start :</span> {moment(item.startDate).format('MMMM DD YYYY')}</p>
                                                <p><span className='h6'>End :</span> {moment(item.endDate).format('MMMM DD YYYY')}</p>
                                                <p><span className='h6'>Technologies :</span> {item.technologies.join(", ")}</p>
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

export default Training;