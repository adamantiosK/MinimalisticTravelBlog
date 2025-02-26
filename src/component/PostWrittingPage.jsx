import React from 'react';


const PostWrittingPage = () => {
    const handleBackClick = () => {
        navigate('/');
    };

    // Add this to see what's being saved
    const handleSave = async () => {
        const content = document.querySelector('.space-y-8').outerHTML;
        // Convert className to class
        const processedContent = content.replace(/className=/g, 'class=');
        console.log('Content being saved:', processedContent);
        // Your save logic here with processedContent
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Title with full-width background */}
            <div className="bg-gray-900 text-white">
                <div className="container mx-auto px-4 py-8 flex items-center justify-center">
                    <div className="absolute left-0 ml-4">
                        <button onClick={handleBackClick} className="card flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="text-lg"></span>
                        </button>
                    </div>
                    <h1 className="text-5xl font-bold text-center font-pacifico">Post Title</h1>
                </div>
            </div>

            {/* Post content with darker shade, white text */}
            <div className="flex-grow bg-gray-800 text-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-lg text-justify mx-auto relative" style={{ maxWidth: '800px' }}>
                        {/* Section to write the post - region Start */}
                        <div className="space-y-8">
                            {/* Title and Intro */}
                            <div className="space-y-4">
                                <h1 className="text-4xl font-bold mb-6">Barcelona: A Complete Travel Guide</h1>
                                <p className="text-lg leading-relaxed">
                                    Barcelona, the vibrant capital of Catalonia, is a city where historic charm meets modern innovation. 
                                    From Gaudí's architectural masterpieces to the bustling La Rambla, this guide will help you discover 
                                    the best this Mediterranean gem has to offer.
                                </p>
                                <img 
                                    src="https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80"
                                    alt="Barcelona Aerial View" 
                                    className="w-full h-[600px] object-cover rounded-lg border-2 border-gray-700 shadow-lg"
                                />
                            </div>

                            {/* Must-See Sights */}
                            <section className="space-y-4">
                                <h2 className="text-3xl font-semibold text-yellow-400">Must-See Sights</h2>
                                
                                <div className="space-y-6">
                                    <div className="bg-gray-700 p-6 rounded-lg">
                                        <h3 className="text-2xl font-semibold mb-3">Sagrada Familia</h3>
                                        <img 
                                            src="https://images.unsplash.com/photo-1583779457094-ab6c849531bf?q=80"
                                            alt="Sagrada Familia" 
                                            className="w-full h-[500px] object-cover rounded-lg border-2 border-gray-600 mb-4"
                                        />
                                        <p className="mb-3">Gaudí's unfinished masterpiece is Barcelona's most iconic landmark. 
                                        The intricate details and stunning architecture make it a must-visit destination.</p>
                                        <a 
                                            href="https://goo.gl/maps/QEj9tyx6R9B2" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300 underline"
                                        >
                                            View on Google Maps
                                        </a>
                                    </div>

                                    <div className="bg-gray-700 p-6 rounded-lg">
                                        <h3 className="text-2xl font-semibold mb-3">Park Güell</h3>
                                        <img 
                                            src="https://images.unsplash.com/photo-1464790719320-516ecd75af6c?q=80"
                                            alt="Park Güell" 
                                            className="w-full h-[500px] object-cover rounded-lg border-2 border-gray-600 mb-4"
                                        />
                                        <p className="mb-3">This whimsical park offers stunning views of the city and showcases 
                                        Gaudí's unique architectural style with colorful mosaics and organic shapes.</p>
                                        <a 
                                            href="https://goo.gl/maps/wZLxgThQWqS2" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300 underline"
                                        >
                                            View on Google Maps
                                        </a>
                                    </div>
                                </div>
                            </section>

                            {/* Food Scene */}
                            <section className="space-y-4">
                                <h2 className="text-3xl font-semibold text-yellow-400">Food & Dining</h2>
                                
                                <div className="bg-gray-700 p-6 rounded-lg">
                                    <h3 className="text-2xl font-semibold mb-3">La Boqueria Market</h3>
                                    <img 
                                        src="https://images.unsplash.com/photo-1589213682455-36d6302b4b34?q=80"
                                        alt="La Boqueria Market" 
                                        className="w-full h-[500px] object-cover rounded-lg border-2 border-gray-600 mb-4"
                                    />
                                    <p className="mb-3">Europe's largest food market is a feast for the senses. Try fresh fruits, 
                                    local cheeses, and traditional Spanish tapas at numerous stalls.</p>
                                    <a 
                                        href="https://goo.gl/maps/7XZcR8WgF5J2" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 underline"
                                    >
                                        View on Google Maps
                                    </a>
                                </div>
                            </section>

                            {/* Transportation Tips */}
                            <section className="space-y-4">
                                <h2 className="text-3xl font-semibold text-yellow-400">Getting Around</h2>
                                <div className="bg-gray-700 p-6 rounded-lg">
                                    <h3 className="text-2xl font-semibold mb-3">Transportation Guide</h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Metro: The most efficient way to travel. Get a T-Casual ticket for multiple rides.</li>
                                        <li>Bus: Extensive network covering the entire city.</li>
                                        <li>Walking: Many attractions are within walking distance in the Gothic Quarter.</li>
                                        <li>Bike Sharing: Use Bicing if staying for an extended period.</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Day Trips */}
                            <section className="space-y-4">
                                <h2 className="text-3xl font-semibold text-yellow-400">Nearby Excursions</h2>
                                <div className="bg-gray-700 p-6 rounded-lg">
                                    <h3 className="text-2xl font-semibold mb-3">Montserrat</h3>
                                    <img 
                                        src="https://images.unsplash.com/photo-1586957960291-4f0634487f66?q=80"
                                        alt="Montserrat" 
                                        className="w-full h-[500px] object-cover rounded-lg border-2 border-gray-600 mb-4"
                                    />
                                    <p className="mb-3">Just an hour from Barcelona, this stunning mountain monastery offers 
                                    breathtaking views and rich cultural history.</p>
                                    <a 
                                        href="https://goo.gl/maps/QWJxyz123ABC" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 underline"
                                    >
                                        View on Google Maps
                                    </a>
                                </div>
                            </section>

                            {/* Custom Google Maps Link */}
                            <div className="flex justify-center pt-8">
                                <a 
                                    href="https://goo.gl/maps/YOUR-CUSTOM-MAP-LINK" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center space-x-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                    <span>View My Complete Barcelona Map</span>
                                </a>
                            </div>
                        </div>
                        {/* Section to write the post - region End */}
                    </div>
                </div>
            </div>

            {/* Footer with dark shade, stuck to the bottom */}
            <div className="bg-gray-900 text-white text-center p-1">
                <div className="container mx-auto">
                    <p>© 2025 The Minimalistic Travel Blog. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default PostWrittingPage;
