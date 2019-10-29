//每一个单独文件都要包含React
import React from 'react';
import {useParams} from 'react-router-dom';

function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
  }


export default Topic;