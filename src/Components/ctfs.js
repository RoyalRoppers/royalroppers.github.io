import json from "../Assets/ctfs/ctfs.json"

const cutoff_threshold = Infinity;

function ordinal(number) {
    const english_ordinal_rules = new Intl.PluralRules("en", {
        type: "ordinal"
    });
    const suffixes = {
        one: "st",
        two: "nd",
        few: "rd",
        other: "th"
    }
    const suffix = suffixes[english_ordinal_rules.select(number)];
    return (number + suffix);
}

const CTF = function ({ name, logo, description, link, place }) {
    return (
        <a className="max-w-sm bg-gray-900 rounded-lg shadow-md transform transition duration-500 hover:hover:bg-gray-800 hover:scale-105 flex flex-col justify-between" href={link}>
            <div className="p-5">
                <h5 className="text-center mb-2 text-xl font-bold tracking-tight text-white">
                    {name}
                </h5>
                <img className="my-2 rounded-lg w-full object-none" style={{height: "150px"}} src={logo} alt="" />
                <p className="mb-3 font-normal text-gray-200">{description}</p>
            </div>
            <p className="text-white text-center border-2 border-gray-200 m-5">{ordinal(place)} place</p>
        </a>
    );
}

const Ctfs = function () {
    return (
        <>
            <div className="text-center text-[#f9c867] text-4xl pb-3 font-medium">
                Past Pwned CTFs
            </div>
            <div
                className="p-4 grid justify-items-center grid-cols-1 md:grid-cols-2 md:p-6 lg:grid-cols-3 lg:p-8 xl:p-10 gap-8 m-auto max-w-6xl">
                {json.ctfs.filter((e) => { return e.place < cutoff_threshold }).map((e) => {
                    return (
                        <CTF
                            name={e.ctf_name}
                            description={e.description}
                            logo={e.logo}
                            link={e.link ? e.link : "http://royalroppers.team"}
                            place={e.place}
                        />
                    )
                })}
            </div>
        </>
    );
};

export default Ctfs;
