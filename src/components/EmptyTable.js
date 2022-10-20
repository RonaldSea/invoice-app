import { Heading, Stack, Text } from "@chakra-ui/react"

const EmptyTable = () => {
  return (
    <Stack direction="column" textAlign="center" m={2}>
      <Heading>There's nothing to show here</Heading>
      <Text>Create an invoice ✍</Text>
    </Stack>
  )
}

export { EmptyTable }