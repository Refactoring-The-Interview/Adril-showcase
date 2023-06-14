import { Route, Routes } from "react-router-dom";
import { Paths } from "../../Apis/types";
import { DropMenu } from "../DropMenu/DropMenu";
import { NavBar } from "../NavBar/NavBar";

export const App = () => {
    return (
        <main>
            <NavBar />

            <Routes>
                <Route element={<></>} path="/" />
                <Route element={<DropMenu />} path={Paths.dropMenu} />
            </Routes>
        </main>
    );
};
