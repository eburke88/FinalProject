import '../css/Profile.css';
import '../css/style.css';
import '../css/Project.css';

export default function ProfileHeader({type, title, src, alt}) { /* Header for just the profile page */

    return (
          
    <div className="header-box">
    <div className="header">

      <img className="profile-header-image" src={src} alt={alt}/>

      <div className="header-info">
          <div className="header-type">{type}</div>
          <div className="header-title">{title}</div>
          <a className="header-desc" href={"https://issuu.com/eburke88/docs/resume"} target="_blank" rel="noreferrer" >View Resume</a>
      </div>

    </div>

  </div>
    );
}