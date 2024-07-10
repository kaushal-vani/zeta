import type { Meta, StoryObj } from '@storybook/angular';
import { ZetaStatsUiComponent } from './zeta-stats-ui.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ZetaStatsUiComponent> = {
  component: ZetaStatsUiComponent,
  title: 'ZetaStatsUiComponent',
};
export default meta;
type Story = StoryObj<ZetaStatsUiComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/zeta-stats-ui works!/gi)).toBeTruthy();
  },
};
