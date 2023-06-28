import React from 'react';
import Card from 'react-bootstrap/Card';

const Profile = ({ profileData }) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="d-flex flex-column align-items-center">
        <Card className="border-0 shadow-lg p-4" style={{ width: '500px', height: '300px' }}>
          <Card.Body className="text-center">
            <Card.Title className="mb-5" style={{ fontSize: '20px' , borderBottom: '1px solid black' }}>
              Name: {profileData.user.fullname}
            </Card.Title>
            <Card.Subtitle
              className="mb-5 text-muted"
              style={{ fontSize: '16px' , borderBottom: '1px solid black' , paddingBottom: '2rem'}}
            >
              Email: {profileData.user.email}
            </Card.Subtitle>
            <Card.Text className="mb-4" style={{ fontSize: '18px', color: 'green'}}>
              {profileData.isAdmin ? 'Admin' : 'User'}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
