# MD2HTML

A super simple Markdown to HTML parser. Takes in Markdown files via GET and renders them in a div.

## Using

```html
<script src="md2html.js"></script>
<script>
    md2html.render("YOUR_MD_FILE.md", "target_div_id");
</script>
```

And thats it!

## Building

Simply run `npm run build` to have webpack generate a minified version of the source.

## Credits

- Powered by [https://www.npmjs.com/package/marked](https://www.npmjs.com/package/marked)
