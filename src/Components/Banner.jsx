import React, { Component } from 'react'
import '../css/banner.css';

export default class Banner extends Component {
    render() {
        return (
            <div className="mb-5">
                <img src="https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg" className="banner" alt="Responsive image"></img>
            </div>
        )
    }
}
