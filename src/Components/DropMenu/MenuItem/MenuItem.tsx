import { useState } from "react";
import { About } from "../About/About";
import { SubTitles } from "../SubTitles/SubTitles";
import "./MenuItemS.scss";

interface Props {
    title: string;
    subtitles?: string[];
    about?: string;
}

export const MenuItem = ({ title, subtitles, about }: Props) => {
    const [display, setDisplay] = useState<boolean>(false);
    const moreToshow = display && subtitles?.length;
    const isPluse = subtitles?.length ? "plus" : "";
    return (
        <div className="MenuItem">
            <div
                className="item-main"
                onClick={() => {
                    setDisplay(!display);
                }}
            >
                <div className="item-title">{title}</div>
                <div className={isPluse}></div>
            </div>

            {moreToshow && (
                <div className="more fade-in">
                    {about && <About about={about} />}
                    <SubTitles titles={subtitles} />
                </div>
            )}

            <div className="line"></div>
        </div>
    );
};
