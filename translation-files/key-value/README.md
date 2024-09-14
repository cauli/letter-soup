# Key-Value translation files

Key-value translation is a common approach for managing text translations in software projects. It uses simple file formats to store translated strings as key-value pairs.

## Common Formats

1. JSON (JavaScript Object Notation)

   ```json
   {
     "main.welcome.title": "Welcome to Letter Soup"
   }
   ```

2. YAML (YAML Ain't Markup Language)

   ```yaml
   main:
     welcome:
       title: Welcome to Letter Soup
   ```

3. Properties
   ```properties
   main.welcome.title=Welcome to Letter Soup
   ```

## Usage

- Files are typically named with language codes (e.g., `en.json`, `es.yaml`)
- Keys are often structured hierarchically (e.g., `main.welcome.title`)
- Values contain the translated text

Key-value formats are widely used due to their simplicity and ease of integration with various programming languages and frameworks.
