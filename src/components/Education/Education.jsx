import React, { useEffect } from 'react';
import { EducationListRequest } from '../../APIRequests/portfolioAPIRequest';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';

const Education = () => {
    useEffect(() => {
        EducationListRequest()
    }, [])

    const EducationList = useSelector((state) => state.portfolio.EducationList)

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='row'>
                        {
                            EducationList.map((item, i) =>
                                <div className='col-lg-4 mt-5'>
                                    <Card border="dark" style={{ width: '18rem' }}>
                                        <Card.Header className='text-center h4 text-muted' style={{ fontStyle: 'italic', fontFamily: 'sans-serif', fontWeight: 'bolder' }}>Education</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                <p><span className='h6'>Exam Title :</span> {item.examTitle}</p>
                                                <p><span className='h6'>Concentration/Major :</span> {item.major}</p>
                                                <p><span className='h6'>Institute :</span> {item.institute}</p>
                                                <p><span className='h6'>CPGA :</span> {item.cgpa}</p>
                                                <p><span className='h6'>Passing Year :</span> {item.passingYear}</p>
                                                <p><span className='h6'>Duration :</span> {item.duration}</p>
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

export default Education;