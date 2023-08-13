import { Box, Button, ButtonGroup } from "@mui/material";

//Icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import { ShowDateChip, ShowInfoBox, ShowTitle } from "../../components/styledComponents";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { POSTER_500,POSTER_BACKUP } from "../../constants/constants";

export function generatePath(show,mediaType) {
  if (!mediaType) {
    if (show.media_type) {
      if (show.media_type === "movie") {
        return `movie/`;
      } else {
        return `tv/`;
      }
    } else if (show.name) {
      return `tv/`;
    } else {
      return "movie/";
    }
  }
  else {
    return ""
  }
}

function DataSlider({ data }) {
  const [swiperSlide, setSwiperSlide] = useState(null);
  const [lastSlide, setLastSlide] = useState(false);
  const [firstSlide, setFirstSlide] = useState(false);

  const { mediaType } = useParams();

  const handleSlideChange = (swiper) => {
    if (swiper.isBeginning) {
      setFirstSlide(true);
    } else if (swiper.isEnd) {
      setLastSlide(true);
    } else {
      setFirstSlide(false);
      setLastSlide(false);
    }
  };
  if (!data?.length) {
    return <p>...</p>;
  }
  return (
    <Box my={4}>
      <Box position={"absolute"} top={15} right={20}>
        <Box sx={{ boxShadow: 1, backgroundColor: "transparent", borderRadius: "1rem" }}>
          <ButtonGroup>
            <Button sx={{ color: "white", borderRadius: "1rem", bgcolor: "custom.secondary" }} size="small" onClick={() => swiperSlide.slidePrev()}>
              {firstSlide ? <FirstPageIcon /> : <ChevronLeftIcon />}
            </Button>

            <Button sx={{ color: "white", borderRadius: "1rem", bgcolor: "custom.secondary" }} size="small" onClick={() => swiperSlide.slideNext()}>
              {lastSlide ? <LastPageIcon /> : <ChevronRightIcon />}
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Swiper
        modules={[FreeMode]}
        freeMode
        grabCursor
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        onSwiper={(swiper) => setSwiperSlide(swiper)}
      >
        {data?.map((show) => {
          return (
            <SwiperSlide key={show.id} style={{ cursor: "pointer" }}>
              <Link to={`${generatePath(show,mediaType)}${show.id}`}>
                <Box sx={{ position: "relative" }}>
                  <ShowDateChip label={show.release_date?.split("-")[0] || show.first_air_date?.split("-")[0]} size="medium" />
                  <img width={"100%"} height={"100%"} loading="lazy" style={{ objectFit: "cover", borderRadius: "1rem", filter: "blur(.5px)" }} src={show.poster_path ? POSTER_500 + show.poster_path : POSTER_BACKUP} />
                  <ShowInfoBox>
                    <ShowTitle>{show.title || show.name}</ShowTitle>
                  </ShowInfoBox>
                </Box>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}

export default DataSlider;
