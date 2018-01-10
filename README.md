# Ionic Native plugin wrapper for cordova-plugin-bluetoothle

# ionic-plugin-bluetoothle
Ionic Native plugin wrapper for cordova-plugin-bluetoothle

> [Ionic Native](https://github.com/ionic-team/ionic-native) plugin wrapper for [cordova-plugin-bluetoothle](https://github.com/randdusing/cordova-plugin-bluetoothle)



## Table of Contents

* [Install](#install)
* [Install & usage](#install-&-usage)
* [Development](#development)
* [Versions](#versions)
* [License](#license)


## Install & usage

This repository is used for development, head to [this repository](https://github.com/somq/ionic-plugin-bluetoothle#install) for installation instructions.

## Development
```sh
git clone https://github.com/somq/ionic-plugin-bluetoothle-dev
ionic-plugin-bluetoothle-dev
npm i
```

edit plugin file ``
 ./src/@ionic-native/plugins/bluetooth-le/index.ts
 ``

```sh
npm run build
cp -r dist/@ionic-native/plugin-name ../my-app/node_modules/@ionic-native/
```
Explanation: see ionic native doc: [#Testing your changes]
(https://github.com/ionic-team/ionic-native/blob/master/DEVELOPER.md#testing-your-changes)

* Developer guide can be found on the official [Ionic Native documentation](https://github.com/ionic-team/ionic-native/blob/master/DEVELOPER.md)

## Original doc

You can find the full cordova plugin doc on the original plugin repository: 
[randdusing/cordova-plugin-bluetoothle
](https://github.com/randdusing/cordova-plugin-bluetoothle/blob/master/readme.md)

## Versions

Known versions @ this development stage:

* Ionic version: "4.5.1"
* Ionic Native version: "3.9.2"
* cordova-plugin-bluetoothle: "4.4.3"


## License

MIT
