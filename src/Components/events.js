import json from "../Assets/events/events.json"
import rr from "../Assets/logo/logo.svg"

const Event = function ({company, description, logo}) {
    return (
        <div
            className="max-w-lg px-5 py-3 transform transition duration-500 hover:scale-105 hover:bg-[#3b5998]/90 rounded-lg">
            <div className="px-5 flex flex-wrap items-center justify-between">
                <div>
                    <h4 className="mb-2 text-2xl font-bold text-white">{company}</h4>
                </div>
                <img className="h-24" width="200px" src={logo} alt={rr}/>
            </div>
            <p className="text-lg text-gray-400">{description}</p>
        </div>
    );
};

const Events = function () {
    return (
        <div className="flex-col pt-9 pb-6 px-3">
            <div className="text-center text-[#f9c867] text-4xl pb-3 font-medium">
                Upcoming Events
            </div>
            <div className="flex justify-center pt-6">
                <ol className="border-gray-200 list-none">
                    {json.event.map((e) => {
                        return (<li className="ml-4" key={e.event_name}>
                                <div
                                    className="relative w-4 h-4"/>
                            <time
                                className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">
                                {e.date}
                            </time>
                            <Event
                                company={e.event_name}
                                description={e.description}
                                logo={e.logo ? e.logo : rr}/>
                            </li>)
                    })}
                </ol>
            </div>
        </div>
    );
};

export default Events;
