---
name: SequenceRunStateChange
version: 0.0.1
summary: |
  Event represents a state change for a sequence run.
producers:
    - sequencerunmanager
consumers:
    - BSSH
owners:
    - Victor
---

<Admonition>When firing this event make sure you set the `correlation-id` in the headers. Our schemas have standard metadata make sure you read and follow it.</Admonition>

### Details

This event is triggered when the the workflow manager registers a change in the state of a WorkflowRun. Once this event is triggered the state of the WorkflowRun has been updated.

<NodeGraph title="Consumer / Producer Diagram" />

<Schema />