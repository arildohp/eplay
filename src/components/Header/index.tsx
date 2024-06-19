import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, CartButton } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          {' '}
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <Link to="categories">Novidades</Link>
            </LinkItem>
            <LinkItem>
              <Link to="categories">Promoções</Link>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        0 - produto(s)
        <img src={carrinho} alt="carrinho" />
      </CartButton>
    </HeaderBar>
  )
}
export default Header
