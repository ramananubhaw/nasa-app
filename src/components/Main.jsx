export default function Main(props) {

  const {data, showModal, handleToggleModal} = props;

  return (
    <div onClick={() => {if (showModal) handleToggleModal();}} className="imgContainer">
      <img src={data.hdurl} alt={data.title || 'APOD Image'} className="bgImage" />
    </div>
    
  )
}
