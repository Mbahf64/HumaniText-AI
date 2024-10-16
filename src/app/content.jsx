import React, { useState, useEffect } from 'react';

const Content = () => {
    const [inputText, setInputText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [outputText, setOutputText] = useState('Paraphrased text will appear here');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const words = inputText.trim().split(/\s+/).filter(word => word.length > 0);
        setWordCount(words.length);
    }, [inputText]);

    const handleClearText = () => {
        setInputText('');
    };

    const handleHumanizeText = async () => {
        setIsLoading(true);
        const url = 'https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': '7529a58db2mshde08b0c15590d30p15271bjsnab97ccc74373', // Replace with your own API key
                'x-rapidapi-host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                language: 'en',
                strength: 3, // Adjust this value if needed
                text: inputText // Using the inputText from your state
            }),
        };
    
        try {
            const response = await fetch(url, options);
            const data = await response.json(); // Parse the response as JSON
            setOutputText(data.rewrite); // The paraphrased text from the API response
        } catch (error) {
            console.error('Error fetching API response:', error);
            setOutputText('An error occurred while trying to process the text.');
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <div className="w-full h-screen inset-0 flex flex-col items-center justify-center manrope">
            <div className="w-[90vw] lg:w-[90vw] 2xl:w-[69vw] h-full flex flex-col items-start justify-center">
                <div className="w-full  lg:full grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                    <div className="w-full h-[300px] border border-gray-300 bg-white rounded-lg p-5 flex flex-col">
                        <div className="relative w-full flex-grow">
                            <textarea
                                className="w-full h-full resize-none focus:outline-none pr-8"
                                placeholder="Insert (English) text here"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            ></textarea>
                            {inputText.length > 0 && (
                                <button
                                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 -mr-3"
                                    onClick={handleClearText}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            )}
                        </div>
                        <div className="w-full h-[5rem] flex justify-between items-center -mb-5">
                            <span className="text-gray-500">{wordCount} words</span>
                            <button
                                onClick={handleHumanizeText}
                                className="bg-[#80f2ff] hover:bg-[#5edfed] text-black font-normal py-2 px-4 rounded"
                            >
                                {isLoading ? 'Processing...' : 'Humanize AI'}
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-[300px] border border-gray-300 bg-white rounded-lg p-4">
                        <p className="text-gray-500">{outputText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;







































// import React, { useState, useEffect } from 'react'

// const Content = () => {
//     const [inputText, setInputText] = useState('');
//     const [wordCount, setWordCount] = useState(0);

//     useEffect(() => {
//         const words = inputText.trim().split(/\s+/).filter(word => word.length > 0);
//         setWordCount(words.length);
//     }, [inputText]);

//     const handleClearText = () => {
//         setInputText('');
//     };

//     return (
//         <div className=" w-full h-screen inset-0 flex flex-col items-center justify-center manrope">
//             <div className="w-[90vw] lg:w-[90vw] 2xl:w-[69vw] h-full  flex flex-col items-start justify-center">
//                     <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4">
//                         <div className="w-full h-[300px] border border-gray-300 bg-white rounded-lg p-5 flex flex-col">
//                             <div className="relative w-full flex-grow">
//                                 <textarea
//                                     className="w-full h-full resize-none focus:outline-none pr-8"
//                                     placeholder="Insert (English) text here"
//                                     value={inputText}
//                                     onChange={(e) => setInputText(e.target.value)}
//                                 ></textarea>
//                                 {inputText.length > 0 && (
//                                     <button
//                                         className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 -mr-3"
//                                         onClick={handleClearText}
//                                     >
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                             <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                                         </svg>
//                                     </button>
//                                 )}
//                             </div>
//                             <div className="w-full h-[5rem] flex justify-between items-center -mb-5">
//                                 <span className="text-gray-500">{wordCount} words</span>
//                                 <button className="bg-[#80f2ff] hover:bg-[#5edfed] text-black font-normal py-2 px-4 rounded">
//                                     Humanize AI
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="w-full h-[300px] border border-gray-300 bg-white rounded-lg p-4 ">
//                             {/* Content for the second column */}
//                             <p className="text-gray-300">Paraphrased text will appear here</p>
//                         </div>
//                     </div>
//             </div>
//         </div>
//     )
// }

// export default Content
