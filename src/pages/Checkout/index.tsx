import { useState } from 'react'
import { Button } from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row, TabButton } from './styles'
import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullname">Nome completo</label>
              <input id="fullname" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados da entrega - conteudo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input id="deliveryEmail" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input id="confirmeDeliveryEmail" type="email" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="Boleto" />
            Boleto bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartao} alt="Cartão de crédito" />
            Cartão de crédito
          </TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
                    <input id="cardOwner" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfcardOwner">
                      CPF do titular do cartão
                    </label>
                    <input id="cpfcardOwner" type="text" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input id="cardDisplayName" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Numero do cartão</label>
                    <input id="cardNumber" type="number" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expireMonth">Mês do vencimento </label>
                    <input id="expireMonth" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresYear">Ano de vencimento </label>
                    <input id="expiresYear" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV </label>
                    <input id="cardCode" type="text" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="130px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select name="" id="">
                      <option value="">1x de R$200,00</option>
                      <option value="">2x de R$100,00</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                excepturi animi similique consequatur, debitis molestias quasi
                doloribus laudantium nulla distinctio nostrum libero ipsum amet
              </p>
            )}
          </div>
        </>
      </Card>
      <Button type="button" title=" Clique aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </div>
  )
}
export default Checkout
