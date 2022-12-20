import { useLocation } from "react-router-dom";
import { useGoogleLogin} from "@react-oauth/google";
import axios from "axios";
import {GoogleOAuth2Button} from "../../Components/GoogleOauth2Button";
import { loginUserAction } from "../../actions/activeUserAction";
import { connect } from "react-redux";
import styles from "./LoginPage.module.scss";

const drfClientId = 'RNEGv79PE4a5HDYYCvr6IpanqhCTKZn0541NPCHF';
const drfClientSecret = 'LdbaragDbWjAmfLQecMKLfjEibYFGj47JIIyAJAiipPugZDfjdUcgqdCjFYGYEvHpj3DU3vQc3b8f0mH7yJndxaNqgW4MddEd1N9I0mITb8MhLliESqUhOIfpeP1Sn8i';
const baseURL = "http://localhost:9000";

const LoginPage = (props) => {
    const location = useLocation();

    const handleGoogleLogin = (response) => {
        // alert(response.access_token);
        console.log(response.access_token);
        axios
            .post("http://localhost:9000/auth/convert-token", {
                token: response.access_token,
                backend: "google-oauth2",
                grant_type: "convert_token",
                client_id: drfClientId,
                client_secret: drfClientSecret,
            })
            .then((res) => {
                console.log(res);
                const { access_token, refresh_token } = res.data;
                console.log({ access_token, refresh_token });
                localStorage.setItem("access_token", access_token);
                localStorage.setItem("refresh_token", refresh_token);
                props.loginUserAction();
            })
            .catch((err) => {
                console.log("Error Google login", err);
            });
    };

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => handleGoogleLogin(tokenResponse), //console.log(tokenResponse),
    });

    const fromPage = location.state?.from?.pathname || "/";

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => login()}>
                Sign in with Google 🚀
            </button>
            {/*<div className={"name-of-app"}>Messenger</div>*/}
            {/*<GoogleOAuth2Button></GoogleOAuth2Button>*/}
        </div>
    );
};

const mapStateToProps = (state) => ({
    user_state: state.activeUserReducer,
});

export default connect(mapStateToProps, { loginUserAction })(LoginPage);
