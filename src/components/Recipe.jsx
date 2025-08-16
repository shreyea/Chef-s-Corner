import ReactMarkdown from "react-markdown"
 
export default function Recipe(props) {
  return (

<section className='recipe'>
    
    <h2>Chef Recommends:</h2>
     <ReactMarkdown>{props.recipe}</ReactMarkdown>
</section>
  )}