import React, {Component,Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
class ClientReview extends Component {
    render(){
        var settings = {
            autoplaySpeed:2000,
            autoplay:true,
            dots: true,
            infinite: false,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            verticalSwiping:true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
       
        return(
            <Fragment>

            </Fragment>

        );
    }
   
}


export default  ClientReview;
