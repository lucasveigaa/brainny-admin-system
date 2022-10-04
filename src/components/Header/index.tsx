import Image from 'next/future/image';
import Link from 'next/link';

import { HeaderContainer, IconContainer, LogoContainer, SignoutContainer } from "./styles";

import iconSair from '../../assets/icon-sair.svg';
import logoAzul from '../../assets/logo-azul.png';

interface HeaderProps {
  icon: string;
  content: string;
}

export default function Header({ icon, content }: HeaderProps) {
  return (
    <HeaderContainer>

      <LogoContainer>
        <Image src={logoAzul} alt="" width={134} height={31} />
      </LogoContainer>

      <Link href="/dashboard">

        <IconContainer>
          <Image src={icon} alt="" />
          <span>{content}</span>
        </IconContainer>

      </Link>

      <Link href="/">
        <SignoutContainer>
          <Image src={iconSair} alt="" />
          Sair
        </SignoutContainer>
      </Link>

    </HeaderContainer>
  )
}