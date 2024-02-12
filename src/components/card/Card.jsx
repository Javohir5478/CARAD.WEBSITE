import React from 'react'

const Card = ({
    id,
    modeli,
    yili,
    masofa,
    cost,
    photo,
    marka,
    yoqilgi,
    rangi,
    manzil,
    kuzov,
    uzatish,
    uzatma
}) => {
  return (
    <div className='card_container'>
  <img src={photo} alt="" />
      <h1>Modeli : {modeli}</h1>
      <h2> Yili : {yili}</h2>
      <h2>Masofa: {masofa}</h2>
      <h2>Narxi : {cost}</h2>
      <h2>{id}</h2>
      <h2>Marka: {marka}</h2>
      <h2> Yoqilgi : {yoqilgi}</h2>
      <h2>Rangi : {rangi}</h2>
      <h2>Manzil :{manzil}</h2>
        
      



    </div>
  )
}

export default Card;