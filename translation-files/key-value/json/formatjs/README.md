## Overview

FormatJS is a set of JS libraries.

Mainly used in React, but it can be used in other contexts (VUE, Node are mentioned).

It works by extracting messages from the source code and storing them in a JSON file, and they recommend using automatically generated IDs for each message.

- "Extracted format" (`formatjs extract`) files have a different format than the "Translation format"

### File structure (extracted file)

By default, running the `formatjs extract` command will create a single file in a similar format to below:

```json
{
  "[id]": {
    "string": "[message]",
    "comment": "[description]"
  }
}
```

But it also supports custom structures for the services below:

| Service                     | --format  |
| --------------------------- | --------- |
| BabelEdit                   | simple    |
| Crowdin Chrome JSON         | crowdin   |
| Lingohub                    | simple    |
| Localize's Simple JSON      | simple    |
| locize                      | simple    |
| Lokalise Structured JSON    | lokalise  |
| Phrase Strings              | simple    |
| POEditor Key-Value JSON     | simple    |
| SimpleLocalize JSON         | simple    |
| Smartling ICU JSON          | smartling |
| Transifex's Structured JSON | transifex |

### Translation Message Format

[ICU](https://unicode-org.github.io/icu/userguide/format_parse/messages/)

### Source

- [Message Declaration](https://formatjs.io/docs/getting-started/message-declaration)
- [Message Extraction](https://formatjs.io/docs/getting-started/message-extraction)
- [Application Workflow](https://formatjs.io/docs/getting-started/application-workflow)
