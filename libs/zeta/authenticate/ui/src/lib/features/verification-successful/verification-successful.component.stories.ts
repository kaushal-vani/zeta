import type { Meta, StoryObj } from '@storybook/angular';
import { VerificationSuccessfulComponent } from './verification-successful.component';

const meta: Meta<VerificationSuccessfulComponent> = {
  component: VerificationSuccessfulComponent,
  title: 'VerificationSuccessfulComponent'
};
export default meta;
type Story = StoryObj<VerificationSuccessfulComponent>;

export const VerificationFailed: Story = {
  args: {}
};
