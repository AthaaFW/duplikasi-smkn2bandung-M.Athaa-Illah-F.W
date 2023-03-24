import Navbar from "../component/nav";
import Drop from "../component/dropdown"
import { useState } from "react";
import Footer from '../component/footer'
import img from '../asset/carousel2.jpeg'

const Page4 = () => {

    const[drop, setDrop] = useState(false)
    const onDrop = () =>{
        setDrop(!drop)
    }

    return ( 
        <div className="flex flex-col items-center space-y-[30px] pt-[70px] overflow-x-hidden" id="home">
            <Navbar drop={onDrop} home={true}/>
            <Drop open={drop}/>
            <div className="w-[65%] flex flex-col space-y-[15px] items-center">
                <div className="flex flex-col space-y-[2px] w-full border-b-[1px] border-gray-600 pb-[10px]">
                    <h1 className="text-gray-600 text-2xl">Diskusi dengan kemenkoinfo</h1>
                    <h1 className="text-gray-500 text-base">09 Feb 2023</h1>
                </div>
                <img src={img} alt="" />
                <div className="w-full text-gray-700 pt-[10px]">
                    <p>
                        Pada tanggal 209 Feb 2023 PPTIK berdiskusi dengan kemenkoinfo berketaitan tentang keamanan cyber
                    </p>
                </div>
            </div>
            <Footer/>   
        </div>
     );
}
 
export default Page4;