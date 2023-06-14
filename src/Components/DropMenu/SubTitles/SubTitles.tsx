import "./SubTitlesS.scss";

interface Props {
    titles: string[];
}

export const SubTitles = ({ titles }: Props) => {
    return (
        <div className="SubTitles">
            {titles.map((title, idx) => {
                return <div className="title">{title}</div>;
            })}
        </div>
    );
};
