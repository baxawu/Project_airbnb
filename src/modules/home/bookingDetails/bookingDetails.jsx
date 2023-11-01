import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query'; // Fix the import statement
import { useParams } from 'react-router-dom';
import { datPhong, getDetails } from '../../../apis/productAPI';
import { Box } from '@mui/material';
import style from './bookingDetails.module.scss'
import RulaCompo from '../../../components/RuleCompo/RulaCompo';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import DatePickerComp from '../../../components/DateSpickerCom/DateSpickerCom';
import ModalComponent from '../../../components/ModalComponent/modal';
import FormControl from '../../../components/FormControl/FormControl';
export default function BookingDetails() { // Rename the component to start with an uppercase letter
  const { detailsid } = useParams();
const [timein,setTimeIn ] = useState('')
const [timeout,setTimeOut ] = useState('')
  const { data: products = [] } = useQuery({
    queryKey: ["product", detailsid],
    queryFn: () => getDetails(detailsid),
  });
  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return (
        datPhong()
      )
    },
  })
  return (
    <Grid container spacing={6} maxWidth={1200} margin={'0 auto'}>
      <div>
        <h3 className={style.PageTitle}>{products.tenPhong}</h3>
        <div className={style.wrapImg}>
          <img src={products.hinhAnh} alt="" />
        </div>
       <Grid container spacing={4}>
       <Grid item xs={7}>

<div >
  <p>{products.khach} guests</p>
  <p>{products.khach} guests</p>
  <p>{products.khach} guests</p>
</div>
<div>
  <div>
    <RulaCompo text={'You can check in with the doorman.'} name={'Self check-in'} icon={<MeetingRoomIcon />} />
    <RulaCompo text={'You can check in with the doorman.'} name={'Self check-in'} icon={<MeetingRoomIcon />} />
    <RulaCompo text={'You can check in with the doorman.'} name={'Self check-in'} icon={<MeetingRoomIcon />} />
  </div>
  <div>
    {products.moTa}
  </div>
</div>
</Grid>
<Grid item xs={5}>
<div>
  <Box>
    <div>
      <h2>VND</h2><p>/day</p>
      <div style={{display:'flex', gap:4}}>
        <DatePickerComp  setTime={setTimeIn}/>
        <DatePickerComp  setTime={setTimeOut}/>
      </div>
      <div>
        <ModalComponent>
         <FormControl />
        </ModalComponent>

      </div>
      <button className={style.wrapperBtn}>Đặt phòng</button>
      <div className={style.gia}><span>VND 19 x 1 days</span>
        <div className={style.gia}>
        </div>19 VND</div>
        <div className={style.gia}><span>Service fee </span>
        <div>
        </div>{products.giaTien} VND</div>
    </div>
    <div className={style.gia}>
      <span>Thành Tiền</span> <span>1000 VND</span>
    </div>
  </Box>
</div>
</Grid>
       </Grid>
      </div>
    </Grid>
  );
}
