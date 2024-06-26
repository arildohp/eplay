import { useState } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'

import { Button } from '../../components/Button'
import Card from '../../components/Card'

import * as S from './styles'

import barCode from '../../assets/images/boleto.png'
import creditCard from '../../assets/images/cartao.png'

import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

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
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfcardOwner,
              name: values.cardOwner
            },
            expires: {
              month: 1,
              year: 2024
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }
  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito obrigado">
          <>
            <p>
              É com satisfação que informamos que recebemnos seu pedido com
              sucesso!
              <br />
              Abaixo estão os detalhes da sua compra:
              <br /> Número do {data.orderId} <br /> Forma Forma de pagamento:{' '}
              {payWithCard ? 'cartão de crédito' : 'Boleto bancario'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancario, lembre-se de
              confirmação pode levar ate 3 dias uteis. Apos a aprovovação
              aprovovação pagamento, enviaremos um email contendo o código de
              ativação do jogo
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de creedito a liberação do
              codigo de ativação ocorrerá após a aprovação da transação. Você
              recebera o código no e-mail cadastrado em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam parea
              garantir que receba nossa comunicação. Caso tenha alguma duvida ou
              necessite de mais informações, por favor, entre em contato conosco
              atratves dos nossos canais de atendimento.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit} className="container">
          <Card title="Dados de cobrança">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Nome completo</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('fullName', form.errors.fullName)}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
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
                </S.InputGroup>
                <S.InputGroup>
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
                </S.InputGroup>
              </S.Row>
              <h3 className="margin-top">
                Dados da entrega - conteudo digital
              </h3>
              <S.Row>
                <S.InputGroup>
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
                    {getErrorMessage(
                      'deliveryEmail',
                      form.errors.deliveryEmail
                    )}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmDeliveryEmail">
                    Confirme o e-mail
                  </label>
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
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <S.TabButton
                isActive={!payWithCard}
                onClick={() => setPayWithCard(false)}
              >
                <img src={barCode} alt="Boleto" />
                Boleto bancário
              </S.TabButton>
              <S.TabButton
                isActive={payWithCard}
                onClick={() => setPayWithCard(true)}
              >
                <img src={creditCard} alt="Cartão de crédito" />
                Cartão de crédito
              </S.TabButton>
              <div className="margin-top">
                {payWithCard ? (
                  <>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardOwner">
                          Nome do titular do cartão
                        </label>
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
                      </S.InputGroup>
                      <S.InputGroup>
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
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup>
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
                      </S.InputGroup>
                      <S.InputGroup>
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
                          {getErrorMessage(
                            'cardNumber',
                            form.errors.cardNumber
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
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
                          {getErrorMessage(
                            'expireMonth',
                            form.errors.expireMonth
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
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
                          {getErrorMessage(
                            'expiresYear',
                            form.errors.expiresYear
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup maxWidth="48px">
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
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup maxWidth="130px">
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
                      </S.InputGroup>
                    </S.Row>
                  </>
                ) : (
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. It
                    Itaque Itaque Itaque Itaque excepturi animi similique
                    consequatur, molestias quasi doloribus laudantium nulla
                    distinctio nostrum libero ipsum amet
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            onClick={form.handleSubmit}
            type="button"
            title=" Clique aqui para finalizar a compra"
          >
            Finalizar compra
          </Button>
        </form>
      )}
    </div>
  )
}
export default Checkout
