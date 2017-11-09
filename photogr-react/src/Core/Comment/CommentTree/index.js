import React from 'react'
import { AuthorTile } from '../../User'
const CommentTree = ({comments}) => (
    <div>
        <h3>Comments</h3>
        {
            comments.map(({id, comment, author, created, replies}) => (
                <div key={id}>
                    <div>{comment}</div>
                    <div>Posted: {created.toString()}</div>
                    <AuthorTile user={author}></AuthorTile>
                    <CommentTree photo={replies}></CommentTree>
                </div>
            ))
        }
    </div>
)

export default CommentTree