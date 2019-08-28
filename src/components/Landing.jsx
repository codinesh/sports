import React, { useEffect, useState } from 'react'
import axios from '../apiHelper'

const Landing = () => {
  let [state, setState] = useState()
  useEffect(() => {
    axios.get('/facts').then(res => {
      if (res.status == 200) {
        let facts = res.data.all

        setState(
          facts.map(d => {
            let fact = { _id: d._id, text: d.text, upvotes: d.upvotes }
            return fact
          })
        )
      }
      console.log(state)
    })
  }, [state])
  return (
    <div>
      {state == null || state == undefined || state.length == 0 ? (
        <div>Loading... </div>
      ) : (
        <div>
          {state.map(fact => (
            <span className='tesa' key={fact._id}>
              {fact.text}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default Landing
