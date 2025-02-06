interface Parameters {
  lead?: string, 
  paragraph: string
}


export default function TextWithLead({lead, paragraph}: Parameters) {

  return (
    <div className="w-full">
      {lead && <p>{lead}</p>} 
      <h2>{paragraph}</h2>
    </div>
  )
}