import React, { useState } from 'react';

const OpenAIComponent = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submission behavior
      fetchGeneratedText(); // Call your function to handle form submission
    }
  };

  const fetchGeneratedText = async () => {
    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch generated text: ${response.statusText}`);
      }

      const data = await response.json();

      if (data && data.error) {
        throw new Error(`API error: ${data.error}`);
      }

      const trimmedData = data.trim();
      setGeneratedText(trimmedData);

      const updatedChatLog = [...chatLog, { prompt, response: trimmedData }];
      setChatLog(updatedChatLog);

      setPrompt('');
    } catch (error) {
      setGeneratedText(`Error: ${error.message}`);
    }
  };

  return (
    <div className = 'background'>
    <div className="example">
      <div className="response">
        <ul>
          {chatLog.map((item, index) => (
            <li key={index} className='chat'>
              <div class='promptOutput'> {item.prompt}</div>
              <div class='responseOutput'>{item.response}</div> 
            </li>
          ))}
        </ul>
      </div>
      <div className="prompt">
        <div>
          <label htmlFor="prompt"> </label>
          <input
            type="text"
            id="prompt"
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
            placeholder="Type to chat..."
            onKeyPress={handleKeyPress}
          />
        </div>
        <button onClick={fetchGeneratedText}>Submit</button>
      </div>
    </div>
    </div>
  );
};

export default OpenAIComponent;
