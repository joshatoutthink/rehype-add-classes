# rehype-add-classes

Adds ability add custom classes to your markdown

## Installation & Usage

TODO

### Usage

In your Rehype config:

```js
var vfile = require("to-vfile");
var unified = require("unified");
var markdown = require("remark-parse");
var remark2rehype = require("remark-rehype");
var html = require("rehype-stringify");
var addClasses = require("./index.js");
unified()
  .use(markdown) // to markdown
  .use(remark2rehype) //to html ast
  .use(addClasses) // adds classes
  .use(html) // to html
  .process(vfile.readSync("example.md"), (err, file) => {
    if (err) throw err;
    console.log(file.contents));
  }); //html output of example.md
```
