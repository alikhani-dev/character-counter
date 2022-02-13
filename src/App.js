import React, { useState } from 'react'
import { countDot, countWords, countSpace, countLength, countParagraph } from './helper'

const App = () => {
	const [input, setInput] = useState('')

	const handelChange = (e) => setInput(e.target.value)

	return (
		<div className='container'>
			<h1>fast character counter</h1>
			<div>
				<textarea value={input} onChange={handelChange} rows={10} cols={90} autoFocus />
			</div>
			<div className='function'>
				<p> Dot : {countDot(input)}</p>
				<p> Words : {countWords(input)}</p>
				<p> Spaces : {countSpace(input)}</p>
				<p> Characters : {countLength(input)}</p>
				<p> Paragraphs : {countParagraph(input)}</p>
			</div>
		</div>
	)
}

export default App
