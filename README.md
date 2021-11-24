[![svc1](https://github.com/err0r500/test-nx/actions/workflows/svc1.yml/badge.svg)](https://github.com/err0r500/test-nx/actions/workflows/svc1.yml)
[![svc2](https://github.com/err0r500/test-nx/actions/workflows/svc2.yml/badge.svg)](https://github.com/err0r500/test-nx/actions/workflows/svc2.yml)

## workflows

### the `_dispatch` workflow
It's used to find out which projects were affected by the commit that triggered the pipeline then emmit a `repository_dispatch` event for each one of them, with the name of the project in the `project` field of the client payload.

### the `svc<x>` workflows
They listen only to `repository_dispatch` events with the `type` value equal to their unique identifier (ie. their name)

They perform the actual CI for their service.

[Workflow templates](https://docs.github.com/en/actions/learn-github-actions/using-workflow-templates) and [Composite steps](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action) can be used to avoid code duplication between workflows.


## Dependency management

### Goal
- keep all shared deps in `<root>/node_modules` and have svc3 specific deps in `./apps/svc3/node_modules`
- be able to use shared deps from svc3

### package.json organization
the [root package.json](./package.json) contains project wide dependencies

the [app specific package.json](./apps/svc3/package.json) contains app specific dependencies

### run an app (svc3) with specific deps
```
npm i
cd ./apps/svc3
npm i
```

then `nx serve svc3` from anywhere in the project should work
