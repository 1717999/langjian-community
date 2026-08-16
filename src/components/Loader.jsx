import './Loader.css'

export default function Loader({ visible }) {
  return (
    <div className={`loader-overlay${visible ? ' loader-overlay--visible' : ' loader-overlay--hidden'}`}>
      <div className="ui-abstergo">
        <div className="abstergo-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="ui-text">
          Synchronization
          <div className="ui-dot"></div>
          <div className="ui-dot"></div>
          <div className="ui-dot"></div>
        </div>
      </div>
    </div>
  )
}
