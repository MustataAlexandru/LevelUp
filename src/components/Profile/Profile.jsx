import React from 'react';
import Card from 'react-bootstrap/Card';

const Profile = ({ profileData }) => {
  // Dummy data for testing

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="d-flex flex-column align-items-center">
        <Card className="border-0 shadow-lg p-4" style={{ width: '500px', height: '300px' }}>
          <Card.Body className="text-center">
            <Card.Title className="mb-5" style={{ fontSize: '24px' }}>
              {profileData.user.fullname}
            </Card.Title>
            <Card.Subtitle
              className="mb-5 text-muted"
              style={{ fontSize: '16px' }}
            >
              {profileData.user.email}
            </Card.Subtitle>
            <Card.Text className="mb-4" style={{ fontSize: '18px' }}>
              {profileData.isAdmin ? 'Admin' : 'User'}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
