import Logo from './Logo';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header>
      <div>
        <Logo/>
        <SearchOrder/>
        <Username/>
      </div>
    </header>
  )
}

export default Header
