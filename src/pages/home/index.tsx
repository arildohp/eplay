import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/games'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'FPS',
    description:
      'Resident Evil 4 é um remake do Resident Evil 4 original de 2005.Reimaginado para 2023 para trazer horror de sobrevivência de última geração.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'RPG',
    description:
      'A batalha entre o Paraíso Celestial e o Inferno Ardente continua. Com demônios para abater, habilidades para dominar, masmorras e espólios, Diablo IV traz aventura e devastação.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['15%', 'R$ 230,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Parte numa viagem épica que te fará percorrer as terras e os vastos céus de Hyrule em The Legend of Zelda: Tears of the Kingdom para a Nintendo Switch. Cria a tua própria aventura num mundo onde podes dar asas à imaginação.',
    title: 'Zelda',
    system: 'Nintendo Switch',
    infos: ['15%', 'R$ 199,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Star Wars Jedi Survivor - PS5 é uma aventura em terceira pessoa que se passa cinco anos após os eventos de STAR WARS Jedi: Fallen Order.',
    title: 'Star Wars',
    system: 'PS5',
    infos: ['10%', 'R$ 200,00'],
    image: starwars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Aventura',
    description:
      'Parte numa viagem épica que te fará percorrer as terras e os vastos céus de Hyrule em The Legend of Zelda: Tears of the Kingdom para a Nintendo Switch. Cria a tua própria aventura num mundo onde podes dar asas à imaginação.',
    title: 'Zelda',
    system: 'nintendo Switch',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 6,
    category: 'FPS',
    description:
      'Resident Evil 4 é um remake do Resident Evil 4 original de 2005.Reimaginado para 2023 para trazer horror de sobrevivência de última geração.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['17/05'],
    image: resident
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'A batalha entre o Paraíso Celestial e o Inferno Ardente continua. Com demônios para abater, habilidades para dominar, masmorras e espólios, Diablo IV traz aventura e devastação.',
    title: 'Diablo IV',
    system: 'XBOX',
    infos: ['20/05'],
    image: diablo
  },
  {
    id: 8,
    category: 'Aventura',
    description:
      'Star Wars Jedi Survivor - PS5 é uma aventura em terceira pessoa que se passa cinco anos após os eventos de STAR WARS Jedi: Fallen Order.',
    title: 'Star Wars',
    system: 'ps5',
    infos: ['17/05'],
    image: starwars
  }
]
const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
