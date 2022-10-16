import {Envelope, GithubLogo, LinkedinLogo, Flag, TwitterLogo} from "phosphor-react";

const Footer = function () {
    return (
        <footer className="flex justify-center pt-6">
            <div className="flex flex-wrap">
                 <a className="m-3 transition duration-500 hover:scale-125" href="https://ctftime.org/team/176008">
                    <Flag color={"white"} size={40}/>
                </a>
                <a className="m-3 transition duration-500 hover:scale-125" href="mailto:styrelsen@royalroppers.team">
                    <Envelope color={"white"} size={40}/>
                </a>
                <a className="m-3 transition duration-500 hover:scale-125"
                   href="https://www.linkedin.com/company/royalroppers/">
                    <LinkedinLogo color={"white"} size={40}/>
                </a>
                <a className="m-3 transition duration-500 hover:scale-125" href="https://github.com/RoyalRoppers">
                    <GithubLogo color={"white"} size={40}/>
                </a>
                <a className="m-3 transition duration-500 hover:scale-125" href="https://twitter.com/royal_roppers">
                    <TwitterLogo color={"white"} size={40}/>
                </a>
            </div>
        </footer>);
}

export default Footer;
