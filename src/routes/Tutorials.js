import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Tutorials = () => {
    const courses = [
        {
            title: 'React Fundamentals',
            author: 'John Doe',
            rating: 4.5,
            price: '$49.99',
            image: 'https://example.com/course1.jpg',
        },
        {
            title: 'JavaScript Advanced Techniques',
            author: 'Jane Smith',
            rating: 4.2,
            price: '$59.99',
            image: 'https://example.com/course2.jpg',
        },
        {
            title: 'Python for Data Science',
            author: 'Michael Johnson',
            rating: 4.8,
            price: '$69.99',
            image: 'https://example.com/course3.jpg',
        },
        {
            title: 'React Fundamentals',
            author: 'John Doe',
            rating: 4.5,
            price: '$49.99',
            image: 'https://example.com/course1.jpg',
        },
        {
            title: 'JavaScript Advanced Techniques',
            author: 'Jane Smith',
            rating: 4.2,
            price: '$59.99',
            image: 'https://example.com/course2.jpg',
        },
        {
            title: 'Python for Data Science',
            author: 'Michael Johnson',
            rating: 4.8,
            price: '$69.99',
            image: 'https://example.com/course3.jpg',
        },
    ];

    const truncateTitle = (title) => {
        if (title.length > 20) {
            return title.substring(0, 20) + '...';
        }
        return title;
    };

    return (
        <div className="container" style={{ padding: '5rem' , margin: 'auto' }}>

            <div className="row">
                {courses.map((course, index) => (
                    <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{ marginBottom: '20px' }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={course.image} />
                            <Card.Body>
                                <Card.Title>
                                    <strong>{truncateTitle(course.title)}</strong>
                                </Card.Title>
                                <Card.Text>{course.author}</Card.Text>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center mr-2">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <i
                                                key={index}
                                                className={`bi bi-star-fill ${index < course.rating ? 'text-warning' : 'text-secondary'}`}
                                            ></i>
                                        ))}
                                    </div>
                                    <span className="mr-2">{course.rating} stars</span>
                                    <span>{course.price}</span>
                                </div>
                                <Button variant="primary">Enroll Now</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tutorials;