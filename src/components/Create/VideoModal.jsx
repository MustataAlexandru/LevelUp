import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const VideoModal = ({ show, setShow, setChapters, currentIndex, chapters }) => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');

    const addVideo = () => {
        setChapters(prevList => {
            const updatedList = [...prevList];
            updatedList[currentIndex].videos.push({ title, link });
            return updatedList;
        })
    }

    const handleSave = () => {
        if (title.length !== 0 && link.length !== 0) {
            addVideo();
            setShow(false);
        } else alert('You need to complete everything !');
    }
    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Video details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            onChange={(e) => setTitle(e.target.value)}
                            style={{ height: '4rem', width: '25rem' }}
                            type="text"
                            placeholder="Enter the title"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Link</Form.Label>
                        <Form.Control
                            onChange={(e) => setLink(e.target.value)}
                            style={{ height: '4rem', width: '25rem' }}
                            type="text"
                            placeholder="Enter the title"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{ width: '25rem' }} variant="secondary" onClick={handleSave}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default VideoModal;