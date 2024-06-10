import { useEffect, useState } from "react";

export default function Footer(props){
    let style = "footer"
    if(props.flag === '+'){
        style = ''
    }
    return (

 <footer className={style}>
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 sm:mx-auto lg:my-8" />
        <span className="block text-sm  sm:text-center text-gray-400">© 2024 <a href="/About" className="hover:underline">Force Matters</a>. Все права соблюдены.</span>
    </div>
</footer> 
)}