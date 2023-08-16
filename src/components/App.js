import { MantineProvider, Container } from '@mantine/core';
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

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        components: {
          TextInput: {
            styles: () => ({
              input: {
                backgroundColor: 'hsl(17, 68%, 82%)',
                color: 'hsl(17, 40%, 21%)',
              },
              icon: { color: 'hsl(17, 82%, 94%)' },
            }),
          },
          Select: {
            styles: () => ({
              input: {
                backgroundColor: 'hsl(17, 68%, 82%)',
                color: 'hsl(17, 40%, 21%)',
              },
              icon: { color: 'hsl(17, 82%, 94%)' },
            }),
          },
        },
      }}
    >
      <Container size="xxl">
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
        />
        <Main
          fonts={fonts}
          text={text}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          handleDelete={handleDelete}
        />
      </Container>
    </MantineProvider>
  );
}
