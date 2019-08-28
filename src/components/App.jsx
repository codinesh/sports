import React, { useEffect } from 'react'
import Header from './Header'
import Landing from './Landing'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  useEffect(() => {
    console.log('App')
  }, [])

  return (
    <div className='pagecontainer'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

const Content = props => {
  return (
    <main className='content'>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/landing-page' component={Landing} />
        <Route exact path='/profile-page' component={Another} />
        <Route exact path='/signin-page' component={Another} />
      </Switch>
    </main>
  )
}

const Another = () => {
  return (
    <>
      <main>
        <div className='position-relative'>
          <section className='section section-lg'>
            <div>Another page...</div>
            <div>Another page...</div>
            <div>Another page...</div>
            <div>Another page...</div>
            <div>Another page...</div>
            <div>Another page...</div>
            <div>Another page...</div>
          </section>
        </div>
      </main>
    </>
  )
}

export { Content, Another }
export default App
