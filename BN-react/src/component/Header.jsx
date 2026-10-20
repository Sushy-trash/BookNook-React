import { useState } from 'react';
import Logo from "./Logo";
import "./Logo.css";

export default function Header(){
    return(
        <>
            <header classname="bg-grey text-white text-center py-5">
                <div classname= "container">
                    <Logo/>

                </div>

            </header>
        
        </>

    )

}