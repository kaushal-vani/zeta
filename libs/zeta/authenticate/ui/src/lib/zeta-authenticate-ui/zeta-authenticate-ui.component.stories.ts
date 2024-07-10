import type { Meta, StoryObj } from '@storybook/angular';
import { ZetaAuthenticateUiComponent } from './zeta-authenticate-ui.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ZetaAuthenticateUiComponent> = {
  component: ZetaAuthenticateUiComponent,
  title: 'ZetaAuthenticateUiComponent',
};
export default meta;
type Story = StoryObj<ZetaAuthenticateUiComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/zeta-authenticate-ui works!/gi)).toBeTruthy();
  },
};
