/* eslint-disable @typescript-eslint/array-type */
// Code from: https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret/77195470#77195470, slightly modified
import { useEffect, useRef } from 'react'
import lodash from 'lodash'

export const useEffectAsync = (func: () => Promise<any>, dependencies: any[]): void => {
  const tasks = useRef<{ func: typeof func }[]>([])
  const runWaitingTasks = (): void => {
    if (tasks.current.length > 0) {
      tasks.current[0]
        .func()
        .then(() => {
          const tasksCopy = lodash.cloneDeep(tasks.current)
          tasksCopy.splice(0, 1)
          tasks.current = tasksCopy
          runWaitingTasks()
        })
        .catch(() => {
          tasks.current = []
        })
    }
  }
  useEffect(() => {
    tasks.current.push({ func })
    if (tasks.current.length === 1) {
      runWaitingTasks()
    }
  }, dependencies)
}
