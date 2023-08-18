import { Container, Flex, ActionIcon, CloseButton } from '@mantine/core';

export default function Font({
  text,
  fontSize,
  fontFamily,
  fontCategory,
  fontWeight,
  fontStyle,
  handleDelete,
  clrs,
  isDark,
}) {
  return (
    <Container
      size="xxl"
      sx={{
        borderRadius: fontSize > 70 ? '80px' : '40px',
        padding: fontSize > 70 ? '50px 80px 60px 80px' : '25px 40px 30px 40px',
        margin: fontSize > 70 ? '30px 40px' : '10px 0px',
        backgroundColor: isDark ? clrs.dark[0] : clrs.light[0],
      }}
    >
      <Flex direction="row" align="center" justify="space-between">
        <p
          style={{
            fontSize: fontSize > 70 ? 24 : 14,
            // fontSize: fontSize * 0.5,
            fontWeight: fontSize > 70 ? 200 : 400,
            margin: 0,
            color: isDark ? clrs.dark[2] : clrs.light[2],
          }}
        >
          <span className="font-name" style={{ fontFamily: 'Poppins' }}>
            {fontFamily}
          </span>
          <span style={{ margin: 8 }}>•</span>
          <span
            style={{
              fontWeight: 400,
              position: 'relative',
              top: fontSize > 70 ? -4 : -2,
              fontSize: fontSize > 70 ? 'small' : 'xx-small',
              textTransform: 'uppercase',
              letterSpacing: 4,
              color: isDark ? clrs.dark[3] : clrs.light[3],
            }}
          >
            {fontCategory}
          </span>
        </p>
        <ActionIcon
          color="gray"
          size={fontSize > 70 ? 'lg' : 'md'}
          radius="xl"
          variant="subtle"
          onClick={() => handleDelete(fontFamily)}
        >
          <CloseButton
            title="Remove This Font"
            size={fontSize > 70 ? 'md' : 'sm'}
            iconSize={25}
          />
        </ActionIcon>
      </Flex>
      <h1
        style={{
          fontSize: fontSize,
          fontFamily: `"${fontFamily}"`,
          fontWeight: fontWeight,
          fontStyle: fontStyle,
          margin: 0,
          lineHeight: 1.1,
          color: isDark ? clrs.dark[2] : clrs.light[2],
        }}
      >
        {text}
      </h1>
    </Container>
  );
}
