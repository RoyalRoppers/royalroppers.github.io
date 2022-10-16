import rr_logo from "../Assets/logo/logo.svg";
import json from "../Assets/sponsors/sponsors.json"

const rr_link = "https://royalroppers.team";

const Sponsor = function ({company, logo, link}) {
    return (
        <div className="max-w-md py-3 transition duration-500 hover:scale-105 rounded-lg border-2 border-white">
            <a href={link}>
                <div className="px-5 flex items-center justify-evenly">
                    <div>
                            <h4 className="mb-2 text-2xl font-bold text-[#f9c867]">{company}</h4>
                    </div>
                    <img className="m-5 h-20" src={logo} alt=""/>
                </div>
            </a>
</div>
    )
        ;
};

const Sponsors = function () {
    return (
        <div className="flex-col pt-9">
            <div className="text-center text-[#f9c867] text-4xl pb-3 font-medium">
                Sponsors
            </div>
            <div
                className="p-6 grid grid-cols-1 sm:grid-cols-1 sm:p-6 md:grid-cols-2 md:p-6 lg:grid-cols-3 lg:p-8 xl:grid-cols-3 xl:p-10 gap-8 m-auto max-w-6xl">

                {json.sponsors.map((e) => {
                    return (
                        <Sponsor
                            company={e.sponsor}
                            link={e.link ? e.link : rr_link}
                            logo={e.logo ? e.logo : rr_logo}
                        />
                    )
                })}
            </div>
            <div className="text-center text-[#f9c867] text-2xl pb-3 font-medium">
                For sponsoring or event/collaboration enquiries contact us at:
                <br/>
                <a href="mailto:sponsoring@royalroppers.team">
                    sponsring@royalroppers.team
                </a>
            </div>
        </div>
    );
};

export default Sponsors;
