# Notification System Design

## Overview
System processes notifications and returns top 2 per category.

## Approach
- Group notifications by Type
- Sort each group by Timestamp (latest first)
- Pick top 2

## Edge Cases
- Empty data
- Same timestamps
- Large datasets

## Trade-offs
- Simplicity vs scalability
- Memory usage for grouping
