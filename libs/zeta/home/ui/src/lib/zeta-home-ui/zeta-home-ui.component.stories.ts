import type { Meta, StoryObj } from '@storybook/angular';
import { ZetaHomeUiComponent } from './zeta-home-ui.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ZetaHomeUiComponent> = {
  component: ZetaHomeUiComponent,
  title: 'ZetaHomeUiComponent',
};
export default meta;
type Story = StoryObj<ZetaHomeUiComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/zeta-home-ui works!/gi)).toBeTruthy();
  },
};
