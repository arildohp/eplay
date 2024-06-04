import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/section'

import Gallery from '../../components/Gallery'
import hogwasts_3 from '../../assets/images/game-info-panel-03.jpg'
import { useEffect, useState } from 'react'
import { Game } from '../home'

const Product = () => {
  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [id])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title={'Sobre o jogo'} background={'black'}>
        <p>{game.description}</p>
      </Section>
      <Section title={'Mais detalhes'} background={'gray'}>
        <p>
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora: </b>
          {game.details.publisher} <br />
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
