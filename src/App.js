import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faLanguage,
  faCakeCandles,
  faFlag,
  faCirclePlay,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import GetElement from './components/GetElement'
import ProjectContainer from './components/ProjectContainer'

const navTabDetails = [
  {
    id: 1,
    name: 'DASHBOARD',
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/9950/9950049.png',
    downArrow: 'https://cdn-icons-png.flaticon.com/128/747/747894.png',
  },
  {
    id: 2,
    name: 'APPS',
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/2489/2489014.png',
    downArrow: 'https://cdn-icons-png.flaticon.com/128/747/747894.png',
  },
  {
    id: 3,
    name: 'UI KITS',
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/9355/9355598.png',
    downArrow: 'https://cdn-icons-png.flaticon.com/128/747/747894.png',
  },
  {
    id: 4,
    name: 'PAGES',
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/5692/5692284.png',
    downArrow: 'https://cdn-icons-png.flaticon.com/128/747/747894.png',
  },
  {
    id: 5,
    name: 'AUTHENTICATION',
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/10645/10645744.png',
    downArrow: 'https://cdn-icons-png.flaticon.com/128/747/747894.png',
  },
]

const projects = [
  {
    name: 'Organic Farming',
  },
  {
    name: 'Transfer Money',
  },
  {
    name: 'Money Account Setting',
  },
  {
    name: 'Book My World',
  },
]

const App = () => (
  <div className="main-container">
    <nav className="nav-edit">
      <div className="logo-container">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5969/5969117.png"
          className="main-logo"
          alt="company logo"
        />
        <h1 className="company-name">T Wind</h1>
        <ul className="list-edit">
          {navTabDetails.map(eachElement => (
            <GetElement
              key={eachElement.id}
              image={eachElement.imageUrl}
              name={eachElement.name}
              downArrow={eachElement.downArrow}
            />
          ))}
        </ul>
      </div>
      <div className="search-container">
        <div className="input-div">
          <div>
            <input type="search" placeholder="Search" />
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
            className="image-edit"
            alt="search icon"
          />
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/5299/5299146.png"
          className="bright-img"
          alt="img"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/1182/1182769.png"
          className="bright-img"
          alt="img"
        />
        <div className="profile-container">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            className="bright-img"
            alt="img"
          />
          <div>
            <p className="profile-name">Teerdha</p>
            <p className="profile-name">Admin</p>
          </div>
        </div>
      </div>
    </nav>
    <div className="below-container">
      <div className="pages-container">
        <div>
          <p>Profile</p>
          <p>
            T-Wind / pages / <span className="span-edit">Profile</span>
          </p>
        </div>

        <button className="button-edit" type="button">
          CREATE NEW
        </button>
      </div>
      <div className="profile-container2">
        <></>
      </div>
      <div className="profile-top-container">
        <div className="profile-div">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9187/9187604.png"
            className="profile-picture-edit"
            alt="profile"
          />
        </div>
      </div>
      <div className="profile-names">
        <h1 className="profile-name-main">Teerdha Manikanta</h1>
        <p className="designation">React Developer</p>
      </div>
      <div className="tab-container">
        <button type="button" className="tab-edit">
          PROFILE
        </button>
        <button type="button" className="selected-tab-element">
          PROJECTS
        </button>
        <button type="button" className="tab-edit">
          POSTS
        </button>
        <button type="button" className="tab-edit">
          SETTINGS
        </button>
      </div>
      <div className="last-main-container">
        <div className="projects-container-main-bg">
          {projects.map(eachProject => (
            <ProjectContainer name={eachProject.name} />
          ))}
        </div>
        <div className="About-container">
          <p className="about-heading">ABOUT</p>
          <hr className="hr-app-style" />
          <p className="about-heading">
            It is a long established fact that render will get distracted by
            readble content of a page while looking at it and its layout
          </p>
          <div className="about-sub-container">
            <div>
              <FontAwesomeIcon icon={faCakeCandles} className="about-image" />
            </div>
            <p className="about-para">17 May 2000</p>
          </div>
          <div className="about-sub-container">
            <div>
              <FontAwesomeIcon icon={faLanguage} className="about-image" />
            </div>
            <p className="about-para">Telugu,English</p>
          </div>
          <div className="about-sub-container">
            <div>
              <FontAwesomeIcon icon={faFlag} className="about-image" />
            </div>
            <p className="about-para">INDIA</p>
          </div>
          <div className="about-sub-container">
            <div>
              <FontAwesomeIcon icon={faCirclePlay} className="about-image" />
            </div>
            <p className="about-para">Music Reading</p>
          </div>
          <p className="about-heading">CONTACT</p>
          <hr className="hr-app-style" />
          <div className="about-sub-container">
            <div>
              <FontAwesomeIcon icon={faPhone} className="about-image" />
            </div>
            <p className="about-para">9502456345</p>
          </div>
          <div className="about-sub-container">
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="about-image" />
            </div>
            <p className="about-para">teerdhamanikanta@gmail.com</p>
          </div>
          <div className="main-social-container">
            <div className="social-container">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                alt="instagram"
                className="social-img-edit"
              />
            </div>
            <div className="social-container">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png"
                alt="Twitter"
                className="social-img-edit"
              />
            </div>
            <div className="social-container">
              <img
                src="https://cdn-icons-png.flaticon.com/128/10091/10091605.png"
                alt="google"
                className="social-img-edit"
              />
            </div>
            <div className="social-container">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                alt="facebook"
                className="social-img-edit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App
