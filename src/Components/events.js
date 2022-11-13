import json from "../Assets/events/events.json"
import rr from "../Assets/logo/logo.svg"

const Event = function ({ company, description, logo }) {
    return (
        <div
            className="max-w-lg px-5 py-3 transform transition duration-500 hover:scale-105 hover:bg-[#3b5998]/90 rounded-lg">
            <div className="flex flex-wrap items-center justify-between">
                <h4 className="mb-2 text-2xl font-bold text-white">{company}</h4>
                <img className="h-24" width="200px" src={logo} alt={rr} />
                { /* TODO: fix the width and height thing */ }
            </div>
            <p className="text-lg text-gray-400">{description}</p>
        </div>
    );
};

const Events = function () {
    return (
        <div className="pt-8 pb-6 px-3">
            <div className="text-center text-[#f9c867] text-4xl pb-2 font-medium">
                Upcoming Events
            </div>
            <ol className="mx-auto max-w-lg border-gray-200 list-none">
                {json.event.map((e) => {
                    return (
                        <li key={e.event_name}>
                            <time
                                className="mb-1 pt-3 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">
                                {e.date}
                            </time>
                            <Event
                                company={e.event_name}
                                description={e.description}
                                logo={e.logo ? e.logo : rr} />
                        </li>
                    )
                })}
            </ol>
        </div>
    );
};

export default Events;
