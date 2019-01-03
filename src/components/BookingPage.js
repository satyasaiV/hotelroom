import React, { Component } from 'react'
import './bookingpage.css'


class BookingPage extends Component {
    state = {
        roomCount: 1,
        adultCount: 1,
        childCount: 0, 
    }
    onRoomIncrease() {
        let { roomCount: rCount, adultCount: aCount } = this.state;
        let persons = this.state.childCount + this.state.adultCount;
        if (rCount < 5) {
            rCount = rCount + 1;
            if (persons === (rCount - 1)) {
                aCount = aCount + 1;
            }
        }
        this.setState({ roomCount: rCount, adultCount: aCount });
    }
    onRoomDecrease() {
        let { roomCount: rCount, adultCount: aCount, childCount: cCount } = this.state;
        let persons = this.state.adultCount + this.state.childCount;

        if (rCount > 1) {
            rCount = rCount - 1;
            if (cCount > 0 && persons > (rCount * 4)) {
                let difference = persons - (rCount * 4);
                if (cCount > difference) {
                    cCount = cCount - difference;
                }
                else {
                    let adultsDifference = difference - cCount;
                    cCount = 0;
                    aCount = aCount - adultsDifference;
                }
            } else {
                if (aCount > rCount * 4)
                    aCount = rCount * 4;
            }
        }
        this.setState({ roomCount: rCount, adultCount: aCount, childCount: cCount });
    }
    onAdultsIncrease() {
        let { roomCount: rCount, adultCount: aCount, childCount: cCount } = this.state;
        let maxCount = rCount * 4;
        let persons = aCount + cCount;
        if (aCount > 0 && persons < 20) {
            aCount = aCount + 1;
            if (persons === maxCount) {
                rCount = rCount + 1;
            }
        }
        this.setState({ roomCount: rCount, adultCount: aCount });
    }
    onAdultsDecrease() {
        let { roomCount: rCount, adultCount: aCount, childCount: cCount } = this.state;
        if (aCount > 1) {
            aCount = aCount - 1;
            let persons = aCount + cCount;
            if (persons < rCount) {
                rCount = rCount - 1;
            }
        }
        this.setState({ roomCount: rCount, adultCount: aCount });
    }
    onChildIncrease() {
        let { roomCount: rCount, childCount: cCount } = this.state;
        let persons = this.state.adultCount + this.state.childCount;
        let maxCount = rCount * 4;
        if (persons < 20) {
            cCount = cCount + 1;
            if (persons === maxCount) {
                rCount = rCount + 1;
            }
        }
        this.setState({ roomCount: rCount, childCount: cCount });
    }
    onChildDecrease() {
        let { roomCount: rCount, adultCount: aCount, childCount: cCount } = this.state;
        if (cCount > 0) {
            cCount = cCount - 1;
            let persons = aCount + cCount;
            if (persons < rCount) {
                rCount = rCount - 1;
            }
        }
        this.setState({ roomCount: rCount, childCount: cCount });
    }
    render() {
        const { roomCount, adultCount, childCount } = this.state;
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <i className="fas fa-users default-color" ></i>
                        <span className="default-color" >Choose number of</span><span className="bold">people</span>
                        <div className="content">
                            <div className="row col-style">
                                <div className="col-12">
                                    <div className="leftfloat">
                                        <i className="fas fa-bed "></i> Rooms
                                    </div>
                                    <div className="rightfloat">
                                        <button className="btn-decrease" disabled={roomCount === 1} onClick={this.onRoomDecrease.bind(this)}><i className="fas fa-minus icon-color" id="none"></i></button>
                                        <span id="roomnumber">{this.state.roomCount}</span>
                                        <button className="btn-increase" disabled={roomCount === 5} onClick={this.onRoomIncrease.bind(this)}><i className="fas fa-plus icon-color" id="none1"></i></button>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="row col-style">
                                <div className="col-12 ">
                                    <div className="leftfloat">
                                        <i className="fas fa-user " ></i> Adults
                                    </div>
                                    <div className="rightfloat">
                                        <button className="btn-decrease" disabled={adultCount === 1} onClick={this.onAdultsDecrease.bind(this)}><i className="fas fa-minus icon-color" id="none2"></i></button>
                                        <span id="adultnumber">{this.state.adultCount}</span>
                                        <button className="btn-increase" disabled={adultCount + childCount === 20} onClick={this.onAdultsIncrease.bind(this)}><i className="fas fa-plus icon-color" id="none3"></i></button>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="row col-style">
                                <div className="col-12">
                                    <div className="leftfloat">
                                        <i className="fas fa-child" ></i> Children
                                    </div>
                                    <div className="rightfloat">
                                        <button className="btn-decrease" disabled={childCount === 0} onClick={this.onChildDecrease.bind(this)}><i className="fas fa-minus icon-color"></i></button>
                                        <span id="childnumber">{this.state.childCount}</span>
                                        <button className="btn-increase" disabled={adultCount + childCount === 20} onClick={this.onChildIncrease.bind(this)}><i className="fas fa-plus icon-color"></i></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookingPage;