import Font from './Font';

export default function Main({
  fontsWithCat,
  text,
  fontSize,
  fontWeight,
  fontStyle,
  handleDelete,
  clrs,
  isDark,
}) {
  return (
    <main className="fonts-container" style={{ paddingBottom: 70 }}>
      {fontsWithCat.map(([font, category]) => (
        <Font
          text={text}
          fontSize={fontSize}
          fontFamily={font}
          fontCategory={category}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          handleDelete={handleDelete}
          clrs={clrs}
          isDark={isDark}
        />
      ))}
    </main>
  );
}
