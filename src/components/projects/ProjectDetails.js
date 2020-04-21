import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import API from "../../api/API";
import Issue from "../issues/Issue";
import IssuesList from "../issues/IssuesList";
import LoadSpinner from "../utils/Loader";

export default function ProjectDetails() {
    const [issues, setIssues] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    let { platform, projectPath } = useParams();
    useEffect(() => {
        API.get(`/reps/${projectPath}/issues?state=all&platform=${platform}`)
            .then(response =>
                response.data.map(issue => ({
                    name: issue.title,
                    user: issue.user,
                    description: issue.body,
                    created_at: issue.created_at,
                    closed_at: issue.closed_at,
                    state: issue.state,
                    html_url: issue.html_url
                })))
            .then(issues => {
                setIssues(issues);
                setIsLoading(false);
                console.log(issues)
            })
            .catch(err => console.log(err));

    }, [platform, projectPath]);
    if(isLoading) {
        return (
            <LoadSpinner/>
        )
    } else {
        const openedIssues = issues.filter(issue => issue.state === "open" || issue.state === "opened").map((issue, index) =>
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