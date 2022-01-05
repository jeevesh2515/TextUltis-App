import React from 'react'
import { dumpLogs } from './Utils';
import classes from './BlogCard.module.css';

const BlogCard = (props) => {
    dumpLogs(props)
    return (
        <div>
            <div className={classes.BlogCard}>  
            <h3>{props.title}</h3>   
            <p>{props.description}</p>
            </div>  
        </div>
    )
}

export default BlogCard;
