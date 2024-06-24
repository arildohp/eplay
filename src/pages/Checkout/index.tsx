import { useState } from 'react'
import { Button } from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row, TabButton } from './styles'
import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfcardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expireMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: yup.object({
      fullName: yup
        .string()
        .min(5, 'o nome precisa ter pelo menos 5 caracteres')
        .required('Campo obrigatorio'),
      email: yup
        .string()
        .email('E-mail inválido')
        .required('Campo obrigatorio'),
      cpf: yup
        .string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(15, 'O campo precisa ter 14 caracteres')
        .required('Campo obrigatorio'),
      deliveryEmail: yup
        .string()
        .email('E-mail inválido')
        .required('Campo obrigatorio'),
      confirmDeliveryEmail: yup
        .string()
        .oneOf([yup.ref('deliveryEmail')], 'os e-mails são diferentes')
        .required('Campo obrigatorio'),
      cardOwner: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      cpfcardOwner: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      cardDisplayName: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      cardNumber: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      expireMonth: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      expiresYear: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      cardCode: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      installments: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }
  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('email', form.errors.email)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados da entrega - conteudo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input
                id="deliveryEmail"
                type="email"
                name="deliveryEmail"
                value={form.values.deliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input
                id="confirmDeliveryEmail"
                type="email"
                name="confirmDeliveryEmail"
                value={form.values.confirmDeliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {getErrorMessage(
                'confirmDeliveryEmail',
                form.errors.confirmDeliveryEmail
              )}
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
                    <input
                      id="cardOwner"
                      type="text"
                      name="cardOwner"
                      value={form.values.cardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardOwner', form.errors.cardOwner)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfcardOwner">
                      CPF do titular do cartão
                    </label>
                    <input
                      id="cpfcardOwner"
                      type="text"
                      name="cpfcardOwner"
                      value={form.values.cpfcardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'cpfcardOwner',
                        form.errors.cpfcardOwner
                      )}
                    </small>
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      id="cardDisplayName"
                      type="text"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'cardDisplayName',
                        form.errors.cardDisplayName
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Numero do cartão</label>
                    <input
                      id="cardNumber"
                      type="number"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expireMonth">Mês do vencimento </label>
                    <input
                      id="expireMonth"
                      type="text"
                      name="expireMonth"
                      value={form.values.expireMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('expireMonth', form.errors.expireMonth)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresYear">Ano de vencimento </label>
                    <input
                      id="expiresYear"
                      type="text"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('expiresYear', form.errors.expiresYear)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV </label>
                    <input
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </small>
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="130px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select
                      id="installments"
                      name="installments"
                      value={form.values.installments}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    >
                      <option value="">1x de R$200,00</option>
                      <option value="">2x de R$100,00</option>
                    </select>
                    <small>
                      {getErrorMessage(
                        'installments',
                        form.errors.installments
                      )}
                    </small>
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
    </form>
  )
}
export default Checkout
