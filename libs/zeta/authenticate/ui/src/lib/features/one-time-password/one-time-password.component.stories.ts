import type { Meta, StoryObj } from '@storybook/angular';
import { OneTimePasswordComponent } from './one-time-password.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<OneTimePasswordComponent> = {
  component: OneTimePasswordComponent,
  title: 'OneTimePasswordComponent'
};
export default meta;
type Story = StoryObj<OneTimePasswordComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/one-time-password works!/gi)).toBeTruthy();
  }
};
