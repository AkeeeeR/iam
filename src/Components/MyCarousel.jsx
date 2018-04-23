import React, {Component} from 'react';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

export default class MyCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        const {index, direction} = this.state;

        return (
            <React_Bootstrap_Carousel
                activeIndex = {index}
                direction = {direction}
                onSelect = {this.handleSelect}
            >
                <div className="carousel-item">
                    <div className="slide1"></div>
                </div>
                <div className="carousel-item">
                    <div className="slide2"></div>
                </div>
                <div className="carousel-item">
                    <div className="slide3"></div>
                </div>
            </React_Bootstrap_Carousel>
        );
    }
}
