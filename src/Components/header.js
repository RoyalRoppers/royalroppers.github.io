import logo from "../Assets/logo/logo.svg";

const Header = function () {
    return (
        <div className="flex flex-col items-center lg:flex-row lg:items-end default-text pt-12 px-6">
            <div className="w-full pt-2 text-center lg:text-right text-6xl text-[#f9c867]">
                Royal
            </div>
            <div className="flex-none order-first lg:order-none px-3">
                <img src={logo} width="200px" className="logo" alt={""} />
            </div>
            <div className="w-full pt-2 text-center lg:text-left text-6xl text-[#f9c867]">
                Roppers
            </div>
        </div>
    );
};

export default Header;
