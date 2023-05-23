import React from 'react';
import * as R from './RecipeMainStyle';

const RecipePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <R.PostSpan key={post.id}>
              {post[post.id].filepath}{<br />}
              {post[post.id].title}{<br />}
              TIME: {post[post.id].time}{<br />}
              LEVEL: {post[post.id].level}
            </R.PostSpan>
          ))}
        </div>
      </>
    );
  };

  export default RecipePosts;