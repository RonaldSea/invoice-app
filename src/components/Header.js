import { Heading, Stack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const Header = () => {
  return (
    <Stack direction="row" justify="space-between" w="full">
      <Heading>Create an Invoice</Heading>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Stack>
  )
}

export { Header };