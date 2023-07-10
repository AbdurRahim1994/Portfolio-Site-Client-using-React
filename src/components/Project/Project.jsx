import React, { useEffect } from 'react';
import { ProjectListRequest } from '../../APIRequests/portfolioAPIRequest';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import MyPhoto from '../../assets/images/MyPhoto.JPG'

const Project = () => {
    useEffect(() => {
        ProjectListRequest()
    }, [])

    const ProjectList = useSelector((state) => state.portfolio.ProjectList)

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='row'>
                        {
                            ProjectList.map((item, i) =>
                                <div className='col-lg-4 mt-5'>
                                    <Card style={{ width: '18rem' }} border='dark'>
                                        <Card.Img variant="top" src={item.image} height={200} />
                                        <Card.Body>
                                            <Card.Title>
                                                <p><span className='h6'>Project Name :</span> {item.title}</p>
                                            </Card.Title>
                                            <Card.Text>
                                                <p><span className='h6'>Description :</span> {item.description}</p>
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>
                                                <p><span className='h6'>Technologies :</span> {item.technologies.join(", ")}</p>
                                            </ListGroup.Item>
                                            {/* <ListGroup.Item>
                                                <p><span className='h6'>Live :</span> {item.liveLink}</p>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                            <p><span className='h6'>Git :</span> {item.gitRepo}</p>
                                            </ListGroup.Item> */}
                                        </ListGroup>
                                        <Card.Body>
                                            <Card.Link href={item.liveLink} target='_blank' className='btn btn-outline-success'>See Project</Card.Link>
                                            <Card.Link href={item.gitRepo} target='_blank' className='btn btn-outline-success'>Git Repo</Card.Link>
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

export default Project;