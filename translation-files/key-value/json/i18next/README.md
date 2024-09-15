## Overview

## File structure

i18next supports both JSON and JS/TS Object formats.
TS objects seem to be preferred for interpolation checks.

```json
{
  "title": "Welcome!",
  "description": {
    "part1": "This is just a basic example of how to use i18next with typescript",
    "part2": "😉"
  },
  "inter": "interpolated {{val}}",
  "some": "ctx",
  "some_me": "ctx2",
  "some_1234": "ctx3",
  "pl_one": "sing",
  "pl_other": "{{count}} plur"
}
```

```typescript
const ns1 = {
  title: "Welcome!",
  description: {
    part1: "This is just a basic example of how to use i18next with typescript",
    part2: "😉",
  },
  inter: "interpolated {{val}}",
  interUnescaped: "interpolated and unescaped {{- val}}",
  some: "ctx",
  some_me: "ctx2",
  some_1234: "ctx3",
  pl_one: "sing",
  pl_other: "{{count}} plur",
  lastChanged: "Last changed {{- date}}",
} as const;

export default ns1;
```

### Translation Message Format

Unique. A few important facts:

- It uses [Intl API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- Plurals depend on the key suffix

```json
{
  "key_one": "item",
  "key_other": "items",
  "keyWithCount_one": "{{count}} item",
  "keyWithCount_other": "{{count}} items"
}
```

> [!WARNING]  
> This seem like a strange design decision, what if there are more than one plural variables in a string? They seem to fix this by allowing nesting of translations.

#### Nesting

```json
{
  "girlsAndBoys": "They have $t(girls, {\"count\": {{girls}} }) and $t(boys, {\"count\": {{boys}} })",
  "boys": "{{count}} boy",
  "boys_other": "{{count}} boys",
  "girls": "{{count}} girl",
  "girls_other": "{{count}} girls"
}
```

sample

```
i18next.t('girlsAndBoys', {girls: 3, boys: 2});
// -> "They have 3 girls and 2 boys"
```
