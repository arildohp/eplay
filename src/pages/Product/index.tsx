import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/section'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title={'Sobre o jogo'} background={'black'}>
        <p>
          Hogwarts Legacy é um RPG de ação e mundo aberto ambientado no mundo
          apresentado nos livros de Harry Potter. Agora você pode assumir o
          controle da ação e criar sua própria aventura. Descubra a sensação de
          viver em Hogwarts enquanto faz aliados, luta contra bruxos das trevas
          e, por fim, decide o destino do mundo bruxo. Seu legado é o que você
          faz dele.
        </p>
      </Section>
      <Section title={'Mais detalhes'} background={'gray'}>
        <p>
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora: </b>Warner Bros. Games <br />
          <b>Data de lançamento </b>10/02/23 <br />
          <b>Plataforma:</b> PS5, XBOX, PC <br />
          <b>Idiomas:</b> português, espanhol, inglês, alemão
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <div>FOTOS</div>
      </Section>
    </>
  )
}

export default Product
