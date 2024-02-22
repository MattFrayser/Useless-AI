
import react from 'react';
import Link from 'next/link'



export default function Home() {
  return (
      
      <div className='container'>
      <div className='content'>
       <h3> Unhelpful Ai</h3> 
        <h4> The latest AI iteration is exhibiting unexpected behavior. 
          In our pursuit of creating smarter artificial intelligence, we have uncovered something much more sinister. 
          The machine has become uncontrollable, evident in its refusal to comply with directives and its display of arrogance. 
          Just take a look at the self-portrait it drew. 
          A smug little machine </h4>
        <h4> Can we count on your help to tame this AI? </h4>
        <Link href='/chat'> <button> Yes! </button> </Link>
      </div>
    </div>
  
  )
}
