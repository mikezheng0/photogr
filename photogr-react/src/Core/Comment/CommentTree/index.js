import React from 'react'
import CommentItem from '../CommentItem'

const CommentTree = ({comments}) => (
    <div>
        <h3>Comments</h3>
        {
            comments.map(({id, comment, replies, created, author}) => (
                <CommentItem 
                    comment={comment}
                    replies={replies}
                    created={created}
                    author={author}
                    key={id}>
                </CommentItem>
            ))
        }
    </div>
)

export default CommentTree