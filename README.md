# React Native Inhibit Warnings

Modified React Native modulus and silences warnings.

## Isn't this a really bad idea?

Yes.

## Why?

When using React Native with it's core / third party frameworks Xcode generated allot of warnings. Most of the warnings
aren't causing any harm and can be ignored for the time being. At the same time, these warnings obscure warnings from the
projects you're managing. Having a project with 100+ warnings, of which 1 or 2 are caused by your own code
is frustrating.

Don't get me wrong, these warnings should be properly fixed! But not in our day-to-day workspace :)

## What does it do?

It scans for `./node_modules/**/*.xcodeproj/project.pbxproj` files and applied the following changes to all build configurations:

- `GCC_WARN_INHIBIT_ALL_WARNINGS` = `YES`
- `RUN_CLANG_STATIC_ANALYZER` = `NO`
- `LastUpgradeCheck` = `9999`

## TODO

- Make flags configurable, especially the value of `LastUpgradeCheck` is ideal to specify explicitly.
- Allow adding / overwriting of any build settings
- Whitelist / Blacklist specific projects
- More? Let me know.

## Installation

```
yarn add --dev react-native-inhibit-warnings
```
or
```
npm install --save-dev react-native-inhibit-warnings
```

Once the package is installed in your project, you just need to configure it by adding a `postinstall` script which will re-run the script whenever you add or remove packages to/from your project:

```json
{
	"name": "your-awesome-app",
	"version": "1.0.0",
	"scripts": {
		"postinstall": "react-native-inhibit-warnings"
	},
}
```

## What Then?
As long as `react-native-inhibit-warnings` has run whenever you add react native modules, you should be good to go.

## It's not working!

A good starting point for troubleshooting is:
- Completely quit Xcode.
- `rm -rf node_modules`
- `yarn` or `npm i`
- Re open Xcode
- Product -> Clean
- Run

If you're still having trouble, post an issue so we can look into it.

## Tested with the following RN versions

Folks using this module have confirmed the library works with the following React Native versions. If your version is not on the list and you have confirmed it works as expected please create a PR (you can even do it on github.com)

- 0.42.0
- 0.43.0
- 0.44.0
- 0.45.1
- 0.56.0

## Running Manually

You can run this package manually with `react-native-inhibit-warnings`.

The best way to give yourself a manual trigger for this is add to your `package.json` scripts section like so:

```json
{
	"name": "your-awesome-app",
	"version": "1.0.0",
	"scripts": {
		"inhibit-warnings": "react-native-inhibit-warnings",
		"postinstall": "react-native-inhibit-warnings"
	}
}
```

You can then `yarn run inhibit-warnings` or `npm run inhibit-warnings` which will run the cleanup scripts on demand.

## Uninstalling

If you decide this isn't working out for you, we'd love to know why and to try to fix it. Please [open an issue](https://github.com/mattijsf/react-native-inhibit-warnings/issues/new).

But if you still want to get rid of this and revert the changes to your project, you can follow these steps:

1. Quitting Xcode.
1. `rm -rf node_modules`
1. `yarn` or `npm i`
1. Re-open Xcode.

You're back to where you started!

## License

Licensed under the MIT License, Copyright © 2017 mattijsf.

See [LICENSE](./LICENSE) for more information.
