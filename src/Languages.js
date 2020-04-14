import React from 'react';

function Languages() {

    let languages = [
        {
                id: 0,
                name: 'JavaScript',
                skill_level: 5
        },
        { id: 1,
        name: 'Ruby',
        skill_level: 4
        },
        { id: 2,
        name: 'Python',
        skill_level: 1
        }
    ];

    return(
        <div className="languages">
        <h2>My programming abilities in different languages out of 10:</h2>
        
    <ul>
      {languages.map(function(item) { return <li key={item.id}>My skill level for {item.name} is {item.skill_level}.</li> })}
    </ul>
    </div>

    );

}

export default Languages;