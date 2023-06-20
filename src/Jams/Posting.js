
import '../css/style.css';
import '../css/JamFeed.css';


// import React,{useState} from 'react';

export default function Posting(props) { /* */

    return (
            <div className="post">

                <div className = "post-header">
                   <div>{props.title}</div>
                   <div>{props.location}</div>
                </div>

                <div className="post-content">
                   
                    <img className = "post-image" src={"./FinalProject/content/" + props.imageURL} />

                    <div>
                        <div className = "profile">
                            <img className = "profile-pic" src={"./FinalProject/content/" + props.profileURL} />
                            <div className="name">{props.name}</div> 
                        </div>
                        
                        <div className="caption">{props.caption}</div>

                        </div>
                        <div>    
                    </div>
                    
                </div>
                
            </div>

    );

};
