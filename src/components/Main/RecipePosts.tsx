import React from 'react';
import * as M from './MainStyle';
import { Link } from 'react-router-dom';


const RecipePosts = ({ posts, loading }: any) => {
  return (
    <>
      {loading && <div> loading... </div>}
      <div>
        <Link to="/community/recipe/">
          {posts.map((post: any) => (
            <Link to="/community/recipe/1" key={post.id}>
            <M.PostSpan>
              <img src={`/images/${post.filepath}`} />{<br />}
              {post.title}{<br />}
              {post.level}
            </M.PostSpan>
            </Link>
          ))}
        </Link>
      </div>
    </>
  );
};

export default RecipePosts;
