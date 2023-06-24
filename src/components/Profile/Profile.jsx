import React from 'react';
import Card from 'react-bootstrap/Card';

const Profile = ({ fullName, email, status }) => {
  // Dummy data for testing
  const dummyFullName = 'John Doe';
  const dummyEmail = 'johndoe@example.com';
  const dummyStatus = 'Teacher';

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="d-flex flex-column align-items-center">
        <Card className="border-0 shadow-lg p-4" style={{ width: '500px',height:'300px' }}>
          <Card.Body className="text-center">
            <Card.Title className="mb-5" style={{ fontSize: '24px' }}>
              {fullName || dummyFullName}
            </Card.Title>
            <Card.Subtitle
              className="mb-5 text-muted"
              style={{ fontSize: '16px' }}
            >
              {email || dummyEmail}
            </Card.Subtitle>
            <Card.Text className="mb-4" style={{ fontSize: '18px' }}>
              {status || dummyStatus}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
