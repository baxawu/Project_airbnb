import { Grid } from '@mui/material'
import React, { useState } from 'react'
import FormSoNguoi from '../FormSoNguoi/FormSoNguoi'

export default function FormControl() {

  const khach = [
    { name: "Ages 13 or above", title: 'Adults' },
    { name: "Ages 13 or above", title: 'Adults' },
    { name: "Ages 13 or above", title: 'Adults' },
    { name: "Ages 13 or above", title: 'Adults' },
  ]
  return (
    <div>
        {khach.map((item) => {
          return (
            <Grid container  >
              <Grid item xs={8} sx={{display:'flex'}}>
              <div>
                <p>{item.name}</p>
                <p>{item.title}</p>
              </div>
            </Grid>
              <Grid item xs={4}>
                <FormSoNguoi />
              </Grid>
      </Grid>
          )
        })}

    </div>
  )
}
