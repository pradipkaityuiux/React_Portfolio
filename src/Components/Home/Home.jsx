import React from 'react'
import Social from './Social'

function Home() {
  return (
    <section className='home section' id='home'>
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social/>
            </div>
        </div>
    </section>
  )
}

export default Home