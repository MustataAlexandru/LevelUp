import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Tutorials.module.css';
const Tutorials = () => {
    useEffect(()=>{
        //extract
    },[])
    
    // Trebuie adaugat on hover full Name
    const truncateTitle = (title) => {
        if (title.length > 20) {
            return title.substring(0, 20) + '...';
        }
        return title;
    };
    
    const clickHandler = () => {

    }

    return (
        <div className="container" style={{ padding: '2rem 14rem ', margin: 'auto', width: '100%', borderBottom: '1px solid #888888' }}>
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Start learning with us today.</h2>
            <div className="row">
                {courses.map((course, index) => (
                    <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{ marginBottom: '20px' }}>
                        <Card style={{ width: '18rem' }} className={styles.hover}>

                            <Card.Body className="text-center">
                                <Card.Title>
                                    <strong>{truncateTitle(course.title)}</strong>
                                </Card.Title>
                                <Card.Text style={{ textAlign: 'center' }}>{course.author}</Card.Text>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center mr-2">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <i
                                                key={index}
                                                className={`bi bi-star-fill ${index < course.rating ? 'text-warning' : 'text-secondary'}`}
                                            ></i>
                                        ))}
                                    </div>
                                </div>
                                <span className="mr-2">{course.rating} stars &nbsp;</span>
                                <span>{course.price}</span>

                                <Button className={styles.btn}
                                    variant="primary"
                                    style={{
                                        backgroundColor: '#909090',
                                        border: '1px solid white',
                                    }}
                                >Enroll Now</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tutorials;