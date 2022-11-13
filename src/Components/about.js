const About = function () {
    return (
        <div className="pt-2 px-3 flex flex-col">
            <div className="default-text text-justify m-auto text-xl max-w-3xl p-2">
                RoyalRoppers is a Swedish student CTF team. We regularly play
                CTFs of all difficulty levels and have members ranging from
                absolute beginners to very experienced players.
                The majority of us live in Stockholm and we sometimes meet up to play CTFs onsite at KTH.&nbsp;
                <a className="text-[#f9c867]" href="https://ctftime.org/team/176008">Here</a> is our CTF-time.
            </div>
            <h2 className="text-center pt-4 default-text text-3xl">
                Want to play CTFs with us? Click&nbsp;
                <a className="text-[#f9c867] underline underline-offset-2"
                    href="https://forms.gle/6WBvRNZW8U9873Pu6">here
                </a>
                &nbsp;to join!
            </h2>
        </div>
    );
};

export default About;
