import React from 'react'
import style from './SearchRecent.module.scss'
import  Grid  from '@mui/material/Grid'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function SearchRecent({ linklImg, title, time,id }) {
  const navigate = useNavigate()
  const handleDetailsProduct = (id) => {
    navigate(`/details/${id}`)
}
  return (
    
      <div className={style.placeCard} onClick={() =>  handleDetailsProduct(id)}>
      <div className={style.wrapImg}> <img src={linklImg} alt="Img" /></div>
        <div className={style.placeCardContent} > <h5 className={style.title}>{title}</h5></div>

      </div>

  )
}
