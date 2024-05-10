import React, { useState } from 'react'

const CreateQuiz: React.FC = () => {
    const[topic, setTopic]= useState<string>('')
    const[quesNo, setQuesNo] = useState<number>(0)
    const[ques, setQues]= useState<string[]>([])
    const [ans, setAns] = useState<string[]>([]);

  return (
 <div className="main">
  <form action="">
    <label htmlFor="topic">Enter Topic</label>
    <input type="text" />

    <label htmlFor="quesNo">Enter Question Number</label>
    <input type="number" name="" id="" />

    <label htmlFor="ques">Enter Questions</label>
    <input type="text" />
  </form>
 </div>
  )
}

export default CreateQuiz