import type { Meta, StoryObj } from '@storybook/angular';
import { ZetaTaskUiComponent } from './zeta-task-ui.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ZetaTaskUiComponent> = {
  component: ZetaTaskUiComponent,
  title: 'ZetaTaskUiComponent',
};
export default meta;
type Story = StoryObj<ZetaTaskUiComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/zeta-task-ui works!/gi)).toBeTruthy();
  },
};
