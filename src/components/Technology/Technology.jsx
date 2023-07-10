import React, { useEffect } from 'react';
import { TechnologyListRequest } from '../../APIRequests/portfolioAPIRequest';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';

const Technology = () => {
    useEffect(() => {
        TechnologyListRequest()
    }, [])

    const TechnologyList = useSelector((state) => state.portfolio.TechnologyList)

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='row'>
                        {
                            TechnologyList.map((item, i) =>
                                <div className='col-lg-4' style={{ marginTop: "10rem" }}>
                                    <Card border="dark" style={{ width: '18rem' }}>
                                        <Card.Header className='text-center h4 text-muted' style={{ fontStyle: 'italic', fontFamily: 'sans-serif', fontWeight: 'bolder' }}>{item.title}</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                <p className='h4 text-center mb-3'>Technology</p>
                                                {
                                                    item.skill.map((skill, i) =>
                                                        <ol start={i + 1}>
                                                            <li>{skill}</li>
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

export default Technology;