import "./AboutS.scss";

interface Props {
    about: string;
}

export const About = ({ about }: Props) => {
    return (
        <div className="About">
            <div className="about-text">{about}</div>
        </div>
    );
};
