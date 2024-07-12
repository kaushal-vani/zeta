import type { Meta, StoryObj } from '@storybook/angular';
import { AuthenticationDrawerComponent } from './authentication-drawer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AuthenticationDrawerComponent> = {
  component: AuthenticationDrawerComponent,
  title: 'AuthenticationDrawerComponent'
};
export default meta;
type Story = StoryObj<AuthenticationDrawerComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/authentication-drawer works!/gi)).toBeTruthy();
  }
};
