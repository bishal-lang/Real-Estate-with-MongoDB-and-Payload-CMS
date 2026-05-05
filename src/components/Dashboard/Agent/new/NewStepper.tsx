import { Stepper, StepperStep } from '@mantine/core'

export default function NewStepper() {
  return (
    <Stepper active={0} mt="xl" size="sm">
      <StepperStep label="Basic Details" />
      <StepperStep label="Location" />
      <StepperStep label="Media" />
      <StepperStep label="Features" />
      <StepperStep label="Review" />
    </Stepper>
  )
}
