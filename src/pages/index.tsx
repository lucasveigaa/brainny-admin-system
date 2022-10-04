import Image from "next/future/image";
import HeaderHome from "../components/HeaderHome";
import { Container, ContentContainer, LogoCompanies } from "../styles/pages/home";

import Link from "next/link";

import imageHome from '../assets/image-home.png';
import logoAmopet from '../assets/logo-amopet.png';
import logoBrainny from '../assets/logo-brainny.png';
import logoBus from '../assets/logo-bus.png';
import logoGoStudy from '../assets/logo-gostudy.png';

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

      <LogoCompanies>
        <Image src={logoBrainny} alt="Logo da Brainny" />
        <Image src={logoAmopet} alt="Logo da Amo Pet" />
        <Image src={logoBus} alt="Logo da .Bus" />
        <Image width={283} height={74} src={logoGoStudy} alt="Logo da Go Study" />
      </LogoCompanies>

    </Container>
  )
}