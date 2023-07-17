import { Link } from "react-router-dom";
import Parse from "parse";

const UserFooter = () => {
    // Log out user by taking away their authentication
    const logOut = () => {
        Parse.User.current().authenticated = false;
    }
    // Bug workaround
    // Making sure that if a user is already logged in and they navigate to home
    // page they can stay logged in (and authenticated)
    const goToHome = () => {
        Parse.User.current().authenticated = true;
    }

    // Navigation to home page and log in page from user page
    return(
        <div>
            <nav>
                <div>
                    <Link to="/">
                        <button onClick={goToHome}>Home</button>
                    </Link>
                </div>
                <div>
                    <Link to="/auth/login">
                        <button onClick={logOut}>Log Out</button>
                    </Link>
                </div>
            </nav>
        </div>
    )
};

export default UserFooter;