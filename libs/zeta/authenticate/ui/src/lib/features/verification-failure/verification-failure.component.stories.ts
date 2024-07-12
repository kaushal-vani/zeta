import type { Meta, StoryObj } from '@storybook/angular';
import { VerificationFailureComponent } from './verification-failure.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<VerificationFailureComponent> = {
  component: VerificationFailureComponent,
  title: 'VerificationFailureComponent'
};
export default meta;
type Story = StoryObj<VerificationFailureComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/verification-failure works!/gi)).toBeTruthy();
  }
};
