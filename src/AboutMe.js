import React from 'react';

function AboutMe() {
    let hanna = {
        name: 'Hanna',
        job_title: 'Junior Dev',
        bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto magnam non eligendi inventore corporis ipsam dolorem a quidem quis eaque nemo mollitia aspernatur at minus optio, quaerat provident obcaecati esse. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto magnam non eligendi inventore corporis ipsam dolorem a quidem quis eaque nemo mollitia aspernatur at minus optio, quaerat provident obcaecati esse.',
        github: "https://github.com/honnnei"
    }


    return(
        <div className="about_me">
            <h2>Hi, my name is {hanna.name}</h2>
            <h2>I am a {hanna.job_title}</h2>
            <h2>{hanna.bio}</h2>
            <h2><a href={hanna.github}>My Gihub</a></h2>
        </div>
    );
}


export default AboutMe;