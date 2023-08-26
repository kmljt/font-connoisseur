import { Flex, Slider, Select, TextInput, ActionIcon } from '@mantine/core';
import {
  IconItalic,
  IconTypography,
  IconCirclePlus,
  IconSun,
  IconMoonStars,
  IconCursorText,
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
  isDark,
  toggleColorScheme,
  fontList,
  toTitleCase,
  withCustomFonts,
  setWithCustomFonts,
}) {
  // const MARKS = Array.from({ length: 9 }, (el, i) => (i + 1) * 100).map(
  //   (i) => ({ value: i, label: String(i) })
  // );
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      gap={{ base: 'sm', md: 'lg' }}
      justify="center"
      align="center"
      wrap="wrap"
      sx={{ paddingBottom: 30 }}
    >
      <TextInput
        w={{ base: 350, md: 250, xl: 400 }}
        label="Text"
        placeholder="Enter text to compare fonts"
        variant="filled"
        radius="xl"
        size="sm"
        icon={<IconCursorText size="1rem" />}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          // console.log(e.target.value);
        }}
      />
      <div>
        <label
          className={isDark ? 'mantine-1mo4y8r' : 'mantine-1fzet7j'}
          for="font-size"
        >
          Font Size
        </label>
        <Slider
          id="font-size"
          w={{ base: 350, md: 100, lg: 200 }}
          py={11}
          defaultValue={150}
          min={1}
          max={300}
          step={1}
          size="sm"
          radius="xl"
          color="dark"
          // marks={[
          //   { value: 40, label: '40' },
          //   { value: 100, label: '100' },
          //   { value: 160, label: '160' },
          // ]}
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
        <Select
          w={{ base: 350, md: 250 }}
          label="Font Family"
          placeholder={`${fontList.length} Google fonts`}
          variant="filled"
          radius="xl"
          size="sm"
          searchable
          allowDeselect
          nothingFound="No options"
          maxDropdownHeight={280}
          data={withCustomFonts}
          icon={<IconTypography size="1rem" />}
          transitionProps={{
            transition: 'skew-up',
            duration: 80,
            timingFunction: 'ease',
          }}
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
          onChange={(e) => setFontFamily(e)}
          // onDropdownOpen={() =>
          //   setTimeout(() => {
          //     debugger;
          //   }, 5000)
          // }
          creatable
          getCreateLabel={(query) => `+ Create ${toTitleCase(query)}`}
          onCreate={(query) => {
            const item = {
              value: toTitleCase(query),
              label: toTitleCase(query),
              group: 'Custom',
            };
            setWithCustomFonts((current) => [...current, item]);
            return item;
          }}
        />
      </form>

      <div>
        <label
          className={isDark ? 'mantine-1mo4y8r' : 'mantine-1fzet7j'}
          for="font-weight"
        >
          Font Weight
        </label>
        <Slider
          id="font-weight"
          w={{ base: 350, md: 100, lg: 200 }}
          color="dark"
          py={11}
          defaultValue={400}
          min={100}
          max={900}
          step={100}
          size="sm"
          radius="xl"
          // marks={MARKS}
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
        transitionProps={{
          transition: 'skew-up',
          duration: 80,
          timingFunction: 'ease',
        }}
        value={fontStyle}
        onChange={(e) => setFontStyle(e)}
      />
      <ActionIcon
        color="orange"
        size="lg"
        radius="xl"
        variant="subtle"
        mt={{ base: 0, md: 30 }}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {isDark ? <IconSun size="1.7rem" /> : <IconMoonStars size="1.7rem" />}
      </ActionIcon>
    </Flex>
  );
}
