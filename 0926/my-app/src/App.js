import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './components/Pagination';
import Posts from './components/Posts';
import axios from 'axios';
export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const res = await axios.get(url);
      setPosts(res.data);
      setLoading(false);

    };
    fetchPosts();
  }, []);

  useEffect(() => {
    // get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPostsArr = posts.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPosts(currentPostsArr)
  }, [posts, postsPerPage, currentPage])

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div className='container'>
      <h1 className='text-primary'>My Blog</h1>
      <Posts posts={setCurrentPosts} loading={loading} />
      <Pagination paginate={paginate} totalPosts={posts.length} postsPerPage={postsPerPage} />
    </div>
  );
}
