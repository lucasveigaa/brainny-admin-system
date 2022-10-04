import Header from "../components/Header";
import { ContainerDashboard, ContainerTable, ContentColaborator, SubContainerTable } from "../styles/pages/meusRegistros";

import iconMeusRegistros from '../assets/icon-meus-registros.svg';


export default function MeusRegistros() {
  return (
    <ContainerDashboard>

      <Header icon={iconMeusRegistros} content="Meus registros" />

      <ContainerTable>

        <button>Registrar ponto</button>

        <SubContainerTable>
          <strong>Colaborador</strong>
          <strong>Data</strong>
          <strong>Hora</strong>
        </SubContainerTable>

        <ContentColaborator>
          <div>
            <strong>Lucas Veiga</strong>
            <span>001</span>
          </div>
          <span>12/10/19</span>
          <span>18:30h</span>
        </ContentColaborator>

      </ContainerTable>

    </ContainerDashboard>
  )
}