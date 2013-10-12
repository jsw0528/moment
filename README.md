# Support both Browser and SeaJS

## Usage

### for Browser:

```html
<script src="path/to/gallery/moment/2.3.1/moment.js"></script>
<script src="path/to/gallery/moment/2.3.1/i18n/zh_cn.js"></script>
<script>
console.log(
  moment().format('LLLL')
)
</script>
```

### for SeaJS:

#### step 1

```js
seajs.config({
  'vars': {
    'locale': 'zh_cn' // or `en`
  }
})
```

#### step 2

```js
define(function(require, exports, module) {
  var moment = require('gallery/moment/2.3.1/moment')
  seajs.log(
    moment().format('LLLL')
  )
})
```

or

```js
seajs.use('gallery/moment/2.3.1/moment', function(moment) {
  seajs.log(
    moment().format('LLLL')
  )
})
```

## Documentation

http://momentjs.com/docs/
