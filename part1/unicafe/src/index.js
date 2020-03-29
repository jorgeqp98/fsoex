import React, {useState} from 'react';
import ReactDOM from 'react-dom';



const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const Statistic = ({text, whatCounter}) => {
  return (
      <tr>
        <td>{text}:</td> 
        <td>{whatCounter}</td>
      </tr>
  )
} 

const Statistics = ({allCounters}) => {
  if (allCounters.Total === 0){
    return (
      <div>
        <h2>Statistics</h2>
        <p>No Stats to show: Start clicking</p>
      </div>
    )
  } else {
    return (
      <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <Statistic text="Good" whatCounter={allCounters.Good} />
          <Statistic text="Neutral" whatCounter={allCounters.Neutral} />
          <Statistic text="Bad" whatCounter={allCounters.Bad} />
          <Statistic text="Total Clicks" whatCounter={allCounters.Total} />
          <Statistic text="Average" whatCounter={allCounters.Average} />
          <Statistic text="'Good' answers"  whatCounter={allCounters.GoodPercentage} />
        </tbody>
      </table>
    </div>
    )
  } 
}



const App = () => {
  
  const [counterGood, setGood] = useState(0);
  const [counterNeutral, setNeutral] = useState(0);
  const [counterBad, setBad] = useState(0);
  const [counterAvr,setAvr] = useState(0);

  

  const handleClick = (whatCounter, whatSetter, valueToAdd) => () => {
      whatSetter(whatCounter + 1);
      setAvr(counterAvr + valueToAdd);
  }
 
  const totalClicks =  counterBad + counterNeutral + counterGood
  const averageClicks  =  counterAvr / totalClicks
  const goodPercentage = counterGood / totalClicks * 100 + "%"
  

  const allCounters = {
    Good: counterGood,
    Bad: counterBad,
    Neutral: counterNeutral,
    Total: totalClicks,
    Average: averageClicks,
    GoodPercentage: goodPercentage
  }
  
  return (
    <>
    <div>
      <h2>Give feeback</h2>
      <Button text="Good" handleClick={handleClick(counterGood, setGood, 1)} />
      <Button text="Neutral" handleClick={handleClick(counterNeutral, setNeutral, 0)} />
      <Button text="Bad" handleClick={handleClick(counterBad, setBad, -1)} />
    </div>
    <Statistics allCounters={allCounters} />
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById("root")
)