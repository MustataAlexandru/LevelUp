import React, { useEffect, useState } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import customAxios from '../../server/utils/customAxios';
import { Spinner, Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import VideoModal from '../VideoModal/VideoModal';
const Videos = () => {
    const { id } = useParams();
    const [videos, setVideos] = useState(null);
    const [teacherInfo, setTeacherInfo] = useState(null);
    const [courseInfo, setCourseInfo] = useState(null);
    const [link, setLink] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const response = await customAxios.get(`/videos/${id}`);
                if (isMounted) {
                    setVideos(response.data.videos);
                    setTeacherInfo(response.data.teacherInfo);
                    setCourseInfo(response.data.courseInfo);
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

    const handleEnrollClick = () => {
        setShowAlert(true);
    };

    return (
        <>
            {(videos === null || teacherInfo === null || courseInfo === null) ? (
                <Spinner />
            ) : (
                <Container style={{ paddingTop: '10rem' }}>
                    <VideoModal link={link} showModal={showModal} setShowModal={setShowModal} />
                    {showAlert && (
                        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                            Enrollment successful!
                        </Alert>
                    )}
                    <div style={{ textAlign: 'center' }}>
                        <h1>{courseInfo.title}</h1>
                        <p>{courseInfo.description}</p>
                    </div>
                    <Col md={12}>
                        {videos.map((item, index) => (
                            <Card key={index} className="mb-4 shadow-sm">
                                <Card.Header as="h5">{item[0]}</Card.Header>
                                <Card.Body>
                                    {item[1].map((video, index2) => (
                                        <div key={index2} className="d-flex align-items-center mb-2">
                                            <Card.Link
                                                href="#"
                                                onClick={() => { setLink(video.link); setShowModal(true) }}
                                                style={{ fontSize: '20px', cursor: 'pointer' }}
                                                className="text-primary hover-effect">
                                                {video.video_number + ") "}{video.title}
                                            </Card.Link>
                                        </div>
                                    ))}
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>

                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Button onClick={handleEnrollClick} variant="primary" style={{ width: '15rem', border: '1px solid white', backgroundColor: ' #e89664' }}>
                            Confirm Enroll
                        </Button>
                    </div>
                </Container>
            )}
        </>
    );
};

export default Videos;
