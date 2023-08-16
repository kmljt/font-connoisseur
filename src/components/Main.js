import Font from './Font';

export default function Main({
  fonts,
  text,
  fontSize,
  fontWeight,
  fontStyle,
  handleDelete,
}) {
  return (
    <>
      {fonts.map((font) => (
        <Font
          text={text}
          fontSize={fontSize}
          fontFamily={font}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
}
