import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const sessionContext = createContext();

const SessionContextProvider = (props) => {
    const [scenario, setScenario] = useState("");
    const [actions, setActions] = useState([]);
    const [status, setStatus] = useState("Continue");
    const [imgClass, setImgClass] = useState("");
    const navigate = useNavigate();

    return (
        <sessionContext.Provider value={{scenario, setScenario, actions, setActions, status, setStatus, imgClass, setImgClass, navigate}}>
            {props.children}
        </sessionContext.Provider>
    )
}

export default SessionContextProvider;