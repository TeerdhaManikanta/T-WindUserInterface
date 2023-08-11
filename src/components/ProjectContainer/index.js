import './index.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faClock,
  faBars,
  faComment,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

const ProjectContainer = props => {
  const {name} = props
  return (
    <div className="project-div">
      <div className="project-title-container">
        <h1 className="heading-project">{name}</h1>
        <div className="icon-container">
          <p className="space">01.33 / 9.30 .</p>
          <FontAwesomeIcon icon={faClock} className="font-awesome-icon space" />
          <p className="space">June 06</p>
        </div>
      </div>
      <p className="text-edit">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </p>
      <div className="status-container">
        <p className="para-twind">T-WIND</p>
        <p className="para-twind">45% Complete</p>
      </div>
      <div className="line-main-div ">
        <div className="line-div">
          <hr className="line-edit" />
        </div>

        <div className="line-div">
          <hr className="line-edit2" />
        </div>
      </div>
      <div className="project-sub2-container">
        <div className="image-container">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/599/599305.png"
              alt="profile"
              className="multiple-user-image-edit"
            />
          </div>
          <div className="single-image-container">
            <img
              src="https://cdn-icons-png.flaticon.com/128/599/599305.png"
              alt="profile"
              className="multiple-user-image-edit"
            />
          </div>

          <div className="single-image-container">
            <img
              src="https://cdn-icons-png.flaticon.com/128/599/599305.png"
              alt="profile"
              className="multiple-user-image-edit"
            />
          </div>

          <div className="single-image-container4">+8</div>
        </div>
        <div className="font-awesome-icons">
          <FontAwesomeIcon icon={faBars} />
          <p>15/100</p>
          <FontAwesomeIcon icon={faComment} className="Trash-icon" />
          <p>3</p>
          <FontAwesomeIcon icon={faPenToSquare} className="Trash-icon" />
          <FontAwesomeIcon icon={faTrash} className="Trash-icon" />
        </div>
      </div>
    </div>
  )
}
export default ProjectContainer
