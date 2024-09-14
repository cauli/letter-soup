# gettext Translation Format

Gettext is a mature internationalization (i18n) and localization (l10n) system, originally developed by GNU. It's widely used in open-source projects and is particularly popular in the Linux ecosystem.

## Gettext Formats

1. PO (Portable Object)

   - Human-readable text files
   - Contains both original and translated strings

   ```po
   msgid "Welcome to Letter Soup"
   msgstr "Bienvenido a Sopa de Letras"
   ```

2. POT (Portable Object Template)

   - Template files for creating new PO files
   - Contains only original strings, no translations

   ```po
   msgid "Welcome to Letter Soup"
   msgstr ""
   ```

3. MO (Machine Object)
   - Binary format compiled from PO files
   - Used at runtime for faster processing

## Usage

- PO files are typically named with language codes (e.g., `es.po`, `fr.po`)
- Translators work with PO files
- Developers compile PO to MO for production use

## Historical Context

- Released initiallly in 1990
- Released by the GNU Project in 1995
- Widely adopted in GNU/Linux systems and many open-source projects

## Limitations

- No support for gender-specific translations
