import React, {useState} from "react";
// import"./createNotice.css"
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
            date: parseInt(input.date)
        })
        .then(res => {
            console.log(res.data)
        })
        setInput({recipient: "", description: "", date:""});
        handleSubmitFile();
    }
    
    return(
        <div className="p-8 w-full flex justify-center flex-col items-center">
            <form method="post" onSubmit={handleSubmit}>
                <div className="flex space-x-12 mb-6 m-2">
                    <select name = "select_classes" className="px-20 text-lg">
                        <option>Select classes</option>
                        <option value = "class1">class 1</option>
                        <option value = "class2">class 2</option>
                        <option value = "class3">class 3</option>
                        <option value = "class4">class 4</option>
                    </select>
                    <p className="text-2xl">Or</p>
                    <select name = "select_department" className="px-20 text-lg">
                        <option>Select Department</option>
                        <option value = "bcs">BCA</option>
                        <option value = "nursen">Nursen</option>
                        <option value = "btech">Btech</option>
                        <option value = "phamarcy">Pharmacy</option>
                    </select>
                </div>
                <div className="flex">
                    <textarea className="p-3 w-96 h-40 m-1" id="recipient" name="recipient"   value = {input.recipient} onChange = {(e) => handleChange(e)} placeholder="Recipients"></textarea>
                    <textarea className="p-3 w-96 h-40 m-1" id="description" name="description"  value = {input.description} onChange = {(e) => handleChange(e)} placeholder="Enter Description"></textarea>
                </div>
                <div className="flex space-x-4 my-6 ">
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
                <button className="py-2 px-20 text-lg bg-gray-600 text-white mb-7">Crate Notice</button>
            </form>
            <div className="flex justify-around w-full bt-7">
                <Link className="py-2 px-20 text-2xl bg-gray-600 text-white" to="/notice">Back</Link>
                <button className="py-2 px-20 text-2xl bg-gray-600 text-white">Send Individually ID</button>
            </div>
        </div>
    )
}

export default CreateNotice;