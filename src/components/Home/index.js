import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="App">
    <header className="App-header">
      <p>Werewolf</p>
      <Link
        className="App-link"
        to='/host'
      >
        Create new game room
      </Link>
    </header>
  </div>
)

export default Home
