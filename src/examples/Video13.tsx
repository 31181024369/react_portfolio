interface IProps{
    name?:string;
    age?:number;
    address?:string
}
const Video13=(props:IProps)=>{
    const {name,age,address}=props;
    return (
        <div>Example in video 13-hello word with {name}</div>
    )
}
export default Video13;