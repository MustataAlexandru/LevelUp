import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './About.module.css'

const members = [
    {
        name: 'Mustata Alexandru-Cristian',
        age: '28',
        role: 'Web Developer',
        img: '../img/MustataAlexandru.jpg',
    },
    {
        name: 'Trasca Robert-Valentin',
        age: '20',
        role: 'Web Developer',
        img: '../img/Robert.jfif',
    },
];

const About = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.textCenter}>Who are we?</h2>
            {members.map((member, i) => (
                <div key={i} className ={styles.Card}>
                    <img src={member.img} />
                    <h3 className={styles.name}>{member.name}</h3>
                    <div className={styles.info}>
                        <p className={styles.pinfo}>{member.age}</p>
                        <p className={styles.pinfo}>{member.role}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default About;
