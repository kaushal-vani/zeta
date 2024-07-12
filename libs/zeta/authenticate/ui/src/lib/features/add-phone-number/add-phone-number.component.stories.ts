import type { Meta, StoryObj } from '@storybook/angular';
import { AddPhoneNumberComponent } from './add-phone-number.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AddPhoneNumberComponent> = {
  component: AddPhoneNumberComponent,
  title: 'AddPhoneNumberComponent'
};
export default meta;
type Story = StoryObj<AddPhoneNumberComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/add-phone-number works!/gi)).toBeTruthy();
  }
};
