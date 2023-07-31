import Logo from '../../assets/logoeBanks2.png'
import './HeaderContainer.css'

const HeaderContainer = () => {
  return (
    <div>
      <header className='headerColor'>
        <img src={Logo} alt="Logo eBanks" className='logo' />
      </header>
    </div>
  )
};

export default HeaderContainer;