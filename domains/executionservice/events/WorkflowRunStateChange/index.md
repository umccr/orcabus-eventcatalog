---
name: WorkflowRunStateChange
version: 0.0.1
summary: |
  Event represents a change in the state of a workflow execution.
producers:
    - bsshicav2fastqcopymanager
    - cttsov2manager
    - bclconvertmanager
consumers:
    - workflowmanager
owners:
    - Florian
    - Victor
---

<Admonition>When services fire this event they can add their own payload data depending on the state of the workflow they manage. We use dedicated data schemas to ensure this data payload follows its intended structure. This allows consumers to generate code bindings against it instead of guessing its content.</Admonition>

### Details

This event is triggered when the the workflow execution service registers a change in the state of a workflow execution.

<NodeGraph title="Consumer / Producer Diagram" />

<Schema />