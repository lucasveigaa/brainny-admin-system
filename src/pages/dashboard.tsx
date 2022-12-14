import Header from "../components/Header";
import { ContainerDashboard, ContainerTable, ContentColaborator, SubContainerTable } from "../styles/pages/dashboard";


import iconDashboard from '../assets/icon-dashboard.svg';

export default function Dashboard() {
  return (
    <ContainerDashboard>

      <Header icon={iconDashboard} content='Dashboard' />

      <ContainerTable>

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