import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Teachers.css';

const Teachers = () => {

  const teachers = [
    {
      name: 'Laban Simona',
      email: 'asdqqwe@gmail.com',
      courses: ['Math', 'Science']
    },
    {
      name: 'John Smith',
      email: 'johnsmith@gmail.com',
      courses: ['English', 'History']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    },
    {
      name: 'Jane Johnson',
      email: 'janejohnson@gmail.com',
      courses: ['Art', 'Music']
    }
    // Add more teachers here with their respective courses
  ];


  return (
    <div className='big-container'>
      <div className="container margin-top centered">
        <div className="row">
          {teachers.map((teacher, index) => (
            <div key={index} className="col-md-4">
              <div className="card" style={{ marginTop: '2.5rem' }}>
                <div className="card-body" >
                  <h5 className="card-title">{teacher.name}</h5>
                  <p className="card-text">Email: {teacher.email}</p>
                  <p className="card-text">Courses: {teacher.courses.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teachers;
