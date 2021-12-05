import {Link} from "react-router-dom"
// import "./notice.css"
function Notice(){
    return(
        <div>
            <div className="w-full p-6">
                <div className="p-6 mb-14 border-solid border border-gray-500">
                    <p className="text-2xl">Notice</p>
                    <p className="text-2xl">Update Payroll information</p>
                    <p className="text-2xl">Event This Week</p>
                    <p className="text-2xl">Approval For Editing makrs required</p>
                </div>
                <Link className="py-2 px-20 text-2xl bg-gray-600 text-white " to="/create_notice">Create Notice</Link>
            </div>
        </div>
    )
}

export default Notice;