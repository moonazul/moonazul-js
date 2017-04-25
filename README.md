# moonazul-js

## How to use

```javascript
var moonazul = require("moonazul");
var zip = fs.readFileSync('./services/zipValidator.js');

vm.runInThisContext(zip);

moonazul.validateZipValidator(validateZip);
```
