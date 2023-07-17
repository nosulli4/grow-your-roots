import { Link } from "react-router-dom";
import Parse from "parse";

const HomeUserFooter = () => {
    // Logs out a user from the home page if they are already authenticated
    const logOut = () => {
        Parse.User.current().authenticated = false;
    }
    return(
        <div>
            <nav>
                <div>
                    <Link to="/auth/login">
                        <button onClick={logOut()}>Log Out</button>
                    </Link>
                </div>
            </nav>
        </div>
    )
};

export default HomeUserFooter;