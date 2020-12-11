import { useState } from 'react'

export interface Counter {
  count: number
  increment: () => void
  decrement: () => void
  double: () => void
  triple: () => void
  reset: () => void
}

export const useCounter = (initialCount: number): Counter => {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    setCount((count: number) => count + 1)
  }

  const decrement = () => {
    setCount((count: number) => count - 1)
  }

  const double = () => {
    setCount((count: number) => count * 2)
  }

  const triple = () => {
    setCount((count: number) => count * 3)
  }

  const reset = () => {
    setCount(0)
  }

  return { count, increment, decrement, double, triple, reset }
}
