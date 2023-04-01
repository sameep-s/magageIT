import { useEffect, useState } from 'react'
import './pagination.css'

export function Pagination(props) {
    const { totalPosts, postOnPage, data, setData } = props;
    const [postsPerPage, setPostsPerPage] = useState(postOnPage || 2);
    const [currentPage, setCurrentPage] = useState(1);
    let posts = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        posts.push(i);
    }

    useEffect(() => {
        const lastPost = currentPage * postsPerPage;
        const firstPost = lastPost - postOnPage;
        const dataNew = data?.slice(firstPost, lastPost);
        setData([...dataNew]);

    }, [currentPage, totalPosts]);

    return (
        <>
            <div className="container__main__pagination">
                {posts?.map(i => <span className={currentPage === i ? "onPage" : "pagination_number"} key={i} onClick={() => setCurrentPage(i)}>{i}</span>)}
            </div>
        </>
    )
}