---
name: Analysis Status Change
version: 0.0.1
summary: |
  Event represents a state change in ICAv2 analysis runs.
producers:
    - ICAv2
consumers:
    - bclconvertmanager
    - cttsov2manager
owners:
    - Ray
    - Alexis
---

<Admonition>Note: we currently only subscribe to events with ICA code: `ICA_EXEC_028`.</Admonition>


### Details

Usually consumed by the execution services.

This event is emitted by ICAv2 on analysis run state changes.
For details see: https://help.ica.illumina.com/project/p-notifications

<NodeGraph title="Consumer / Producer Diagram" />
