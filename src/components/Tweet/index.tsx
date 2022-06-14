import React from 'react';

import { Container, Retweeted, RetweetIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, Retweet, LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Elon Musk</strong>
            <span>@elonmusk</span>
            <Dot />
            <time>12 jun</time>
          </Header>

          <Description>O @ricardoferx será o primeiro homem a pisar em marte.</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              23
            </Status>
            <Status>
              <Retweet />
              154
            </Status>
            <Status>
              <LikeIcon />
              5452
            </Status>
          </Icons>
        </Content>
      </Body>

    </Container>
  );
}

export default Tweet;