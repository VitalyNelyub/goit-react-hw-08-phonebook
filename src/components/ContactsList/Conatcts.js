import { Input, Stack } from '@chakra-ui/react';
import React from 'react';

export default function ContactsList() {
//  const [show, setShow] = React.useState(false)
  // const handleClick = () => setShow(!show)

  return (
    <Stack spacing={3}>
      <Input variant="outline" placeholder="Outline" width={400} />
      <Input
        variant="filled"
        placeholder="Filled"
        width={400}
        onChange={e => console.log(e.target.value)}
      />
      <Input variant="flushed" placeholder="Flushed" />
      <Input variant="unstyled" placeholder="Unstyled" />
    </Stack>
  );
}
