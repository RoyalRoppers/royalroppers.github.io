const About = function () {
    return (
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 p-6">
            <div className="flex flex-col">
                <div className="default-text m-auto text-xl max-w-3xl p-2">
                    RoyalRoppers is a Swedish student CTF team. We regularly play
                    CTFs of all difficulty levels and have members ranging from
                    absolute beginners to very experienced players.
                    The majority of us live in Stockholm and we sometimes meet up to play CTFs onsite at KTH. <a className={"text-[#f9c867]"}
                    href="https://ctftime.org/team/176008">Here</a> is our CTF-time.
                </div>
                <h2 className="default-text m-auto text-3xl max-w-3xl">Want to play CTFs with us? Click&nbsp;
                    <a className={"text-[#f9c867] underline underline-offset-2"}
                        href="https://forms.gle/6WBvRNZW8U9873Pu6">here
                    </a> to join!
                </h2>
            </div>
        </div>
    );
};

export default About;
