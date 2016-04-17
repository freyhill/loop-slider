import React from 'react'
import { render } from 'react-dom'
import Head from './head.js'
import Foot from './foot.js'
import Swipe from './swiper_wrapper.js'
import $ from 'webpack-zepto'

class App extends React.Component {
    render() {
        return ( 
        	< div className="question-main">
            	<Head> < /Head> < Swipe /> < Foot > < /Foot> 
            < /div>	
        )
    }
	
	componentDidMount(){
		 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
	}    

}




render(( < App > < /App>),document.getElementById("content"));
