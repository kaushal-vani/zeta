import type { Meta, StoryObj } from '@storybook/angular';
import { VerificationSuccessfulComponent } from './verification-successful.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<VerificationSuccessfulComponent> = {
  component: VerificationSuccessfulComponent,
  title: 'VerificationSuccessfulComponent'
};
export default meta;
type Story = StoryObj<VerificationSuccessfulComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/verification-successful works!/gi)).toBeTruthy();
  }
};
