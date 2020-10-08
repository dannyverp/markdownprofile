import React from 'react';

const Contributors = ({ contributors }) => {
    return (
        <div className="flex items-center text-orange-500">
            Contributors:  
            {contributors.map( (contributor) => (
                
                    <a href={contributor.html_url} key={contributor.id}>
                        <img key={contributor.id} 
                            src={contributor.avatar_url} 
                            alt={contributor.login + "'s avatar"}
                            title={contributor.login}
                            className="inline contributor-avatar">
                        </img>
                    </a>
                
            ))}
        </div>
        
    );
};

export default Contributors;