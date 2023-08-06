import React, { useState } from 'react';
import { ListGroup, InputGroup, Button, Form } from 'react-bootstrap';
import VideosModal from './VideosModal';
const CollapsibleListGroup = () => {
    //Modal
    const [show, setShow] = useState(false);
    //
    const [chapter, setChapter] = useState('');
    const [courseName, setCourseName] = useState('');
    const [description, setDescription] = useState('');
    const [currentIndex, setCurrentIndex] = useState(null);
    const [chapters, setChapters] = useState([
        { name: "Chapter1", collapsed: true, videos: [{ title: 'Video1', link: 'link1' }] },
        { name: "Chapter2", collapsed: true, videos: [{ title: 'Video2', link: 'link2' }] }
    ]);
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([]);

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
        if (chapter.length !== 0) {
            setChapters(prevList => {
                const updatedList = [...prevList];
                updatedList.push({ name: chapter, collapsed: true, videos: [] });
                return updatedList;
            });
        } else alert('Add a chapter !');
    }

    const addTag = () => {
        if (tag.length !== 0) {
            setTags((prevList) => {
                const updatedList = [...prevList];
                updatedList.push(tag);
                return updatedList;
            })
        } else alert('Add a tag');
    }

    const customText = () => {
        let str = "";
        tags.map((current) => {
            str += current + ", ";
        });
        console.log(str);
        return str;
    }
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
            <VideosModal setChapters={setChapters} show={show} setShow={setShow} currentIndex={currentIndex} chapters={chapters} />
            <InputGroup style={{ width: '30rem', marginBottom: '1rem' }}>
                <Form.Control value={courseName} onChange={(e) => setCourseName(e.target.value)} placeholder='Course name' size='lg' />
            </InputGroup>
            <InputGroup style={{ width: '30rem' }}>
                <Form.Control
                    as="textarea"
                    value={description}
                    size='lg'
                    style={{ marginBottom: '20px', maxWidth: '30rem', width: '100%' }}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                />
            </InputGroup>
            <InputGroup style={{ width: '30rem' }}>
                <Form.Label style={{ fontSize: '20px' }}>Chapters : </Form.Label>
                {chapters.map((current, index) => (
                    <div key={index}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer',
                                width: '30rem',
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
                        <ListGroup className={current.collapsed ? 'd-none' : ''} style={{ width: '30rem' }}>
                            {current.videos.map((video, index2) => (
                                <div key={index2}>
                                    <ListGroup.Item onClick={() => { alert(video.link) }}>{video.title}</ListGroup.Item>
                                </div>
                            ))}
                            <Button onClick={() => { setCurrentIndex(index); setShow(true) }} style={{ width: '30rem', marginBottom: '20px' }}>New</Button>
                        </ListGroup>
                    </div>
                ))}
                <InputGroup className="mb-3" style={{ width: '30rem', paddingTop: '15px' }}>
                    <Form.Control onChange={(e) => setChapter(e.target.value)} placeholder='New chapter' size='lg' />
                    <Button style={{ width: '30rem', fontSize: '15px' }} variant='secondary' onClick={addChapter}>Add a new chapter</Button>
                </InputGroup>
            </InputGroup>
            <br />
            <Form.Label style={{ fontSize: '20px' }}>Tags </Form.Label>
            <InputGroup style={{ width: '30rem' }}>
                <div style={{ flex: 1 }}>
                    {tags.length !== 0 && (
                        <div style={{ maxHeight: '100px', overflowY: 'auto' }}>
                            <Form.Label style={{ fontSize: '1.2rem', color: 'blue' }}>
                                {customText()}
                            </Form.Label>
                        </div>
                    )}
                    <Form.Control
                        type="text"
                        placeholder='New tag'
                        size='lg'
                        onChange={(e) => setTag(e.target.value)}
                    />
                    <Button style={{ width: '100%', fontSize: '15px' }} variant='primary' onClick={addTag}>Add a new tag</Button>
                </div>
            </InputGroup>
            <Button onClick={()=>{alert('Done !')}} style={{ width: '30rem',marginBottom:'5rem',marginTop:'5rem' }}>Finish</Button>
        </div>
    );
}

export default CollapsibleListGroup;
