import Image from 'next/future/image';
import Link from 'next/link';

import { HeaderContainer, IconContainer, LogoContainer, SignoutContainer } from "./header";

import iconDashboard from '../../assets/icon-dashboard.svg';
import iconSair from '../../assets/icon-sair.svg';
import imgLogo from '../../assets/logo-azul.png';

export default function Header() {
  return (
    <HeaderContainer>

      <LogoContainer>
        <Image src={imgLogo} alt="" width={134} height={31} />
      </LogoContainer>

      <Link href="/dashboard">

        <IconContainer>
          <Image src={iconDashboard} alt="" />
          <span>Dashboard</span>
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