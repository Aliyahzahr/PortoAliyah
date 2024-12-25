import { X, Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";


const Navbar = () => { 
    const [isOpen, setIsOpen] = useState(false);
    
    const handleNavigate = () => {
        setIsOpen(false);
    }

    const navItems = [
        {
            label: "Home",
            route: "/",
        },
        {
            label: "Aboutme",
            route: "#",
        },
        {
            label: "Blog",
            route: "#",
        },
        {
            label: "Thanks",
            route: "#",
        },
        {
            label: "Contact",
            route: "#",
        },
    ];

    return (  
        <nav className="bg-blue-700 sm:bg-red-300 md:bg-green-300 lg:bg-white p-3">  
            <div className="max-w-7xl mx-auto flex justify-between items-center">  
                <div className="flex items-center">  
                    <img  
                        src="assets/images/logo.png"
                        className="h-8 w-10 ml-16"
                    />  
                    <h1 className="ml-3 text-black font-mono font-semibold">  
                        ALIYAH  
                    </h1>  
                    
                    {/* Nav Items Dekat dengan Aliyah */}
                    <div className="hidden md:flex space-x-9 font-mono text-sm" style={{ marginLeft: '280px' }}>  
                        {navItems.map((item, index) => (
                            <a 
                                key={index} 
                                className="text-black hover:text-gray-400 mr-4" 
                                href={item.route}
                            >
                                {item.label}
                            </a>  
                        ))} 

                        <div className="flex space-x-5" style={{ marginLeft: '200px' }}>  
                            <a 
                            className=" hover:text-gray-400"
                            href="https://www.instagram.com/Zahraturriz" target="_blank" rel="noopener noreferrer">  
                                <IoLogoInstagram size={21} />  
                            </a>  
                            <a 
                            className="hover:text-gray-400 "
                            href="https://www.linkedin.com/in/aliyahzahraturizqi/" target="_blank" rel="noopener noreferrer">  
                                <CiLinkedin size={21} />  
                            </a>  
                            <a 
                            className="hover:text-gray-400"
                            href="mailto:aliyazahr@gmail.com" target="_blank" rel="noopener noreferrer">  
                                <SiGmail size={18} />  
                            </a>  
                        </div>
                    </div>
                </div>  
    
                <div className="md:hidden flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <X className="text-black" size="24"/>
                    ) : (
                        <Menu className="text-black" size="24"/>
                    )}
                </div>
    
                <div>
                    {isOpen && (
                        <div className="md:hidden flex flex-col">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    className="text-white bg-yellow-800 p-4 py-2 hover:border-l-4 border-yellow-600"
                                    href={item.route}
                                    onClick={handleNavigate}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div> 
            </div> 
        </nav>  
    );
};  

export default Navbar;