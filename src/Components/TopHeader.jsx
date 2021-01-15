import React, { Component } from 'react'
import {Col, Container, Row} from 'react-bootstrap';
import { connect } from 'react-redux';
import { facebook_login } from '../store/action'
import { Link } from 'react-router-dom';

class TopHeader extends Component {
    constructor(){
        super()
        this.state = {
            show: true, 
        }
    }
    handleShow()
    {
        if (this.state.show) {
            this.props.facebook_login()
            this.setState({
                show: false
            })
        }
    }

    render() {      
        let users = this.props.current_user;
        function changeState(e) {
            if (e.target.style.textDecoration === 'none') {
                e.target.style.textDecoration = 'Underline';
            }
            else {
                e.target.style.textDecoration = 'none';
            }
        }
        
        return (
            <div className="my-1">
                <Container fluid>
                    <Row>
                        <Col xs sm md={1}>
                            <Link to="/">
                            <svg width="48px" height="48px" viewBox="0 0 1024 1024">
                                <path d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                            </svg>
                            </Link>
                        </Col>
                        <Col className="d-none d-md-block" xs={0} sm={0} md={2}>
                            <form className="form-inline">
                                <div className="form-group">
                                    <input type="search" className="form-control" id="state" placeholder="Enter Province" />
                                </div>
                            </form>
                        </Col>
                        <Col className="d-none d-md-block" xs={0} sm={0} md={6}>
                            <form>
                                <div className="form-group">
                                    <input type="search" className="form-control" id="product" placeholder="Enter Car, Mobiles Phones & More" />
                                </div>
                            </form>
                        </Col>
                        <Col xs sm md={3}>  
                            <div className="p-2" style={{float: 'right'}}>  
                                {users === {} || users === undefined ? 
                                    <a className="font-weight-bold text-dark mr-3" onMouseOver={changeState} onClick={()=>{this.handleShow()}}>Login</a> :
                                    <a className="font-weight-bold text-dark mr-3">{users.name}</a>
                                }

                                {this.state.show ?
                                    <a className="font-weight-bold text-dark ml-3" onClick={()=>{this.handleShow()}}>Sell</a>
                                    :
                                    <Link to="/createProduct" className="text-dark font-weight-bold ml-3" style={{textDecoration: "none"}}>Sell</Link>

                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("state=> ",state) 
    return {
        current_user: state.current_user
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     facebook_login: () => dispatch(facebook_login()),    
// })
  
export default connect(mapStateToProps, {facebook_login})(TopHeader);