import { useState } from "react";
import './Video10.css'
export interface ITest{
    name:string;
    age:number
}
interface IUser{
    name:string;
    age:number|string;
    city:string;
}
interface IProps{
    defautName?:string;
    defautAge?:number|string;
}
const Video10 = (props:IProps) => {
    const {defautName,defautAge}=props;
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number |string>(0);
    const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);
    const [selectedCity,setSelectedCity]=useState<string>("Hà Nội");

    const [users, setUsers] = useState<IUser[]>([
        { name: "Eric", age: 25, city: "Hà Nội" },
        { name: "Eric1", age: 26, city: "Đà Nẵng" },
        { name: "Eric2", age: 27, city: "Hồ Chí Minh" },
    ]);
    const [test,setTest]=useState<ITest|null>(null);

    const [isShowBtn, setIsShowBtn] = useState(false);
    const handleSubmit=(event: React.FormEvent<HTMLInputElement>)=>{
        event.preventDefault();
        const user={
            name:name,
            age:age,
            city:selectedCity
        }
        setUsers([...users,user]);
        setName("");
        setAge("");
       
    }
    const handleOnChangeName=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value);
    }




    return (
        <>
            <div>Example video 10:  hello world </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input type="text" value={name} onChange={handleOnChangeName}  /><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input type="text" value={age} onChange={(event)=>setAge(event.target.value)} /><br />
                </div>
                <div>
                    <label >City:</label><br />
                    <select onChange={(event)=>setSelectedCity(event.target.value)}>
                        
                        {city && city.length>0 &&
                        city.map(item=>{
                            return (
                                <option>{item}</option>
                            )
                        })
                                                }
                       
                    </select>
                </div>

                <input type="submit" onClick={handleSubmit} value="Submit" />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            < th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.length >0 && users.map((user,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.city}</td>
                                </tr>
                            )
                        })}
                       
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video10;