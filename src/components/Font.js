import { Container, Flex, ActionIcon, CloseButton } from '@mantine/core';

export default function Font({
  text,
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  handleDelete,
}) {
  return (
    <Container
      size="xxl"
      sx={{
        borderRadius: '80px',
        padding: '50px 80px 60px 80px',
        margin: '30px 40px',
        backgroundColor: 'hsl(17, 82%, 94%)',
      }}
    >
      <Flex direction="row" align="center" justify="space-between">
        <p
          style={{
            fontSize: fontSize > 70 ? 28 : 14,
            // fontSize: fontSize * 0.5,
            fontWeight: fontSize > 70 ? 100 : 400,
            margin: 0,
            color: 'hsl(17, 40%, 21%)',
          }}
        >
          {fontFamily}
        </p>
        <ActionIcon
          color="gray"
          size="md"
          radius="xl"
          variant="subtle"
          onClick={() => handleDelete(fontFamily)}
        >
          <CloseButton title="Remove This Font" size="lg" iconSize={25} />
        </ActionIcon>
      </Flex>
      <h1
        style={{
          fontSize: fontSize,
          fontFamily: fontFamily,
          fontWeight: fontWeight,
          fontStyle: fontStyle,
          margin: 0,
          lineHeight: 1.1,
          color: 'hsl(17, 40%, 21%)',
        }}
      >
        {text}
      </h1>
    </Container>
  );
}
