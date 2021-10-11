# workflows

## the `_dispatch` workflow
It's used to find which projects are affected by the commit that triggered the pipeline then emmit a `repository_dispatch` event for each one, with the name of the project in the `project` field

## the `svc<x>` workflows
They listen only to a `repository_dispatch` event with the `type` value equal to their unique identifier (ie. their name)

They perform the actual CI for their service.

Workflow templates and Composite steps can be used to avoid code duplication between workflows.
