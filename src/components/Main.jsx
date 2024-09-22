export default function Main(props) {

  const {showModal, handleToggleModal} = props;

  return (
    <div onClick={() => {if (showModal) handleToggleModal();}} className="imgContainer">
      <img src="mars.png" alt="NASA Picture of the Day" className="bgImage" />
    </div>
    
  )
}
