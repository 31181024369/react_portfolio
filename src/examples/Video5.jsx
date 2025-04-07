import { useEffect, useState } from "react"

const Video5=(props)=>{
    const {name}=props;
    const [age,setAge]=useState(0);
    useEffect(()=>{
        setAge("hoidanit");
    },[])
    return (
        <>
        Example in video 5-My name's {name} || age={age}
        </>
    )
}
export default Video5;