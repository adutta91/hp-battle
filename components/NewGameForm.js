import { NumberInput, TextInput, Button, Group, Box, Modal } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function NewGameForm ({ onSubmit, ...props }) {
  const form = useForm({
    initialValues: {
      name: '',
      numPlayers: 4,
    },
  });

  return (
    <Modal
      {...props}
    >
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <form onSubmit={form.onSubmit(onSubmit)}>
          <TextInput
            required
            label="Name"
            placeholder="Ron and Harry's Excellent Adventure"
            {...form.getInputProps('name')}
          />
          <NumberInput
            required
            label="Number of players"
            placeholder="4"
            {...form.getInputProps('numPlayers')}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </Modal>
  )
}