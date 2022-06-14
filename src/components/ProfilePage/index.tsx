import React from 'react';

import Feed from '../Feed'

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Ricardo Fernandes</h1>
        <h2>@ricardoferx</h2>

        <p>
          Developer at <a href="https://github.com/ricardofernandesx">@Github</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 19 de janeiro de 1999
          </li>
        </ul>

        <Followage>
          <span>
            <strong>80 </strong> seguindo
          </span>
          <span>
            <strong>424 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;