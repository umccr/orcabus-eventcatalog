---
name: bssh.runs
version: 0.0.1
summary: |
  Event represents a state change for a sequence run as emitted by BSSH.
producers:
    - BSSH
consumers:
    - sequencerunmanager
owners:
    - Victor
---

### Details

This event is emitted by BSSH on sequence run state changes.

<NodeGraph title="Consumer / Producer Diagram" />
