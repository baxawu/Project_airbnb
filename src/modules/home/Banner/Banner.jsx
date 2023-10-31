import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import style from "./BannerStyle.module.scss";
import {getLocation, getComeDate, getLeaveDate, getPeople} from "../../../apis/LocationAPI"
import {
  Button,
  ButtonBase,
  Container,
  FormControl,
  Grid,
  NativeSelect
} from "@mui/material";



  
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import banners from "./Banner.data.json";
import ModalComponent from "../../../components/ModalComponent/modal";

export default function Banner() {
 
  const [locationName, setlocationId] = useState(null);
  const [comeId, setComeId] = useState(null);
  const [leaveId, setleaveId] = useState(null);
  const [people, setPeople] = useState("");
  const [number,setNumber] = useState(0);  
  const [checkin,setCheckin] = useState('');
  const [checkout,setcheckout] = useState('');


  const navigate = useNavigate();

  //api lấy danh sách vị trí
  const { data: locations = [] } = useQuery({
    queryKey: ["location"],
    queryFn: getLocation,
  });

  //api lấy danh sách vị trí
  const { data: getShowLocation = [] } = useQuery({
    queryKey: ["getShowLocation", locationName],

    queryFn: () => getLocation(locationName),
    enabled: !!locationName,
  });
  
  const locationSystem = getShowLocation?.viTri || [];
  console.log('locationSystem',getShowLocation);

  const cinemas = locationSystem?.map((cinemas) => {
    return cinemas.cumRapChieu.filter((cinema) => {
      return cinema.maCumRap === comeId;
    });
  });



  
  const handleChangeLocation = (evt) => {
    setlocationId(evt.target.value);
  };
  const handleChangeCome = (evt) => {
    setComeId(evt.target.value);
  };
  const handleChangeLeave = (evt) => {
    setleaveId(evt.target.value);
  };
  const handleChangePeople = (evt) => {
    setPeople(evt.target.value);
  };
const hadleGetDateNgayden =(e)=>{
setcheckout(e.target.value);
}
const hadleGetDateNgaydi =(e)=>{
  setCheckin(e.target.value);
  }
  const handleBuyTicket = () => {
    if (!locationName) {
      Swal.fire("Bạn chưa đặt chỗ", "Vui lòng điền đầy đủ thông tin!");
      return;
    } else if (!comeId) {
      Swal.fire("Bạn chưa chọn ngày đến ", "Vui lòng chọn ngày đến!");
      return;
    } else if (!leaveId) {
      Swal.fire("Bạn chưa chọn ngày đi", "Vui lòng chọn ngày đi!");
      return;
    } else if (!people) {
      Swal.fire(
        "Bạn chưa chọn số lượng",
        "Vui lòng chọn số lượng!"
      );
      return;
    }
    navigate(`/purchase/${people}`);
  };

  //setup slider
  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  //-------

  const settings = {
    dots: true,
    dotsClass: `${style.dotsBanner}`,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Container
      className={style.jss4}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Slider ref={(c) => (slider.current = c)} {...settings}>
        {banners.map((banner) => {
          return (
            <div>
              <div className={style.jss0}>
                <img src={banner.hinhAnh} className={style.jss7} />
              </div>
            </div>
          );
        })}
      </Slider>
      <div className={style.jss8}>
        <ButtonBase className={style.jss9} onClick={previous}>
          <span className={style.jss10}>
            <ArrowBackIosIcon className={style.jss11} />
          </span>
        </ButtonBase>
      </div>
      <div className={style.jss12}>
        <ButtonBase className={style.jss9} onClick={next}>
          <span className={style.jss10}>
            <ArrowForwardIosIcon className={style.jss11} />
          </span>
        </ButtonBase>
      </div>
      <Container
        className={style.jss2}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Grid container className={style.jss3}>
          <Grid item xs={2}>
            <div style={{ height: "100%" }}>
              <FormControl className={style.jss5}>
                <NativeSelect
                  defaultValue={"địa điểm"}
                  className={style.jss1}
                  onChange={handleChangeLocation}
                >
                  <option value={null}>Địa điểm</option>
                  {locations?.map((location) => (
                    <option value={location.id}>{location.tenViTri},{location.tinhThanh},{location.quocGia}</option>
                  ))}
                </NativeSelect>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div style={{ height: "100%" }}>
              <FormControl className={style.jss5}>
          <input className={style.jss5} type="date" placeholder='Ngày đến' onChange={hadleGetDateNgayden} />

                
              </FormControl>
            </div>

          </Grid>
          <Grid item xs={2}>
            <div style={{ height: "100%" }}>
              <FormControl className={style.jss5}>
              <input className={style.jss5} type="date" placeholder='Ngày đi' onChange={hadleGetDateNgaydi} />

              </FormControl>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div style={{ height: "100%" }}>
              <FormControl className={style.jss5}>
              <ModalComponent>
              <div className={style.wrapper}>
            <div className={style.Box1}>
              <h4>Adults</h4>
              <h6>Ages 13 or above</h6>
            </div>
            <div>
              <button onClick={()=>{setNumber(number-1)}}>-</button>{number}<button onClick={()=>{setNumber(number+1)}}>+</button>
            {console.log('num ',number)}
            </div>
           
            
          </div>
              </ModalComponent>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div
              style={{ height: "100%", display: "flex", alignItems: "center" }}
            >
              <FormControl>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#fb4226", padding: "10px 20px" }}
                  className={style.jss6}
                  onClick={handleBuyTicket}
                >
                  ĐẶT CHỖ NGAY
                </Button>
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
