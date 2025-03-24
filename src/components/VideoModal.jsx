import React from 'react';

function VideoModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    // YouTube video ID extracted from the provided URL
    const videoId = "9INAzLoOGcw";

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl mx-4 bg-black rounded-lg overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70 transition-colors z-10"
                    onClick={onClose}
                >
                    ×
                </button>
                <div className="relative pt-[56.25%]">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0`}
                        title="DocuAid Demo Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default VideoModal; 