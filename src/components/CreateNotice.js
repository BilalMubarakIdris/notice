import React, {useState} from "react";
import"./createNotice.css"
import { Link } from "react-router-dom";
import axios from "axios";
function CreateNotice(){
    const [input, setInput] = useState({recipient: "", description: "", date:""});
    const [file, setFile] = useState(null)
    const url = "";

    // function that handle change of my file
    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmitFile = () =>{
        const data = new FormData();
        data.append('file', file);
        axios.post('//adrees', data)
            .then(data => console.log('Success', data))
            .then(error => console.log('Error',error))
    }

    console.log(file)
    // funcction that allow you to intaract with forms  
    const handleChange = (e) => {
            const newInput = {...input};
            newInput[e.target.id] = e.target.value;
            setInput(newInput)
            console.log(newInput)
    }
//  function that submit the store the data on
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(url,{
            recipient: input.recipient,
            description: input.description,
            date: input.date
        })
        .then(res => {
            console.log(res.data)
        })
        setInput({recipient: "", description: "", date:""});
        handleSubmitFile();
    }
    
    return(
        <div className="wrapper-container">
            <form method="post" onSubmit={handleSubmit}>
                <div className="option-container">
                    <select name = "select_classes" className="select">
                        <option>Select classes</option>
                        <option value = "class1">class 1</option>
                        <option value = "class2">class 2</option>
                        <option value = "class3">class 3</option>
                        <option value = "class4">class 4</option>
                    </select>
                    <p className="or">Or</p>
                    <select name = "select_department" className="select">
                        <option>Select Department</option>
                        <option value = "bcs">BCA</option>
                        <option value = "nursen">Nursen</option>
                        <option value = "btech">Btech</option>
                        <option value = "phamarcy">Pharmacy</option>
                    </select>
                </div>
                <div className="textarea-container">
                    <textarea className="textarea" id="recipient" name="recipient"   value = {input.recipient} onChange = {(e) => handleChange(e)} placeholder="Recipients"></textarea>
                    <textarea className="textarea" id="description" name="description"  value = {input.description} onChange = {(e) => handleChange(e)} placeholder="Enter Description"></textarea>
                </div>
                <div className="attach_and_date_container">
                    <div className="attach">
                        <span className="attach">Attach a Link</span>
                       <input name="file" type="file" onChange={handleFile}/>
                       <i className=" icons far fa-file-pdf"></i>
                    </div>
                    <div className="date">
                        <input type="date" value = {input.date} onChange={(e) => handleChange(e)} name="data" id="data"/>
                        <span className="select-date"><i className="icons far fa-calendar-alt"></i>Select Date</span>
                        
                    </div>
                </div>
                <button className="btn btn-submit">Crate Notice</button>
            </form>
            <div className="btn_container">
                <Link className="back" to="/notice">Back</Link>
                <button className="btn btn-send">Send Individually ID</button>
            </div>
        </div>
    )
}

export default CreateNotice;