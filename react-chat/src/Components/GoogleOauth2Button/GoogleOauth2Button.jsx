import GoogleIcon from '@mui/icons-material/Google';
import './GoogleOauth2Button.scss'

export function GoogleOAuth2Button(props) {

    return (
        <div className={"OAuth2Button"} id={"GoogleOAuth2"}>
            <div className={"google-icon-container"}>
                <GoogleIcon className={"google-icon"}></GoogleIcon>
            </div>
            <div className={"text-google-auth"}>
                <a className={"google-oauth2-link"}> Login
                    With Google</a>
            </div>
        </div>
    )
}
