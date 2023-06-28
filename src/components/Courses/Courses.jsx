import React, { useEffect, useState } from 'react';
import styles from './Courses.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import customAxios from '../../server/utils/customAxios';

import Ratio from 'react-bootstrap/Ratio';
import FirstPage from "../FirstPage/FirstPage";

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
                <div className="container" style={{ padding: '2rem 14rem ', margin: 'auto', width: '100%', borderBottom: '1px solid ' }}>
                    <div style={{ marginBottom: '5rem', textAlign: 'center', marginTop: '10rem' }}>


                    </div>

                    <FirstPage ><h2>Start learning with us today.</h2></FirstPage>

                    <div className="row">
                        {courses.map((course, index) => (
                            <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{ marginBottom: '2rem' }}>
                                <Card style={{ width: '18rem', height: '28rem' ,border:'1px solid #e89664'}} className={styles.hover}>

                                    <Card.Body className="text-center d-flex flex-column">

                                        <div style={{ flex: '1 0 auto' }}>
                                            <Card.Title className="card-title" style={{borderBottom: '1px solid black', paddingBottom:'5px'}}>{truncateTitle(course.title)}</Card.Title>
                                            <div style={{width: '100%' , height: '71%'  , borderBottom: '1px solid black'}}>
                                                <div style={{ width: '100%', height: 'auto'}}>
                                                    <Ratio aspectRatio="16x9">
                                                        <iframe  src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowFullScreen></iframe>
                                                    </Ratio>
                                                </div>
                                            </div>
                                        </div>
                                        <Card.Text className="card-description">{truncateDescription(course.description)}</Card.Text>
                                        <div className="mt-auto">
                                            <ListGroup className="list-group-flush">
                                                
                                                <ListGroupItem>
                                                    <Button
                                                        className={styles.btn}
                                                        variant="primary"
                                                        style={{
                                                            backgroundColor: ' #e89664',
                                                            border: '2px solid white',
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
