import {Link} from "react-router-dom"
import "./notice.css"
function Notice(){
    return(
        <div>
            <div className="notice_container">
                <div className="notice">
                    <p>Notice</p>
                    <p>Update Payroll information</p>
                    <p>Event This Week</p>
                    <p>Approval For Editing makrs required</p>
                </div>
                <Link to="/create_notice">Create Notice</Link>
            </div>
        </div>
    )
}

export default Notice;