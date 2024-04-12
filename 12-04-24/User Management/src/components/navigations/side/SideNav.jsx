import Links from "../../links/Links";
import { AiTwotoneHome, AiOutlineUser, AiFillSetting } from "react-icons/ai"
const SideNav = () => {

    const path = [
        {
            to: "/home",
            icon: <AiTwotoneHome />,
            label: "Home"
        },
        {
            to: "/users",
            icon: <AiOutlineUser />,
            label: "Users"
        },
        {
            to: "/settings",
            icon: <AiFillSetting />,
            label: "Settings"
        },
    ]
    
    return (
        <>
            {
                path.map((value) => {
                    return <Links to={value.to} icon={value.icon} label={value.label}></Links>
                })
            }
        </>
    );
}

export default SideNav;