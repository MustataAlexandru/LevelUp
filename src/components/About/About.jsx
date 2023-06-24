import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './About.module.css';
import alex from '../../img/MustataAlexandru.jpg';
import robert from '../../img/TrascaRobert.jpg';

const CircularComponent = () => {
    const members = [
        {
            name: 'Mustata Alexandru-Cristian',
            age: '28',
            role: 'Web Developer',
            img: alex,
        },
        {
            name: 'Trasca Robert-Valentin',
            age: '20',
            role: 'Web Developer',
            img: robert,
        },
    ];

    return (
        <div className={styles.container}>
            {members.map((member, index) => (
                <div key={index} className={styles.spacing}>
                    <Card className={styles.card}>
                        <Card.Img variant="top" src={member.img} alt={member.name} className={styles.image} />
                        <Card.Body>
                            <Card.Title>{member.name}</Card.Title>
                            <Card.Text>
                                <p className={styles.pinfo}>Age: {member.age}</p>
                                <p className={styles.pinfo}>Role: {member.role}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default CircularComponent;
