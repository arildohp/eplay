import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../Button'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import * as S from './styles'
import Tag from '../Tag'
import { parseToBrl } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt=" zelda" />
              <div>
                <h3> {item.name} </h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantaty> {items.length} jogo(s) no carrinho</S.Quantaty>
        <S.Prices>
          Total de {parseToBrl(getTotalPrice())}{' '}
          <span> Em ate 6x sem juros</span>
        </S.Prices>
        <Button title="continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
