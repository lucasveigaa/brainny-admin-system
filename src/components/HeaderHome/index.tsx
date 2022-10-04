import Image from "next/image";
import Link from "next/link";
import { Header } from "./styles";

import logo from '../../assets/logo-branca.png';

export default function HeaderHome() {
  return (
    <Header>
      <Link href="/">
        <Image alt="Logo branca da Ponto Go" src={logo} width={164} height={38} />
      </Link>
      <div>
        <Link href="#">Início</Link>
        <Link href="#">Planos</Link>
        <Link href="/login">Fazer login</Link>
      </div>
    </Header>
  )
}