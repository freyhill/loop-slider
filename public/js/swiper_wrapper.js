import React from 'react'
import { render } from 'react-dom'

class Silder extends React.Component{
	render(){
		return (
			<div className="swiper-slide">{this.props.children}</div>
			)
	}
}

class Swipe extends React.Component {
    render() {
        return (
         <div className="swiper-container questionwapper" dir="rtl">
	        <div className="swiper-wrapper">
				<Silder>1</Silder>
				<Silder>2</Silder>
				<Silder>3</Silder>
	        </div>
	     </div>   
        	 
        )
    }

}

export default Swipe



  