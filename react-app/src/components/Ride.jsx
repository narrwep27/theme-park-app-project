import React from 'react'

export default function Ride({ name, thrillLevel, minimumHeight, description, imageUrl }) {
  return (
    <div className="ride">
      <img src={imageUrl} alt={name} />
      <div className="ride-details">
        <h3>{name}</h3>
        <p>thrillLevel: {thrillLevel}</p>
        <p>minimumHeight: {minimumHeight}</p>
        <p>description: {description}</p>
      </div>
    </div>
  )
}
