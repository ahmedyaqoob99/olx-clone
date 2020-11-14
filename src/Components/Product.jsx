import React,{Component} from 'react';
import image from '../images/image.webp';
import image1 from '../images/image1.webp';
import image2 from '../images/image2.webp';
import image3 from '../images/image3.webp';
import image4 from '../images/image4.webp';
import image5 from '../images/staticmap.png';
import {Carousel} from 'react-bootstrap';

class PriceBox extends Component{
    render(){
        return(
            <div className="border p-3 rounded">
                <h1>Rs 13,000</h1>
                <p className="text-muted">Poco X3, Poco F2 Pro, Mi 10, Mi Note 10 Lite, 9C, 9 Pro, 9s</p>
                <p className="text-muted text-right">Nov 06</p>
            </div>
        )
    }
}

class Map extends Component{
    render(){
        return(
            <div className="border p-3 mt-4 rounded">
                <h3>Posted in</h3>
                <p className="text-muted">DHA Phase 1, Karachi, Sindh</p>
                <img src={image5} alt="" style={{ width:300}} />
            </div>
        )
    }
}

class Detail extends Component{
    render(){
        return(
            <div className="border p-3 rounded">
                <div>
                    <h1>Details</h1>
                    <div>
                        <div>Make</div>
                        <div>Xiaomi</div>
                    </div>
                    <div>
                        <div>Condition</div>
                        <div>New</div>
                    </div>
                </div>
                <hr/>
                <div>
                    <h1>Description</h1>
                    <p>
                        Redmi 8A 2/32= 15,499

                        Redmi 9A 2/32=13,999

                        Redmi 9C 2/32=16,059

                        Redmi 9C 3/64=18,299

                        Redmi 9 3/32= 20,999

                        Redmi 9 4/64= 26,999

                        Redmi 9s 4/64= 35,899

                        Redmi 9s 4/128= 37,799

                        Redmi Note8 4/64=28,899

                        Redmi Note9 4/128=31,699

                        Redmi Note 9 pro 6/128=41,999

                        Poco X3 6/128= 40,499

                        Poco F2 Pro 8/256 =109,999

                        Mi Note 10 lite 8/128=58,999

                        Mi 10 8/256 =141,999
                    </p>
                </div>

            </div>
        )
    }
}

class Product extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="border rounded">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={image}
                                    alt="First slide"
                                    style={{ height: 550 }}
                                    />
                                    <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={image1}
                                    alt="Third slide"
                                    style={{ height: 550 }}
                                    />

                                    <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={image2}
                                    alt="Third slide"
                                    style={{ height: 550 }}
                                    />

                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={image3}
                                    alt="Third slide"
                                    style={{ height: 550 }}
                                    />

                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={image4}
                                    alt="Third slide"
                                    style={{ height: 550 }}
                                    />

                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="border border-dark rounded mt-1">
                            <Detail />
                        </div>
                    </div>
                    <div className="col-4">
                        <PriceBox/>
                        <Map/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;