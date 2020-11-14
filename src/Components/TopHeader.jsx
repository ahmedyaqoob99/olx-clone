import React, { Component } from 'react'
import '../css/topHeader.css';
import { BsSearch } from 'react-icons/bs';
import {Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import { facebook_login } from '../store/action'

class TopHeader extends Component {
    constructor(){
        super()
        this.state = {
            show: false
        }
    }
    handleShow()
    {
        this.setState(
            {
                show: !this.state.show
            }
        )
    }

    render() {      

        function changeState(e) {
            if (e.target.style.textDecoration == 'none') {
                e.target.style.textDecoration = 'Underline';
            }
            else {
                e.target.style.textDecoration = 'none';
            }
        }
        
        console.log("Props==>",this.props);
        return (
            <div className="bg-light">
                <div className="container-fluid pt-2 mx-4">
                    <div className="row">
                        <div className="col-4">
                            <div className="row">
                                <div className="col-2">
                                    <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
                                </div>
                                <div className="col-2">
                                    <form class="form-inline">
                                        <div class="form-group">
                                            <input type="search" class="form-control" id="state" placeholder="Enter Province" />
                                            <button type="button" class="btn btn-dark"><BsSearch/></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col-8">
                                    <form>
                                        <div class="form-group">
                                            <input type="search" class="form-control" id="product" placeholder="Enter Car, Mobiles Phones & More" />
                                        </div>
                                    </form>
                                </div>
                                <div className=" text-right">
                                    <div class="_14lZ9  _110yh">
        <a onMouseOver={changeState} onClick={()=>{this.handleShow()}} className="text-dark font-weight-bold mr-3">Login</a>
                                        <a class="_21nYN" rel="" data-aut-id="btnSell" href="/post">
                                            <svg width="104" height="48" viewBox="0 0 1603 768" class="_3V9PS">
                                                <g>
                                                    <path class="_2bClX _12yOz" d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z">

                                                    </path>
                                                    <path class="_2bClX _YBz-" d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z">

                                                    </path>
                                                    <path class="_2bClX _3uYj7" d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z">

                                                    </path>
                                                    <path class="_2bClX BfroU" d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z">

                                                    </path>
                                                </g>
                                            </svg>
                                            <div class="DrSmZ">
                                                <span onClick={()=>{this.handleShow()}}>
                                                    <svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
                                                        <path class="rui-367TP" d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"></path>
                                                    </svg>
                                                </span>
                                                <span onClick={()=>{this.handleShow()}}>Sell</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <Modal show={ this.state.show } onHide={()=>{this.handleShow()}}>
                    <Modal.Header closeButton className="border-bottom-0">
                    </Modal.Header>
                    <Modal.Body>
                    <button class="btn btn-default font-weight-bold border-dark m-2" style={{width: "97%"}}>Continue with phone</button><br/>
                    <button onClick={() => this.props.facebook_login()} class="btn btn-default font-weight-bold border-dark m-2" style={{width: "97%"}}>Continue with facebook</button><br/>
                    <button class="btn btn-default font-weight-bold border-dark m-2" style={{width: "97%"}}>Continue with google</button><br/>
                    <button class="btn btn-default font-weight-bold border-dark m-2" style={{width: "97%"}}>Continue with email</button><br/>
                    <p className="my-3 mx-5">We won't share your personal details with anyone</p>
                    <div className="my-3 mx-5"><p className="d-inline-block text-muted">If you continue, you are accepting</p> <span className="text-primary">OLX Terms and Conditions and Privacy Policy</span></div>                    
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    current_user: state.current_user
})

const mapDispatchToProps = (dispatch) => ({
    facebook_login: () => dispatch(facebook_login()),    
})
  
export default connect(mapStateToProps,mapDispatchToProps)(TopHeader);