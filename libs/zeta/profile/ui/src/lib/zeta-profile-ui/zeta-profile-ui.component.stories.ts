import type { Meta, StoryObj } from '@storybook/angular';
import { ZetaProfileUiComponent } from './zeta-profile-ui.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ZetaProfileUiComponent> = {
  component: ZetaProfileUiComponent,
  title: 'ZetaProfileUiComponent',
};
export default meta;
type Story = StoryObj<ZetaProfileUiComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/zeta-profile-ui works!/gi)).toBeTruthy();
  },
};
