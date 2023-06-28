import React from 'react';
import styles from './VideoModal.module.css';

const VideoModal = ({ showModal, setShowModal }) => {
    if (!showModal)
        return null;
    return (
        <div className={styles.modalContainer} onClick={() => setShowModal(false)}>
            <iframe
                src="https://www.youtube.com/embed/cLfyjIlu9Uw?rel=0"
                title="YouTube video"
                allowFullScreen
                autoPlay
                className={styles.videoIframe}
            ></iframe>
        </div>
    );
};

export default VideoModal;
