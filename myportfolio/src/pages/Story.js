import {Link, Outlet} from "react-router-dom";
import College from "./College";
import Work from "./Work";
import Hobbies from "./Hobbies";


export default function Story () {

    return (<>
        <div className="aboutMe">
        <img className="pic-small" src="https://tinyurl.com/ymxebabu" />
        <p className="paragraph">Who I Am & What im looking For: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>

        <div className="aboutButtons">
            <Link className="navButton" to="college" element={<College />} >College</Link>
            <Link className="navButton" to="work" element={<Work />} >Work</Link>
            <Link className="navButton" to="hobbies" element={<Hobbies />} >Hobbies</Link>   
        </div>

        <hr></hr>
        <Outlet />
    </>
    )
}