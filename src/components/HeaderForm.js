import { Flex, Slider, Select, TextInput, ActionIcon } from '@mantine/core';
import {
  IconItalic,
  IconTypography,
  IconCirclePlus,
} from '@tabler/icons-react';

export default function HeaderForm({
  text,
  setText,
  fontSize,
  setFontSize,
  fontFamily,
  setFontFamily,
  fontWeight,
  setFontWeight,
  fontStyle,
  setFontStyle,
  handleSubmit,
}) {
  const MARKS = Array.from({ length: 9 }, (el, i) => (i + 1) * 100).map(
    (i) => ({ value: i, label: String(i) })
  );
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      gap={{ base: 'sm', md: 'lg' }}
      justify={{ base: 'center', md: 'center' }}
      align="center"
      wrap="nowrap"
      sx={{ paddingBottom: 30 }}
    >
      <TextInput
        w={{ base: 350, md: 250, xl: 400 }}
        label="Text"
        placeholder="Enter text to compare fonts"
        variant="filled"
        radius="xl"
        size="sm"
        icon={<IconTypography size="1rem" />}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          // console.log(e.target.value);
        }}
      />
      <div>
        <label className="mantine-1fzet7j" for="font-size">
          Font Size
        </label>
        <Slider
          id="font-size"
          w={{ base: 350, md: 100, lg: 200 }}
          py={7}
          defaultValue={150}
          min={1}
          max={200}
          step={1}
          size="lg"
          radius="xl"
          color="dark"
          marks={[
            { value: 40, label: '40' },
            { value: 100, label: '100' },
            { value: 160, label: '160' },
          ]}
          labelTransition="skew-down"
          labelTransitionDuration={150}
          labelTransitionTimingFunction="ease"
          value={fontSize}
          onChange={(e) => {
            setFontSize(e);
            // console.log(e);
          }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <TextInput
          w={{ base: 350, md: 250 }}
          label="Font Family"
          placeholder="Enter your favorite font!"
          variant="filled"
          radius="xl"
          size="sm"
          icon={<IconTypography size="1rem" />}
          rightSection={
            <button
              type="submit"
              style={{ border: 'none', backgroundColor: 'rgba(0,0,0,0)' }}
            >
              <ActionIcon color="orange" size="md" radius="xl" variant="subtle">
                <IconCirclePlus size="2.125rem" />
              </ActionIcon>
            </button>
          }
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
        />
      </form>

      <div>
        <label className="mantine-1fzet7j" for="font-weight">
          Font Weight
        </label>
        <Slider
          id="font-weight"
          w={{ base: 350, md: 100, lg: 200 }}
          color="dark"
          py={7}
          defaultValue={400}
          min={100}
          max={900}
          step={100}
          size="lg"
          radius="xl"
          marks={MARKS}
          styles={{ markLabel: { display: 'none' } }}
          labelTransition="skew-down"
          labelTransitionDuration={150}
          labelTransitionTimingFunction="ease"
          value={fontWeight}
          onChange={(e) => setFontWeight(e)}
        />
      </div>
      <Select
        w={{ base: 350, md: 150 }}
        data={['Normal', 'Italic']}
        label="Font Style"
        placeholder="Pick one"
        variant="filled"
        radius="xl"
        size="sm"
        icon={<IconItalic size="1rem" />}
        color="orange"
        transitionProps={{
          transition: 'skew-up',
          duration: 80,
          timingFunction: 'ease',
        }}
        value={fontStyle}
        onChange={(e) => setFontStyle(e)}
      />
    </Flex>
  );
}
