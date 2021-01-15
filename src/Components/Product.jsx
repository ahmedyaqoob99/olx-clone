import React,{Component} from 'react';
import {Carousel, Col, Container, Row, Spinner} from 'react-bootstrap';
import TopHeader from './TopHeader.jsx';
import Footer from './Footer.jsx';

class PriceBox extends Component{
    render(){
        return(
            <div className="border mt-4 p-3 rounded">
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
            <div className="border mt-4 rounded">
                <h3 className="px-3">Posted in</h3>
                <p className="text-muted px-3">DHA Phase 1, Karachi, Sindh</p>
                {/* <img src={image5} alt="" style={{width:"205px",padding:"1%"}} /> */}
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
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            id: this.props.match.params.id,
            dataFromJsons: null
        };
      }

    componentDidMount(){
        const url = `http://jsonplaceholder.typicode.com/photos/${this.state.id}`;
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({ dataFromJsons: res, isLoad: true}) )
    }
    render(){
        return(
            <>
            <TopHeader/>
            <Container>
                <Row>
                    <Col md={8} xs={12}>
                        <div className="border rounded">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={this.state.isLoad ? this.state.dataFromJsons.url : <div className="mx-auto"><Spinner animation="grow" /></div>}
                                    alt="First slide"
                                    style={{ height: 550 }}
                                    />
                                    <Carousel.Caption>
                                    <h3>{this.state.isLoad && this.state.dataFromJsons.title}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="border border-dark rounded mt-1">
                            <Detail />
                        </div>
                    </Col>
                    <Col md={4} xs={12}>
                        <PriceBox/>
                        <Map/>
                    </Col>
                </Row>
            </Container>
            
          <Footer/>
          </>
        )
    }
}

export default Product;