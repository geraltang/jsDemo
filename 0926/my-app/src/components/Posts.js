export default function Posts({ loading, posts }) {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul className="list-group">
            {posts.length > 0 && posts.map(post => (
                <li key={post.id} className="list-group-item">{post.title}</li>
            ))
            }
        </ul>
    )
}