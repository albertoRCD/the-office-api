import React from 'react'

export const Item = (props) => {
  return (
    <div>

    <h1>{props.id}. {props.name}</h1>

    <h2>Real Name: {props.realname}</h2>
    <h2>Seasons: {props.seasons}</h2>

    
    </div>
  )
}
