import Google from "../../assets/images/google.svg"
import Microsoft from "../../assets/images/microsoft.svg"
import Spotify from "../../assets/images/spotify.svg"
import Mailchimp from "../../assets/images/mailchimp.svg"
import Airbnb from "../../assets/images/airbnb.svg"
import Uber from "../../assets/images/uber.svg"
export function CustomerLogos(){
    return (
        <div className="flex flex-row justify-between px-20">
            <img src={Google} alt="" />
            <img src={Microsoft} alt="" />
            <img src={Spotify} alt="" />
            <img src={Mailchimp} alt="" />
            <img src={Airbnb} alt="" />
            <img src={Uber} alt="" />
        </div>
    )
}