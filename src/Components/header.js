import logo from "../Assets/logo/logo.svg";

const Header = function () {
    return (<div className="default-text flex flex-col pt-12 px-6">
            <div
                className=" grid grid-cols-1 sm:grid-cols-1 sm:p-6 lg:grid-cols-3 lg:p-8 xl:grid-cols-3 xl:p-3 m-auto max-w-6xl">
                <div className={"flex flex-col justify-end lg:text-center sm:text-start text-6xl text-[#f9c867] "}>
                    Royal
                </div>
                <div className={"order-first lg:order-none"}>
                    <img src={logo} width="200px" className="logo" alt={""}/>
                </div>
                <div className="flex flex-col justify-end text-center text-6xl text-[#f9c867]">
                    Roppers
                </div>
            </div>
        </div>);
};

export default Header;
