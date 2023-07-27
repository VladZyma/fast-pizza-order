import {Link} from 'react-router-dom';

function CartOverview() {
  return (
    <div>
      <p>
        <span>X pizzas</span>
        <span>$XX.XX</span>
      </p>
      <Link to='/cart'>OPEN CART</Link>
    </div>
  )
}

export default CartOverview
