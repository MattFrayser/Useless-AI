import Head from 'next/head'
// OpenAI Component 
import OpenAIComponent from '../components/OpenAIComponent';

export default function Home() {
  return (
    <>
      <div className = 'background'>
      <main className='mainChat'>
        <h1>Chat GPT 2.0</h1>
        <p> Ask any question or start a conversation. </p>
        <OpenAIComponent />
      </main>
      </div>
    </>
  )
}