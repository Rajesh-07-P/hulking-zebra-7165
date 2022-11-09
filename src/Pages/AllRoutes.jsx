import { Route, Routes } from "react-router-dom";
import Mens from "./Mens";


export default function AllRoutes(){


    return (
        <div>
        <Routes>
            <Route path="/" element={<Mens/>}/>
        </Routes>
        </div>
    )
}