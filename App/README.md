# App

Application React Native servant de terrain de construction pour les pages Perifit.
Elle consomme directement le design system local situé dans
`../designsystem/packages/library` : les changements du design system sont donc
disponibles dans l'application sans publication de package.

## Démarrage

Prérequis : Node.js 20+, Xcode et CocoaPods.

```sh
corepack yarn install
corepack yarn pods
corepack yarn start
```

Dans un second terminal :

```sh
corepack yarn ios
```

Pour Android :

```sh
corepack yarn android
```

## Développement

Le premier écran se trouve dans `App.tsx`. Il utilise déjà le `ThemeProvider`,
les couleurs, la typographie, les espacements et le composant `Button` du design
system.

Vérifications disponibles :

```sh
corepack yarn lint
corepack yarn tsc --noEmit
corepack yarn test --runInBand
```
