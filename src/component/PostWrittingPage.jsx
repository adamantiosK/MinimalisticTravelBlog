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
                    <h1 className="text-5xl font-bold text-center font-pacifico">Lisbon, Portugal</h1>
                </div>
            </div>

            <div className="flex-grow bg-gray-800 text-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-lg text-justify mx-auto relative" style={{ maxWidth: '800px' }}>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-4xl font-bold mb-6">A quick 1-on-1 with Portugal's Capital</h1>
                                <p className="text-lg leading-relaxed">
                                    Portugal, and specifically its capital, Lisbon, is a city that, unlike most places in Europe, does not seem to 
                                    face the burden of rainy weather that most cities in Europe do. Not to say it does not rain at all, however if you have
                                    not purchased your plane tickets just yet, you might want to consider Lisbon as a winter destination. For context, 
                                    my visit took place at new years, and the weather was sunny and warm. <br/> <i>The following guide is based on my visit,
                                    and can be used as a quick starting point if you are not sure where to start. I am sure there were a lot of hidden gems I 
                                    missed, if that is the case, let me know as I definitely plan on going back to Lisbon in the future.</i>
                                </p>
                                <img 
                                    src="https://yjpipxmxaqnzbxyynuit.supabase.co/storage/v1/object/public/MinimalisticBlog/Lisbon/LisbonAdamSquare.JPEG"
                                    alt="Barcelona Aerial View" 
                                    className="w-full h-[600px] object-cover rounded-lg border-2 border-gray-700 shadow-lg"
                                />
                            </div>

                            <section className="space-y-4">
                                <h2 className="text-3xl font-semibold text-yellow-400">"Must-See" Sights</h2>
                                
                                <div className="space-y-6">
                                    <div className="bg-gray-700 p-6 rounded-lg">
                                        <div className="md:flex md:gap-6">
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-semibold mb-3">Belém Tower, Jerónimos Monastery & Monument to the Discoveries</h3>
                                                <div className="relative">
                                                    <p className="mb-3">First main section, and I know what you're thinking, "Adam, are you just going to iterate through 
                                                    places that everyone else goes to?" Well, yes and no.</p> 
                                                    <img 
                                                            src="https://yjpipxmxaqnzbxyynuit.supabase.co/storage/v1/object/public/MinimalisticBlog/Lisbon/AdamBelem.JPEG"
                                                            alt="Belém Tower"
                                                            className="w-full h-[600px] object-cover rounded-lg border-2 border-gray-600 mb-4"
                                                            style={{ objectPosition: '20% 60%' }}
                                                        />
                                                    <p className="mb-3"> I will be going through the places that I went to, and to some 
                                                        extent, the places one might say are "touristy". However, I will try to provide a unique perspective. For starters, the Belem Tower
                                                        is a symbol of the Portuguese Discoveries, and is a UNESCO World Heritage Site. If you choose to go into the tower, you will be able to see
                                                        the battlements, the Governor's Room, and the Chapel of São Jerónimo. My personal take on this, if you must do this, go in the morning. The lines in front 
                                                        of the tower are long, and the tower is not that big. I would argue, go see it, snap that Instagram story, and move on. The are other great 
                                                        things to do and see, like the monastery of Jerónimos, which is literall a short stroll away. At this point, it's probably a good idea to consider the tourist 
                                                        attraction card for the day, which will grant you access to all these attractions, as well as many more. If you manage to squeeze in 3-4 attractions 
                                                        per day, you made your money's worth. If you get lucky with the weather like I did, it can be a great idea to commute to the Belem Tower in the morning 
                                                        and then head back into the city center and on the way stop at all these attractions. Don't forget to grab a "Pastéis de Belém" on the way back which 
                                                        definitely serve the best pastel de nata in Lisbon.<br/><i>(pro-tip: Grab them from the counter on the left side of the restaurant, you get to skip the long queue 
                                                            and this way snack on the go) </i> 
                                                    </p>

                                                        <img 
                                                            src="https://yjpipxmxaqnzbxyynuit.supabase.co/storage/v1/object/public/MinimalisticBlog/Lisbon/LXFactory.JPEG"
                                                            alt="LX Factory"
                                                            className="w-full h-[500px] object-cover rounded-lg border-2 border-gray-600 mb-4"
                                                            style={{ objectPosition: '30% 70%' }}
                                                        />
                                                    <p className="mb-3">Covering the way back would take a longer while, but it's what would buld up the apetite 
                                                        for the next stop, that being the LX Factory. Its this former industrial site that has been completly reformed to function as a 
                                                        street food type place. Basicaly, take a bowl and fill it with a lot of diversefood, drinks and pair that
                                                        with some street art, and you get the LX Factory. Definetly a worthwhile spot to see but definitely don't spent the whole day there. In 
                                                        my opinion, Lisbon like a larger version of the LX Factory, there are many places with good food, drinks and nice vibes. After all, it 
                                                        is the city of the "Fado".  
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-700 p-6 rounded-lg">
                                        <h3 className="text-2xl font-semibold mb-3">In-City: Santa Justa Elevator, Arco da Rua Augusta & Castelo de São Jorge</h3>
                                        <p className="mb-3">Any way you spin in, Lisbon is just a charm to walk through. You can notice a constant mix of modern but 
                                            also older buildings. All the artwork with older less maintained architecture somehow makes it all work. 
                                        </p>
                                        <img 
                                            src="https://yjpipxmxaqnzbxyynuit.supabase.co/storage/v1/object/public/MinimalisticBlog/Lisbon/StairWayInLisbon.JPEG"
                                            alt="StairWayInLisbon" 
                                            className="w-full h-[500px] object-cover rounded-lg border-2 border-gray-600 mb-4"
                                            style={{ objectPosition: '30% 100%' }}

                                        />
                                        <p className="mb-3">In all honesty, if you choose to walk everywhere, you are likely to be able to check of every 
                                            attraction in the city, however, it can get tiring as not all parts of Lisbon are flat. Start the tour by going to the 
                                            best viewpoint in the city, Miradouro de Graca, right next to a beatiful church of Inreja da Graca de Lisboa. From there, walk 
                                            towards Arco da Rua Augusta, passing by Castelo de S. Jorge and the Lisbon Cathedral on the way in. From there go inwards the walking
                                            street towards the Santa Justa Elevator. This elevator is a great way to get to the top of the city, and is a great way to see the city from above.
                                            <br/><i><b>Pro-tip:</b> Don't take the actual elevator ride unless you must. The queue is long, and it cost 10 euros to go up while you can go around in 
                                            less then 5 minutes and reach the top platform for the same view.</i> <br/>
                                            Since you are already here and you are one tat likes books, make sure to get yourself a book from 
                                            Libraria Bertrand-Chiado, the oldest bookshop in the world. Make sure to ask for the official stamp for your book at checkout.  
                                            Last but not least, in order to do Lisbon the right way, make sure to catch at least one sunset by the water, and witness as the sun winks at you goonight 
                                            for a day well done as it hides behind the infamous Ponte 25 de Abril bridge. 
                                        </p>
                                        <img 
                                            src="https://yjpipxmxaqnzbxyynuit.supabase.co/storage/v1/object/public/MinimalisticBlog/Lisbon/sunsetLisbon.JPEG"
                                            alt="sunsetLisbon" 
                                            className="w-full h-[500px] object-cover rounded-lg border-2 border-gray-600 mb-4"
                                            style={{ objectPosition: '30% 60%' }}

                                        />
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-3xl font-semibold text-yellow-400">Food & Dining</h2>
                                <div className="bg-gray-700 p-6 rounded-lg">
                                    <h3 className="text-2xl font-semibold mb-3">La Boqueria Market</h3>
                                    <p>Reaching my week spot, I would like to prephase that with the fact that I am not particularly a picky eater
                                        but at the same time I enjoy good food and ou can definetly see it on my face when I find something I like. 
                                        I don't think there are many places you can go wrong with in Lisbon, I just wanted to recommed a few places 
                                        I tried, enjoyed and would definitely want to go back to. Having said that...
                                     </p>
                                    <img 
                                        src="https://yjpipxmxaqnzbxyynuit.supabase.co/storage/v1/object/public/MinimalisticBlog/Lisbon/timeOut.JPEG"
                                        alt="La Boqueria Market" 
                                        className="w-full h-[500px] object-cover rounded-lg border-2 border-gray-600 mb-4"
                                        style={{ objectPosition: '10% 30%' }}

                                    />
                                    <p className="mb-3">Starting with one of the must even if you only go in for a glass of wine or a small snack 
                                        you have the <i><a href="https://maps.app.goo.gl/37mfxjSHkEqGSpTcA" target="_blank" rel="noopener noreferrer" className="underline">Time Out Market</a></i> which is a food market with a lot of different food(primarily seafood) and a wider 
                                        selection of portuguese wines and beers. The place is definetly on the pricer side, however the quality of the food is 
                                        actually good. Portugal is well known for it's seafood, and I would at the very least recommend you try some of the crabcakes or octopus 
                                        plates.
                                        <br/>
                                        <br/>
                                        If you are looking for a more casual dining experience, and you sit on Instagram for as long as I do, you must have heard of <i><a href="https://maps.app.goo.gl/45vRh8YwTPHLNEPDA" target="_blank" rel="noopener noreferrer" className="underline">La Malquerida</a></i>, which
                                        claims to serve the best tacos on the continent of Europe. I would not be the authority on this, but if you feel like challenging that statement, give it a try, 
                                        and make sure to do it during happy hour, as they still maintain their 1 euro tacos.
                                        <br/>
                                        <br/>
                                        The last place I would recommend trying is not excacly portuguese cuisine either, however I would categorize <i><a href="https://maps.app.goo.gl/UDsudzQbU72ek2Wa7" target="_blank" rel="noopener noreferrer" className="underline">Ramen Shifu Baixa</a></i> a must if you like ramen. 
                                        Great service, decent price, and great decor.
                                    </p>
                                   
                                </div>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-3xl font-semibold text-yellow-400">Getting Around</h2>
                                <div className="bg-gray-700 p-6 rounded-lg">
                                    <h3 className="text-2xl font-semibold mb-3">Transportation Guide</h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Walking: All the attractions I mentioned are within, what I at least consider, walking distance.
                                            if you are not in a hurry and the wheather permits it, it's definetly the best way to see the city.
                                        </li>
                                        <li>Metro: quick and easy way to get around, especially if your accomodation is on the outskirts.</li>
                                        <li>Bus & Trams: The city does have an extensive network that will accomodate any connection.</li>
                                        <li>Taxis & Scooters: When in need, you can always also use the Bolt app to get a taxi or scooter, the prices 
                                            are reasonable and sometimes even cheaper than the metro when spliting the cost among 3-4 people. The 
                                            city has an extensive bike lane infrastructure so don't be afraid on being run over by a carif you 
                                            choose to rent some bikes or scooters, that being said, be careful.</li>
                                    </ul>
                                    <br/>
                                    <p className="mb-3"><i><b>Pro-tip 1:</b> If you are planning on visiting many attractions and getting the Lisboa Card, keep
                                    in mind, you don't need to by further tickets for public transport. That card covers bus, trams, metro and trains. </i></p>
                                    <p className="mb-3"><i><b>Pro-tip 2:</b>public transportation in Lisboa is cheap however, one must buy a transporation card first 
                                    to use it. You can only purchase it at the metro stations, and then you can use it on busses and trams too. You can always purchase the tickets 
                                    from the bus or tram driver too, however, that one connection ticket only will be 2-3 times more expensive depending on the conneciton than the 
                                    one using the card. Unfortunatly, to my knowledge, there is no app that lets you purchase a ticket in a digital form. </i></p>
                                </div>
                            </section>

                            <h1 className="text-4xl font-bold mb-6">Thats a wrap on Lisbon</h1>
                            <p className="text-lg leading-relaxed">
                                Thank you for taking the time to explore this guide on Lisbon. I hope it inspires your journey and helps you uncover the city's charm. 
                                Before you wrap up, make sure to check out the link on the side for a Google Maps view of all the spots mentioned. Safe travels!
                            </p>                    
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 text-white text-center p-1">
                <div className="container mx-auto">
                    <p>© 2025 The Minimalistic Travel Blog. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default PostWrittingPage;
