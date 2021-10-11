import React,{Component} from 'react';

class ContactUs extends Component{
     constructor(){
         super();
         this.state = {
             errorList:[],
             fieldList:{},
             responsemsg:""
         }
     }

     //only one function to pick the value of all fields
     pickValue = (obj)=>{
         let fieldList =this.state.fieldList;
         fieldList[obj.target.name]=obj.target.value; //fieldlist{name=['ram'],mobile:['9566443778'],email:['ram@rm.com']}
         this.setState({
             fieldList
         })
     }

     save = () =>{
         let formStatus = true;
         let fieldList = this.state.fieldList;
         let errorList = this.state.errorList;
         if (!fieldList["fname"]) {
             formStatus = false;
             errorList["nameError"] = "Please Enter Name !";
         }else{
             errorList["nameError"] = "";
         }
         //mobile Validation
         let mpattern = /^[6-9]\d{9}$/; //starting number 6-9 ,10 digits
         if (! mpattern.test (fieldList["mobile"] ) ) {
            formStatus = false;
            errorList["mobileError"] = "Please Enter Mobile Number !";
        }else{
            errorList["mobileError"] = "";
        }
        //mail validation
        if (! fieldList["password"]) {
            formStatus=false;
            errorList["passError"] = "Please Enter Your Pass !";
        }else{
            errorList["passError"] = "";
        }
        //city validation
        if (! fieldList["city"]) {
            formStatus=false;
            errorList["cityError"] = "Please Select Your City !";
        }else{
            errorList["cityError"] = "";
        }

        //address validation
        if (! fieldList["message"]) {
            formStatus=false;
            errorList["messageError"] = "Please Type Your Message ! "
        }else{
            errorList["messageError"]="";
        }
        if (formStatus == true) {
            var msg = "Please wait processing...";
        }else{
            var msg = "Invalid input"
        }
        this.setState({
            errorList,
            responsemsg : msg
        })
     }

     render(){
         return(
             <div className="container mt-3">
                 <div className="row">
                     <div className="col-lg-4 offset-4">
                          <h2 className="text-center text-primary"> Form Validation </h2>
                           <em className="text-danger"> * Marked fields are mandatory</em>
                           <p className="text-primary text-center">{this.state.responsemsg}</p>
                           <div className="mb-3">
                                 <label> Your Full Name <em className="text-danger">*</em></label>
                                 <input type="text" className="form-control" name="fname" onChange={this.pickValue}/>    
                                 <small className="text-danger">{this.state.errorList.nameError}</small> 
                           </div> 
                           <div className="mb-3">
                                 <label> Your Mobile Number <em className="text-danger">*</em></label>
                                 <input type="text" className="form-control" name="mobile" onChange={this.pickValue}/>    
                                 <small className="text-danger">{this.state.errorList.mobileError}</small>
                           </div> 
                           <div className="mb-3">
                                 <label> Your E-mail<em className="text-danger">*</em></label>
                                 <input type="email" className="form-control" name="email" onChange={this.pickValue}/>    
                                 <small className="text-danger">{this.state.errorList.emailError}</small> 
                           </div>
                           <div className="mb-3">
                                 <label> Password<em className="text-danger">*</em></label>
                                 <input type="password" className="form-control" name="password" onChange={this.pickValue}/>    
                                 <small className="text-danger">{this.state.errorList.passError}</small> 
                           </div>
                           
                            
                           <div className="text-center">
                               <button className="btn btn-success" onClick={this.save}> Send Message</button>
                           </div>
                     </div>
                 </div>
             </div>
         )
     }
}

export default ContactUs;