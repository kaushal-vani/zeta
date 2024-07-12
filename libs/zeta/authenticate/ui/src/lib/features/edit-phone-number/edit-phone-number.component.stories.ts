import type { Meta, StoryObj } from '@storybook/angular';
import { EditPhoneNumberComponent } from './edit-phone-number.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<EditPhoneNumberComponent> = {
  component: EditPhoneNumberComponent,
  title: 'EditPhoneNumberComponent'
};
export default meta;
type Story = StoryObj<EditPhoneNumberComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/edit-phone-number works!/gi)).toBeTruthy();
  }
};
