import React, { useState } from 'react'

function ContactCard(){
    const [home, homeButton] = useState([]);
    const [submit, submitButton] = useState([]);
    const [add, addButton] = useState([]);

        function returnHome (){

        }
        function addNewContact (){
            
        }

        function  submitNewContact(){
            
        }





    return (
    <div className="contact-card col-xl-4 col-sm-6 mb-3">
        <div className="bg-white rounded py-4 px-4 contact-card-border">
            <div className="text-center">
                <label form="Name" id="exampleInputHeader">First and Last Name </label><br></br>
                <input type="name" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Enter email"></input><br></br>
            </div><br></br>
        
            <div className="row mt-2  icons-margin-left ">
                <div className="col-12">
                    <div className="d-flex mb-2">
                        <label form="exampleInputEmail" id="exampleInputHeader">Email address</label><br></br>
                        <input type="email" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Please enter your email"></input><br></br>
                    </div><br></br>
                    <div className="d-flex mb-2">
                        <label form="exampleInputAddress" id="exampleInputHeader">Address</label><br></br>
                        <input type="address" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Please enter your Address"></input><br></br>
                    </div><br></br>
                    <div className="d-flex mb-2">
                        <label form="exampleInputPhone" id="exampleInputHeader">Phone</label><br></br>
                        <input type="phone" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Please Enter your Phone Number"></input><br></br>
                    </div>
                </div>
            </div><br></br>
        
            <div className="row mt-3">
                <div className="col-md-6">
                    <div>
                        <button className="btn btn-primary icon-button">
                            Submit Contact 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  };
export default ContactCard