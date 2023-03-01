import './styles.scss'

function Main() {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="inner one" />
        <div className="inner two" />
        <div className="inner three" />
      </div>
      <p className="text-xs mt-22">loading</p>
    </div>
  )
}

export default Main
