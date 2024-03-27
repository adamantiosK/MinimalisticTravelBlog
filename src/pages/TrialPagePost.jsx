import React from 'react';
import { useNavigate } from 'react-router-dom';


const TrialPageEdit = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Title with full-width background */}
            <div className="bg-gray-900 text-white">
                <div className="container mx-auto px-4 py-8 flex items-center">
                    <button onClick={handleBackClick} className="card flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="text-lg">Back</span>
                    </button>
                    <h1 className="text-5xl font-bold text-center flex-grow font-pacifico">New Post Title</h1>
                </div>
            </div>

            <div className="flex-grow bg-gray-800 text-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-lg text-justify mx-auto relative" style={{ maxWidth: '800px' }}>
                        <div>
                            {/* Here Insert New Story to be added */}
                            <h1> <b>New Post Header</b></h1>
                            <p>new Post paragraph</p>
                        </div>  
                    </div>          
                </div>
            </div>

            {/* Footer with dark shade, stuck to the bottom */}
            <div className="bg-gray-900 text-white text-center p-1">
                <div className="container mx-auto">
                    <p>© 2024 The Minimalistic Travel Blog. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default TrialPageEdit;
