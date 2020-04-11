import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import API from "../../api/API";
import Issue from "../issues/Issue";
import IssuesList from "../issues/IssuesList";

export default function ProjectDetails() {
    const [issues, setIssues] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    let { projectName } = useParams();
    useEffect(() => {
        API.get(`/reps/${projectName}/issues?state=all`)
            .then(response =>
                response.data.map(issue => ({
                    name: issue.title,
                    user: issue.user,
                    created_at: issue.created_at,
                    state: issue.state,
                    html_url: issue.html_url
                })))
            .then(issues => {
                setIssues(issues);
                setIsLoading(false);
                console.log(issues)
            })
            .catch(err => console.log(err));

    }, []);

    if(isLoading) {
        return (
            <div>Loading, please wait...</div>
        )
    } else {
        const openedIssues = issues.filter(issue => issue.state === "open").map((issue, index) =>
            <Issue issue={issue} key={index}/>
        );

        let closedIssues = issues.filter(issue => issue.state === "closed").map((issue, index) =>
            <Issue issue={issue} key={index}/>
        );
        return (
            <div>
                <IssuesList openedIssues={openedIssues} closedIssues={closedIssues}/>
            </div>
        )
    }

}