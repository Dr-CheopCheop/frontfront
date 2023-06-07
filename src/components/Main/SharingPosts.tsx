import React from 'react';
import * as M from './MainStyle';
import { Link } from 'react-router-dom';

const SharingPosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <Link to={`/community/share/${post.id}`} key={post.id}>
            <M.PostSpan>
              <img src={`/images/${post.filepath}`} />{<br />}
              {post.title}{<br />}
              {post.date}
            </M.PostSpan>
            </Link>
          ))}
        </div>
      </>
    );
  };

  export default SharingPosts;