import logo from "../assets/logo.png";
import { navItems } from "../constants";
const navbar= () =>{
    return(
       <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-center items-center">
                <div className="flex item-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src="{loo}" alt="" />  
                     <span className="text-xl tracking-tight">virtualatt</span>
    

                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {
                        navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                                ))}
                                
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#"></a>
                </div>
            </div>
        </div>
       </nav>
    );
};

export default navbar