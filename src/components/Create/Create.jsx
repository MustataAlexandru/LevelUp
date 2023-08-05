import React, { useState } from 'react';
import { ListGroup, InputGroup, Button, Form } from 'react-bootstrap';
import VideoModal from './VideoModal';
const CollapsibleListGroup = () => {
    //Modal
    const [show, setShow] = useState(false);
    //
    const [videoName, setVideoName] = useState('');
    const [link, setLink] = useState('');
    const [chapter, setChapter] = useState('');
    const [courseName, setCourseName] = useState('');
    const [description, setDescription] = useState('');
    const [currentIndex, setCurrentIndex] = useState(null);
    const [chapters, setChapters] = useState([
        { name: "Chapter1", collapsed: true, videos: [{ title: 'Video1', link: 'link1' }] },
        { name: "Chapter2", collapsed: true, videos: [{ title: 'Video2', link: 'link2' }] }
    ]);

    const changeState = (index) => {
        setChapters(prevList => {
            const updatedList = [...prevList];
            updatedList[index] = {
                ...updatedList[index],
                collapsed: !updatedList[index].collapsed,
            };
            return updatedList;
        });
    };

    const addChapter = () => {
        setChapters(prevList => {
            const updatedList = [...prevList];
            updatedList.push({ name: chapter, collapsed: true, videos: [] });
            return updatedList;
        });
        setChapter('');
    }

    // const addVideo = ({ title, link, index }) => {
    //     setChapters(prevList => {
    //         const updatedList = [...prevList];
    //         updatedList[index].videos.push({ title, link });
    //     })
    //     setCurrentIndex(null);
    // }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '120px'
            }}
        >
            <VideoModal setChapters={setChapters} show={show} setShow={setShow} currentIndex={currentIndex} chapters={chapters} />
            <InputGroup style={{ width: '300px', marginBottom: '1rem' }}>
                <Form.Control onChange={(e) => setCourseName(e.target.value)} placeholder='Course name' size='small' />
            </InputGroup>
            <InputGroup style={{ width: '300px' }}>
                <Form.Control
                    as="textarea"
                    value={description}
                    style={{ marginBottom: '20px', maxWidth: '300px', width: '100%' }}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                />
            </InputGroup>
            <InputGroup style={{ width: '300px' }}>
                <Form.Label style={{ fontSize: '15px' }}>Chapters : </Form.Label>
                {chapters.map((current, index) => (
                    <div key={index}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer',
                                width: '300px',
                                padding: '10px',
                                backgroundColor: '#f5f5f5'
                            }}
                            onClick={() => changeState(index)}
                        >
                            <div style={{ marginRight: '10px' }}>
                                {/* Unicode character */}
                                {current.collapsed ? '\u25B6' : '\u25BC'}
                            </div>
                            {current.name}
                        </div>
                        <ListGroup className={current.collapsed ? 'd-none' : ''} style={{ width: '300px' }}>
                            {current.videos.map((video, index2) => (
                                <div key={index2}>
                                    <ListGroup.Item>{video.title}</ListGroup.Item>
                                </div>
                            ))}
                            <Button onClick={() => { setCurrentIndex(index); setShow(true) }} style={{ width: '300px', marginBottom: '20px' }}>New</Button>
                        </ListGroup>
                    </div>
                ))}
            </InputGroup>
            <br />
            <InputGroup className="mb-3" style={{ width: '300px' }}>
                <Form.Control onChange={(e) => setChapter(e.target.value)} placeholder='New chapter' size='small' aria-label="Text input with checkbox" />
                <Button style={{ width: '300px' }} variant='secondary' onClick={addChapter}>Add a new chapter</Button>
            </InputGroup>
            <br />
        </div>
    );
}

export default CollapsibleListGroup;
