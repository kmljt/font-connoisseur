import { MantineProvider, Container, ColorSchemeProvider } from '@mantine/core';
import { ReactComponent as Logo } from '../logo.svg';
import '../index.css';
import { useEffect, useState } from 'react';
import WebFont from 'webfontloader';

import Main from './Main';
import HeaderForm from './HeaderForm';

export default function App() {
  const [fonts, setFonts] = useState([]);

  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(150);
  const [fontFamily, setFontFamily] = useState('');
  const [fontWeight, setFontWeight] = useState(400);
  const [fontStyle, setFontStyle] = useState('Normal');

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins', 'JetBrains Mono', ...fonts].map(
          (font) =>
            `${font}:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic`
        ),
      },
    });
  }, [fonts]);

  function toTitleCase(str) {
    return str
      .split(' ')
      .map((i) => i[0].toUpperCase() + i.slice(1))
      .join(' ');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!fontFamily) return;
    setFonts((cur) =>
      cur.includes(toTitleCase(fontFamily))
        ? cur
        : [...cur, toTitleCase(fontFamily)]
    );
    setFontFamily('');
  }

  function handleDelete(font) {
    setFonts((fonts) => fonts.filter((f) => f !== font));
  }

  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const isDark = colorScheme === 'dark';

  const clrs = {
    light: ['hsl(17, 82%, 94%)', 'hsl(17, 68%, 82%)', 'hsl(17, 40%, 21%)'],
    // dark: ['hsl(265, 50%, 15%)', 'hsl(265, 40%, 30%)', 'hsl(265, 90%, 90%)'],
    dark: ['hsl(265, 0%, 15%)', 'hsl(265, 0%, 50%)', 'hsl(17, 90%, 90%)'],
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: colorScheme,
          components: {
            TextInput: {
              styles: () => ({
                input: {
                  backgroundColor: isDark ? clrs.dark[1] : clrs.light[1],
                  color: isDark ? clrs.dark[2] : clrs.light[2],
                },
                icon: { color: isDark ? clrs.dark[0] : clrs.light[0] },
              }),
            },
            Select: {
              styles: () => ({
                input: {
                  backgroundColor: isDark ? clrs.dark[1] : clrs.light[1],
                  color: isDark ? clrs.dark[2] : clrs.light[2],
                },
                icon: { color: isDark ? clrs.dark[0] : clrs.light[0] },
              }),
            },
          },
        }}
      >
        <Container
          size="xxl"
          className={isDark ? 'custom-dark' : 'custom-light'}
        >
          <div style={{ textAlign: 'center' }}>
            <Logo
              style={{
                margin: 20,
                height: 40,
              }}
            />
          </div>

          <HeaderForm
            text={text}
            setText={setText}
            fontSize={fontSize}
            setFontSize={setFontSize}
            fontFamily={fontFamily}
            setFontFamily={setFontFamily}
            fontWeight={fontWeight}
            setFontWeight={setFontWeight}
            fontStyle={fontStyle}
            setFontStyle={setFontStyle}
            handleSubmit={handleSubmit}
            isDark={isDark}
            toggleColorScheme={toggleColorScheme}
          />
          <Main
            fonts={fonts}
            text={text}
            fontSize={fontSize}
            fontWeight={fontWeight}
            fontStyle={fontStyle}
            handleDelete={handleDelete}
            clrs={clrs}
            isDark={isDark}
          />
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
