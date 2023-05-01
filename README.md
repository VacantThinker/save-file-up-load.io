
## readme
 - template: [https://github.com/VacantThinker/firefox-addons-only-template](https://github.com/VacantThinker/firefox-addons-only-template)
 - firefox-addons-only-template
   - background.js module
   - webpack
   - web-ext lint
   - zip file


## first
```shell
npm install
```

## second
```shell
node tmp.js
```

## addons
```text
//   'icons', // icon
//   'js', // content-script
//   'background.html', //
//   'background.js', //
//   '_common.js', // background common function
//   'LICENSE',
//   'manifest.json',
//   'snapcode.js' // eg: saveTextToFile()
```

```shell
cd dist && 
web-ext lint
```

```shell
git add . && 
git commit -m '0.0.1.2' && 
git push
```