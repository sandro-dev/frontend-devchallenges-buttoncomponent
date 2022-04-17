import React from 'react';

import { Button } from '../../components/Button';

import { Container, Content } from './style';

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <h1>Buttons</h1>
      <Content>
        <h2>normal</h2>
        <div>
          <Button text="Default" />
          <Button text="Outline" variant="outline" />
          <Button text="Text" variant="text" />
        </div>

        <h2>colors</h2>
        <div>
          <Button text="Default" color="default" />
          <Button text="Primary" color="primary" />
          <Button text="Secondary" color="secondary" />
          <Button text="Danger" color="danger" />
        </div>

        <hr />
        <h2>icons startIcon</h2>
        <div>
          <Button text="Default" color="default" startIcon="home" />
          <Button text="Primary" color="primary" startIcon="bookmarks" />
          <Button text="Primary" color="primary" startIcon="thumb_up" />
          <Button text="Secondary" color="secondary" startIcon="login" />
          <Button text="Danger" color="danger" startIcon="logout" />
        </div>

        <h2>icons endIcon</h2>
        <div>
          <Button text="Default" color="default" endIcon="reorder" />
          <Button text="Primary" color="primary" endIcon="settings" />
          <Button text="Primary" color="primary" endIcon="favorite_border" />
          <Button text="Secondary" color="secondary" endIcon="fingerprint" />
          <Button text="Danger" color="danger" endIcon="delete" />
        </div>

        <hr />

        <h2>outline colors</h2>
        <div>
          <Button text="Default" color="default" variant="outline" />
          <Button text="Primary" color="primary" variant="outline" />
          <Button text="Secondary" color="secondary" variant="outline" />
          <Button text="Danger" color="danger" variant="outline" />
        </div>

        <h2>outline text</h2>
        <div>
          <Button text="Default" color="default" variant="text" />
          <Button text="Primary" color="primary" variant="text" />
          <Button text="Secondary" color="secondary" variant="text" />
          <Button text="Danger" color="danger" variant="text" />
        </div>

        <hr />

        <h2>disableShadow</h2>
        <div>
          <Button text="Default" size="sm" disableShadow />
          <Button text="Outline" variant="outline" size="md" disableShadow />
          <Button text="Text" variant="text" size="lg" disableShadow />
        </div>

        <h2>disabled</h2>
        <div>
          <Button text="Default" size="sm" disabled />
          <Button text="Outline" variant="outline" size="md" disabled />
          <Button text="Text" variant="text" size="lg" disabled />
        </div>

        <hr />

        <h2>sizes default</h2>

        <div>
          <Button text="Default" size="sm" color="default" />
          <Button text="Default" size="md" color="default" />
          <Button text="Default" size="lg" color="default" />
        </div>

        <div>
          <Button text="Default" size="sm" color="primary" />
          <Button text="Default" size="md" color="primary" />
          <Button text="Default" size="lg" color="primary" />
        </div>
        <div>
          <Button text="Default" size="sm" color="secondary" />
          <Button text="Default" size="md" color="secondary" />
          <Button text="Default" size="lg" color="secondary" />
        </div>
        <div>
          <Button text="Default" size="sm" color="danger" />
          <Button text="Default" size="md" color="danger" />
          <Button text="Default" size="lg" color="danger" />
        </div>

        <hr />

        <h2>sizes outline</h2>

        <div>
          <Button text="Default" size="sm" color="default" variant="outline" />
          <Button text="Default" size="md" color="default" variant="outline" />
          <Button text="Default" size="lg" color="default" variant="outline" />
        </div>

        <div>
          <Button text="Default" size="sm" color="primary" variant="outline" />
          <Button text="Default" size="md" color="primary" variant="outline" />
          <Button text="Default" size="lg" color="primary" variant="outline" />
        </div>

        <div>
          <Button text="Default" size="sm" color="secondary" variant="outline" startIcon="home" />
          <Button text="Default" size="md" color="secondary" variant="outline" />
          <Button text="Default" size="lg" color="secondary" variant="outline" />
        </div>

        <div>
          <Button text="Default" size="sm" color="danger" variant="outline" endIcon="delete" />
          <Button text="Default" size="md" color="danger" variant="outline" />
          <Button text="Default" size="lg" color="danger" variant="outline" />
        </div>

        <hr />

        <h2>text</h2>

        <div>
          <Button text="Default" size="sm" color="default" variant="text" />
          <Button text="Default" size="sm" color="primary" variant="text" startIcon="thumb_up" />
          <Button text="Default" size="sm" color="secondary" variant="text" />
          <Button text="Default" size="sm" color="danger" variant="text" />
        </div>
      </Content>
    </Container>
  );
};
