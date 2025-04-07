import { useState } from "react"

const Video9=()=>{
   let [name,setName]=useState<string|number>("longhoang");
   setName("hoidanit");
    return (
        <div>Example vide 9:hello world + {name}</div>
    );
}
export default Video9;