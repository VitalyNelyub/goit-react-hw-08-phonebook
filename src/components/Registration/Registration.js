// export default function Registration() {
//   return (
//     <form>
//           <label>
//         Name
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>

import {
  Button,
  FormControl,
  // FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';

//       <label>
//         E-Mail
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter email"
//           //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>
//       <label>
//         Password
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter password"
//           //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       {/* <Button colorScheme="whatsapp">Whatsapp</Button> */}
//       <button type="submit">Register</button>
//     </form>
//   );
// }

export default function Registration() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const reset = () => {}

  
  return (
    <FormControl width={500}>
      <FormLabel>
        Name
        <Input type="text" variant="filled" id="1" />
      </FormLabel>
      <FormLabel>
        Email address
        <Input type="email" variant="filled" />
      </FormLabel>
      <FormLabel>Password
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="Enter password"
          variant="filled"
          id="2"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
        </InputGroup>
        </FormLabel>
      <WrapItem>
        <Button
          colorScheme="whatsapp"
          type="submit"
          mt={10}
          mr={'auto'}
          ml={'auto'}
          width={150}
          onClick={() => reset}
        >
          Gray
        </Button>
      </WrapItem>
    </FormControl>
  );
}
