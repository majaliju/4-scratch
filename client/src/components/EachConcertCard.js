import React from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IndividualPost from './IndividualPost';
import Loading from './Loading';
import CreatePost from './CreatePost';

function EachConcertCard({ posts, setPosts, artists, concerts }) {
  return (
    <div>
      <h1>this concert</h1>
    </div>
  );
}

export default EachConcertCard;
