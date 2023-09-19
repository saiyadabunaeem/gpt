import React from 'react';
import './Blog.css';
import Article from '../../Components/Article/Article';
import blog1 from '../../Assets/assets/blog01.png';
import blog2 from '../../Assets/blog02.png';
import blog3 from '../../Assets/blog03.png';
import blog4 from '../../Assets/blog04.png';
import blog5 from '../../Assets/blog05.png';

const Blog = () => {
  return (
    <div className='blog sectionPad'>
      <div className="blogHead">
        <h1 className='gradientTxt'>Do You Want To Step Into The Future Before Other</h1>
      </div>
      <div className="blogCon gradient">
        <div className="blogConA">
        <Article imgUrl={blog1} date='sep 27, 2023' title='GPT and OpenAI is The Future. Let us explore How it Works'/> 
        </div>
        <div className="blogConB">
        <Article imgUrl={blog2} date='sep 27, 2023' title='GPT and OpenAI is The Future. Let us explore How it Works'/>
        <Article imgUrl={blog3} date='sep 27, 2023' title='GPT and OpenAI is The Future. Let us explore How it Works'/>
        <Article imgUrl={blog4} date='sep 27, 2023' title='GPT and OpenAI is The Future. Let us explore How it Works'/>
        <Article imgUrl={blog5} date='sep 27, 2023' title='GPT and OpenAI is The Future. Let us explore How it Works'/>
        </div>
      </div>

    </div>
  )
}

export default Blog