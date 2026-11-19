# Debouncing

An implementation of the **Debounce** technique using TypeScript and React.

### Concept

Debouncing delays the execution of an operation until a specified period of inactivity has passed. If another event occurs during this period, the timer resets.

### Implementation

- `useDebounce`: A custom React hook that returns the debounced value after the specified delay.
- Uses `setTimeout` to schedule updates and `clearTimeout` to cancel previous timers.
