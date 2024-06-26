import { useEffect, useState } from "react";

export default function Footer(props){
    let style = "footer"
    if(props.flag === '+'){
        style = ''
    }
    return (

 <footer className={style}>
    <div className="w-full mx-auto ">
        <hr className={style} />
        <span className="block text text-center text-gray-400">© 2024 <a href="/About" className="hover:underline">Force Matters</a>. Все права соблюдены.</span>
    </div>
</footer> 
)}