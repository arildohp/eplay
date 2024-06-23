import { Button } from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row } from './styles'

const Checkout = () => (
  <div className="container">
    <Card title="Dados de cobrança">
      <>
        <Row>
          <InputGroup>
            <label htmlFor="fullname">Nome container</label>
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
    <Card title="pagamento">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
        excepturi animi similique consequatur, debitis molestias quasi doloribus
        laudantium nulla distinctio nostrum libero ipsum magni amet accusantium
        totam iure consequuntur quidem.
      </p>
    </Card>
    <Button type="button" title=" Cliqyue aqui para finalizar a compra">
      Finalizar compra
    </Button>
  </div>
)
export default Checkout
