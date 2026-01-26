import React from 'react'

const Home = () => {
  return (
    <div>

      <div className="home-container">
        <div className="home-text">
          <h1>Github Profile</h1>
          <p>View Github user profiles fetched dynamically using {""} <strong>React Router v7 Loaders</strong>. This demonstrates preloading data, smooth navigation and professional UI design</p>
          <p>
            Explore user information such as repositories, followers, and more by entering a Github username in the profile section.
          </p>
        </div>
        <div className="home-image">
          <img src="https://cdn.dribbble.com/users/503139/screenshots/2083086/github_1.gif" alt="Github Profile Viewer" />
        </div>
      </div>
    </div>
  )
}

export default Home