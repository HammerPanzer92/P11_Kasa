import * as React from "react";
import { useLocation, Link } from "react-router-dom";

function Linknav(props){

    const location = useLocation();

    if(location.pathname === props.to){
        return (
            <Link to={props.to} class="active-link"> {props.name} </Link>
        )
    }else{
        return(
            <Link to={props.to}> {props.name} </Link>
        )
    }

}

export default Linknav;