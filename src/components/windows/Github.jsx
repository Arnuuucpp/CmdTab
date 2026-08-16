import React from 'react'
import MacWindow from './components/windows/MacWindow'
import GithubData from  "../../assets/github.json"

function GitCard({data}) {
    
}


const Github = () => {
  return (
    <MacWindow>
        <div>
            {GithubData.map(projects => {
                return <GitCard/>
            })}
        </div>
    </MacWindow>
  )
}

export default Github