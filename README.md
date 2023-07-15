# jQuery-loader
Awesome 30+ SVG Page Loader/Spinner

## Check the Demos
<a href="https://dev-arindam-roy.github.io/jquery-loader/">All Loaders</a>

## Simple steps - 

### Add js & css asset files
```html
<link href="style.min.css" rel="stylesheet">
<script src="script.min.js"></script>
```

### Use this - for show
```js
$('body').arindamLoader();
or
$('body').arindamLoader('show');
or
$('body').arindamLoader('show', '[LOADER_NUMBER]');
// loader number get from the all loaders link

for example:
like: $('body').arindamLoader('show', '19');

like: $('body').arindamLoader('show', '25');

like: $('body').arindamLoader('show', '15');

//for more customization
$('body').arindamLoader('show', '15', {
  background: '#fff',
  opacity: '0.8',
  zindex: '9999'
});
```

### Use this - for hide
```js
$('body').arindamLoader('hide');
```

## Check the Demos
<a href="https://dev-arindam-roy.github.io/jquery-loader/">All Loaders</a>
