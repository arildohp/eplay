import bannerImg from '../../assets/images/hogwarts-legacy.png'
import { Button } from '../Button'
import Tag from '../Tag'

import { Banner, Infos } from './styles'
const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
        <Tag>PC</Tag>
        <Tag>XBOX</Tag>
      </div>

      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          Por R$ 199,90
        </p>
        <Button
          type={'button'}
          title={'Adicionar ao carrinho'}
          variant="primary"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
