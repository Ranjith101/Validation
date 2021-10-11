import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import './slickdemo.css';  
export class SlickDemo extends Component {  
    render() {  
        var settings = {  
          dots: true,  
          infinite: true,  
          speed: 500,  
          centerMode: true,  
          slidesToShow: 1,  
          slidesToScroll: 1  
          };  
          return (  
            <div>  
            <div class='container' >        
            <div className="row title" style={{marginBottom: "20px"}} >        
            <div class="col-sm-12 btn btn-info">        
            <h1 className="text-danger text-center">Avengers Avenue</h1>   
            </div>        
            </div>    
            </div>  
            <Slider {...settings} >  
              <div className="wdt">  
              <img style={{"height":"40px"}}   src= {'5.jpg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'4.jpg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'3.jpg'} className="img"/>  
              </div >  
              <div className="wdt">  
              <img  className="img" src= {'2.jpg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'1.jpg'} className="img"/>  
              </div>  
            </Slider>  
            </div>  
          );  
        }  
      }  
  
export default SlickDemo  