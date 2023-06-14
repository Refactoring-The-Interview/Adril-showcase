import { DummyDropDownData } from "../../Apis/DummyDropDownData";
import "./DropMenuS.scss";
import { MenuItem } from "./MenuItem/MenuItem";

export const DropMenu = () => {
    return (
        <div className="DropMenu">
            {DummyDropDownData.map((item, idx) => {
                const { title, subtitles, about } = item;
                return (
                    <MenuItem
                        title={title}
                        subtitles={subtitles}
                        about={about}
                    />
                );
            })}
        </div>
    );
};
