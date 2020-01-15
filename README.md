# CBIT platform

Cbit-platform is a website to display GHG measurement charts and contents, the data is obtained from the Kenya Government.

## Local development

This add was build using the [create-react-app](https://github.com/facebook/create-react-app)

```sh
yarn install
yarn start
```

## Production deployment

All commit to Master will be deploy automatically by CirclerCI, but also a manual deployment can be done by running:

```sh
yarn run deploy
```

## Update the information

https://github.com/developmentseed/cbit-platform/blob/master/cbit-data/README.md

### Edit contents for the dashboard

All the content in the folder [content](https://github.com/developmentseed/cbit-platform/tree/master/cbit-data/content) are editable instruction here: https://github.com/developmentseed/cbit-platform/wiki/Editing-content-for-KENYA-GHG-EMISSIONS-DASHBOARD