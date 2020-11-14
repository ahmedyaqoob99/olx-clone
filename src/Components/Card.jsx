import React, { Component } from 'react'

class CardContent extends Component {
    render() {
        return (
            <div className="col-3 mb-3">
                <div class="card">
                    <img class="card-img-top" src="https://apollo-singapore.akamaized.net/v1/files/j9drjdc4r0zo3-PK/image;s=300x600;q=60" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title mt-0 mb-0">Rs 1,675,000</h5>
                        <p class="card-text mt-0 mb-0">2019 - 6,821 km</p>
                        <p class="card-text text-muted mt-0 mb-0">Suzuki Cultus 1.0 VXR 2019</p>
                        <div class="text-right">
                            <small class="text-muted">25 Sep</small>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default class Card extends Component {
    render() {
        return (
            <div>
                    <div className="container">
                        <div className="row">        
                            <CardContent />
                            <CardContent />
                            <CardContent />
                            <CardContent />
                            <CardContent />
                        </div>
                    </div>
            </div>
        )
    }
}
