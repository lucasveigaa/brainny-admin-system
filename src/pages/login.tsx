import Image from 'next/future/image';
import Link from 'next/link';
import { ContainerContent, ContainerLogin, HomeContainer } from "../../styles/pages/login";

import imgHome from '../assets/home.png';
import iconInput from '../assets/icon-input.svg';
import imgLogo from '../assets/logo-azul.png';

export default function Home() {
  return (
    <HomeContainer>

      <ContainerContent>

        <Image src={imgHome} width={585} height={663} alt="" />

        <h1>Bem vindo ao PontoGo</h1>
        <span>Aqui você fará toda gestão do
          seu sistema de pontos.</span>

      </ContainerContent>

      <ContainerLogin>
        <Image src={imgLogo} alt="Logo da PontoGo" />

        <h1>Faça login</h1>

        <form>

          <label htmlFor='email'>Email</label>
          <input type="email" id="email" placeholder='exemplo@email.com' />

          <label htmlFor="password">Senha</label>

          <div>
            <input type="password" id="password" placeholder='*************' />
            <Image src={iconInput} alt="" />
          </div>

          <Link href="/">Esqueci minha senha</Link>

          <button>Entrar</button>

        </form>
      </ContainerLogin>

    </HomeContainer>
  )
}
