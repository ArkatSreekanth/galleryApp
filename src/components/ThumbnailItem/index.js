import './index.css'

const ThumbnailItem = props => {
  const {eachItem} = props
  return (
    <li>
      <img src={eachItem.imageUrl} alt={eachItem.thumbnailAltText} />
    </li>
  )
}

export default ThumbnailItem
