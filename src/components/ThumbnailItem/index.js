// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItemDetail, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailItemDetail
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickImage = () => {
    setActiveThumbnailId(id)
  }
  return (
    <li className="thumbnail-list-item">
      <button type="button" onClick={onClickImage} className="thumbnail-button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
