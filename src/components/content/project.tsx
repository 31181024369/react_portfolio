import { Button, Modal } from 'antd';
import { useState } from 'react';
import { IoLogoReact } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { DiNodejsSmall } from "react-icons/di";
import { AiFillFacebook } from "react-icons/ai";
interface IProject {
    image:JSX.Element;
    title:string;
    shortDescription:string;
    detail:{
        description:string;
        frontend:string;
        backend:string;
        member:number;
        role:string;
        demo:string;
        github:string
    }
}
const Project=()=>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataDetail,setDataDetail]=useState<IProject| null>(null);
    const dataProjects:IProject[]=[
        {
            image: <IoLogoReact size={50} color={'#2bebfd'} />,
            title:"Website Clone Tiki",
            shortDescription:"When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow ",
            detail:{
                description:"1",
                frontend:"1",
                backend:"1",
                member:1,
                role:"1",
                demo:"1",
                github:"1",

            }
        },
        {
            image:<DiNodejsSmall size={50} color={'#2bebfd'} />,
            title:"Website Clone Tiki2",
            shortDescription:"When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow ",
            detail:{
                description:"2",
                frontend:"2",
                backend:"2",
                member:2,
                role:"2",
                demo:"2",
                github:"2",

            }
        },
        {
            image:<AiFillFacebook size={50} color={'#2bebfd'} />,
            title:"Website Clone Tiki3",
            shortDescription:"When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow ",
            detail:{
                description:"3",
                frontend:"3",
                backend:"3",
                member:3,
                role:"3",
                demo:"3",
                github:"3",

            }
        }
    ]
    const handleCloseModel=()=>{
        setIsModalOpen(false);
        setDataDetail(null);
    }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

    return (
        <>
        {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal title={dataDetail && dataDetail.title ? `Dự án ${dataDetail.title}`:""} open={isModalOpen} onOk={handleCloseModel} onCancel={handleCloseModel} maskClosable={false} footer={null}>
      {dataDetail && <ul>
            <li>Miêu tả :{dataDetail.detail.description}</li>
            <li>Fontend :{dataDetail.detail.frontend}</li>
            <li>Backend:{dataDetail.detail.backend}</li>
            <li>Số lượng thành viên dự án:{dataDetail.detail.member}</li>
            <li>Vai trò:{dataDetail.detail.role}</li>
        </ul>}
      </Modal>
            <div className="arlo_tm_section" id="projects">
                    <div className="arlo_tm_services_wrap">
                        <div className="container">
                            <div className="arlo_tm_title_holder">
                                <h3>Amazing Services</h3>
                                <span>Meet our amazing services</span>
                            </div>
                            <div className="list_wrap">
                                <ul>
                                    {dataProjects && dataProjects.length>0 && dataProjects.map((item,index)=>{
                                        return (
                                        <li key={`${index}-project`}>
                                            <div className="inner" style={{cursor:"pointer"}} onClick={()=>{
                                                   
                                                   setIsModalOpen(true)
                                                   setDataDetail(item);

                                               }}>
                                                <div className="icon">
                                                   {item.image}
                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>{item.shortDescription}</p>
                                                </div>
                                                <div className='view_detail' style={{padding:"5px 0"}}>
                                                <span style={{cursor:"pointer"}} onClick={()=>{
                                                   
                                                    setIsModalOpen(true)
                                                    setDataDetail(item);

                                                }}>
                                                <BsArrowRight />
                                                &nbsp;
                                                Xem Chi Tiết
                                                </span>
                                                </div>
                                            </div>
                                        </li>
                                        )
                                    })}
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Project;