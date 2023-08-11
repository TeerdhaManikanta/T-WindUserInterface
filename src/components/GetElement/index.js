import './index.css'

const GetElement = props => {
  const {image, name, downArrow} = props

  return (
    <li className="list-edit">
      <div>
        <img src={image} alt="nav-logo" className="nav-logo-edit" />
      </div>
      <p className="heading">{name}</p>
      <img src={downArrow} className="nav-logo-edit2" alt="navLogo" />
    </li>
  )
}

export default GetElement
