---
name: task-workflow
description: Use when adding, organizing, or managing tasks with the taskr CLI
---

# Task Workflow

## Before Adding Tasks

Run `taskr list` to check what already exists. Don't add duplicates.

## Adding Tasks

- Break the goal into 3-5 concrete, actionable tasks
- Set priority based on dependency order and importance:
  - `high` - must be done first or is critical
  - `medium` - important but not blocking
  - `low` - nice to have
- Use `taskr add "title" --priority <level>` for each task

## After Adding Tasks

Dispatch the `task-reporter` agent to generate a summary of all tasks.
