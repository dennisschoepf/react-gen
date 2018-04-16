# react-gen

## Prerequisites

Follow the instructions to install the following packages:
- [Flow](https://flow.org/)
- [Storybook](https://github.com/storybooks/storybook)
- [Jest](https://facebook.github.io/jest/)
- [Enzyme](https://github.com/airbnb/enzyme)
- [Enzyme Adapter](https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16)

## Installation & Usage

```
$ npm i -g @dennisschoepf/react-gen
$ react-gen
```
or just use it with
```
$ npx @dennisschoepf/react-gen
```

You then will be asked to provide a name for your component and be able to choose from a number of templates.

## Options

Currently there are no additional options supported.

## Configuration

Currently you have to fork the project to make modifications. In the future you will be able to configure your own templates.

## To-Do
- [X] Return promise from createFile operation
- [X] Parallelize createFile operations with Promise.all([])
- [ ] Implement ability to pass component name and template directly through options
- [ ] Refactor generator and getTemplate function to allow user-defined templates
- [ ] Implement config file for easier configuration of templates
- [ ] Document prerequisite instructions directly in readme
- [ ] Add template for styleguidist .md file
- [ ] Handle error messages in a user friendly way

PR's are welcome.