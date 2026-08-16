import React from "react";
import MacWindow from "../windows/MacWindow.jsx";
import GithubData from "../../assets/github.json";
import "./github.scss";

const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {
    return (
        <div className="git-card">
            <img src={data.image} alt={data.title} className="git-card-image" />

            <div className="git-card-body">
                <h3>{data.title}</h3>
                <p>{data.description}</p>

                <div className="tags">
                    {(data.tags || []).map((tag, index) => (
                        <span key={`${tag}-${index}`} className="tag">{tag}</span>
                    ))}
                </div>

                <div className="urls">
                    {data.repoLink && (
                        <a href={data.repoLink} target="_blank" rel="noreferrer">
                            Repo
                        </a>
                    )}
                    {data.demoLink && (
                        <a href={data.demoLink} target="_blank" rel="noreferrer">
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Github = () => {
    return (
        <MacWindow>
            <div className="cards">
                {GithubData.map((project, idx) => (
                    <GitCard key={idx} data={project} />
                ))}
            </div>
        </MacWindow>
    );
};

export default Github;
