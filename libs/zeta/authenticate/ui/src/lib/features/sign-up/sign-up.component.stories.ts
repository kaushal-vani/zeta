import type { Meta, StoryObj } from '@storybook/angular';
import { SignUpComponent } from './sign-up.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SignUpComponent> = {
  component: SignUpComponent,
  title: 'SignUpComponent'
};
export default meta;
type Story = StoryObj<SignUpComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/sign-up works!/gi)).toBeTruthy();
  }
};
