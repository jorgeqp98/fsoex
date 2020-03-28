import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)

    const [statesList, setStatesList] = useState([0, 0, 0, 0, 0, 0])

    const handlePickRandom = () => () => setSelected( Math.round( Math.random() * 5 ));

    const handleVote = () => () => {
        const copyStatesList = [...statesList]
        copyStatesList[selected] += 1;
        setStatesList(copyStatesList)
    }

    const maxVoted = Math.max(...statesList)
    const maxVotedIndex = statesList.indexOf(maxVoted)

    return (
        <>
            <div>
                {props.anecdotes[selected]}
                <p>This anecdote has {statesList[selected]} votes</p>
            </div>
            <div>
                <button onClick={handlePickRandom()} > Another anecdote </button>
                <button onClick={handleVote()}> Vote </button>
            </div>
            <div>
                <h2>Most voted anecdote:</h2>
                {props.anecdotes[maxVotedIndex]}
                <p>It has {statesList[maxVoted]} votes</p>
            </div>
        </>
    )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

