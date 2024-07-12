import type { Meta, StoryObj } from '@storybook/angular';
import { LogInComponent } from './log-in.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<LogInComponent> = {
  component: LogInComponent,
  title: 'LogInComponent'
};
export default meta;
type Story = StoryObj<LogInComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/log-in works!/gi)).toBeTruthy();
  }
};
