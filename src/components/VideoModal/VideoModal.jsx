import React from 'react';
import styles from './VideoModal.module.css';

const VideoModal = ({ showModal, setShowModal, link }) => {
    if (!showModal || !link) {
        return null;
    }

    function extractVideoIdFromPlaylist() {
        const match = link.match(/[?&]v=([^&]+)/);
        if (match && match[1])
            return match[1];
        return null;
    }

    // function isPlaylistLink() {
    //     // Check if the link is a playlist link by looking for "list=" in the URL
    //     return link.includes("list=");
    // }

    // const isPlaylist = isPlaylistLink();
    // const videoId = isPlaylist ? extractVideoIdFromPlaylist() : link; // If it's a playlist, extract video ID; otherwise, use the link as-is

    // if (isPlaylist && !videoId) {
    //     return <p>This is a playlist link, but no video ID could be extracted.</p>;
    // }

    return (
        <div className={styles.modalContainer} onClick={() => setShowModal(false)}>
            <iframe
                src={`https://www.youtube.com/embed/${extractVideoIdFromPlaylist()}?rel=0`}
                title="YouTube video"
                allowFullScreen
                autoPlay
                className={styles.videoIframe}
            ></iframe>
        </div>
    );
};


export default VideoModal;
