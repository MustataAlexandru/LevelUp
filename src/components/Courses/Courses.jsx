import React, { useEffect, useState } from 'react';
import styles from './Courses.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import customAxios from '../../server/utils/customAxios';
import axios from 'axios';
const Courses = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await customAxios.get('/courses',window.localStorage);

                if (isMounted) {
                    setCourses(response.data);
                }
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    const truncateTitle = (title) => {
        if (title.length > 50) {
            return title.slice(0, 50) + '...';
        }
        return title;
    };

    const truncateDescription = (description) => {
        if (description.length > 150) {
            return description.slice(0, 150) + '...';
        }
        return description;
    };

    const onEnrollClick = async (id) => {
        navigate(`/videos/${id}`);
    };

    return (
        <>
            {courses === null ? (
                <Spinner />
            ) : (
                <div className="container" style={{ padding: '2rem 14rem ', margin: 'auto', width: '100%', borderBottom: '1px solid #888888' }}>
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Start learning with us today.</h2>
                    <div className="row">
                        {courses.map((course, index) => (
                            <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{ marginBottom: '20px' }}>
                                <Card style={{ width: '18rem', height: '15rem' }} className={styles.hover}>
                                    <Card.Body className="text-center d-flex flex-column">
                                        <div style={{ flex: '1 0 auto' }}>
                                            <Card.Title className="card-title">{truncateTitle(course.title)}</Card.Title>
                                            <Card.Text className="card-description">{truncateDescription(course.description)}</Card.Text>
                                        </div>
                                        <div className="mt-auto">
                                            <ListGroup className="list-group-flush">
                                                <ListGroupItem>
                                                    <span>{course.price}</span>
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    <Button
                                                        className={styles.btn}
                                                        variant="primary"
                                                        style={{
                                                            backgroundColor: '#909090',
                                                            border: '1px solid white',
                                                        }}
                                                        onClick={() => onEnrollClick(course.id)}
                                                    >
                                                        Enroll Now
                                                    </Button>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Courses;
