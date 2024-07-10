import type { Meta, StoryObj } from '@storybook/angular';
import { ZetaTimelineUiComponent } from './zeta-timeline-ui.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ZetaTimelineUiComponent> = {
  component: ZetaTimelineUiComponent,
  title: 'ZetaTimelineUiComponent',
};
export default meta;
type Story = StoryObj<ZetaTimelineUiComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/zeta-timeline-ui works!/gi)).toBeTruthy();
  },
};
