import React from 'react'
import ReactDOM from 'react-dom'
import Parent from '../components/Parent'

function App(){
    return (
        <Parent />
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)