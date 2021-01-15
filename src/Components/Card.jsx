import React, { Component } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class CardContent extends Component {
    constructor() {
        super();
        this.state = {
            isLoad: false,
            dataFromJson: []
        };
      }

    componentDidMount(){
        const url = "http://jsonplaceholder.typicode.com/photos";
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({ dataFromJson: [res], isLoad: true}) )
    }
    render() {
        return (
            <>
                          
            {this.state.isLoad ? 
                this.state.dataFromJson[0].map((v,i) => {
                    return(
                        <>
                        <Col xs md={3}>
                        <Link to={`/product/${v.id}`} style={{ textDecoration: "none" }}>
                            <div className="card m-2" key={v.id}>
                                <img className="card-img-top" src={v.url} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title mt-0 mb-0">Rs 1,675,000</h5>
                                    <p className="card-text mt-0 mb-0">2019 - 6,821 km</p>
                                    <p className="card-text text-muted mt-0 mb-0">{v.title}</p>
                                    <div className="text-right">
                                        <small className="text-muted">25 Sep</small>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        </Col>
                        </>
                    )
                })
                : <div className="mx-auto"><Spinner animation="grow" /></div>
            }
            </>
        )
    }
}

export default class Card extends Component {
    render() {
        return (
            <div>
                    <Container>
                        <Row>         
                            <CardContent/>
                        </Row>
                    </Container>
            </div>
        )
    }
}
