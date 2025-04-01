import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-gray-800 ">
            <nav className="text-white">
                <ul className="flex h-16 items-center justify-between ml-3 mr-6 text-lg ">
                    
                    <li className="cursor-pointer"><Link to ="/"> Home </Link></li>
                    <li className="cursor-pointer"><Link to ="/cart">💼 Cart </Link></li>
                </ul>
            </nav>
        </div>  
    )
}

export default Navbar;
