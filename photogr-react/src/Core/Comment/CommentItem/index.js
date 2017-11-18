import React from 'react'
import CommentTree from '../CommentTree'
import { AuthorTile } from '../../User'

const CommentItem = ({comment, created, author, replies}) => (
    <div>
        <div>{comment}</div>
        <div>Posted: {created.toString()}</div>
        <AuthorTile user={author}></AuthorTile>
        { replies === [] && <CommentTree comment={replies}></CommentTree> }
    </div>
) 

export default CommentItem