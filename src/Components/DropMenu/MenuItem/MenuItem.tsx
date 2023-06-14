import "./MenuItemS.scss";

interface Props {
    title: string;
    subtitles?: string[];
    about?: string;
}

export const MenuItem = ({ title, subtitles, about }: Props) => {
    return <div className="MenuItem">{title}</div>;
};
