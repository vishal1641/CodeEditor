import { Box, Heading, VStack } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, #0f0a19, #1b1e3f)"
      color="gray.300"
      px={{ base: 4, md: 8 }}
      py={{ base: 6, md: 10 }}
    >
      <VStack spacing={8} align="center">
        <Heading
          as="h1"
          size="xl"
          color="teal.400"
          textAlign="center"
          fontWeight="bold"
          textShadow="0px 4px 6px rgba(0, 0, 0, 0.2)"
        >
          VKT Code Editor
        </Heading>
        <Box
          w="full"
          maxW="1200px"
          p={6}
          bg="gray.800"
          borderRadius="md"
          boxShadow="lg"
        >
          <CodeEditor />
        </Box>
      </VStack>
    </Box>
  );
}

export default App;
