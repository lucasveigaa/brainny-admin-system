import Image from "next/image";
import HeaderHome from "../components/HeaderHome";
import { Container, ContentContainer } from "../styles/pages/home";

import Link from "next/link";
import imageHome from '../assets/image-home.png';

export default function Home() {
  return (
    <Container>
      <HeaderHome />

      <ContentContainer>
        <div>
          <span>ESQUECE O PONTO MANUAL</span>
          <br></br>
          <h1>Chegou a nova realidade para</h1>
          <h1 className="points-control"> Controle de Pontos</h1>
          <p>Com o PontoGo seus colaboradores poderão bater seus pontos de forma fácil e rápida,
            possuindo também uma Dashboard intuitiva.</p>
          <Link href="/">
            <a className="sign-now">Assinar agora</a>
          </Link>
          <Link href="/">
            <a className="see-plans">Ver planos</a>
          </Link>
        </div>
        <Image src={imageHome} alt="Homem com óculos de realidade virtual flutuando com um foguete, 
        calendário e notebook por perto." />
      </ContentContainer>
    </Container>
  )
}