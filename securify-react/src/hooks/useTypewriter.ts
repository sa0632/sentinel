import { useState, useEffect } from 'react'

// sequence:
// 1. type "protect"      — normal speed
// 2. pause
// 3. type "your"         — normal speed
// 4. pause
// 5. type "daata"        — normal speed (typo)
// 6. pause — like the user "notices"
// 7. delete back to "d"
// 8. retype "data"       — slightly slower, careful
// 9. done — blink cursor stays

type Phase =
  | 'typing-protect'
  | 'pause-after-protect'
  | 'typing-your'
  | 'pause-after-your'
  | 'typing-daata'
  | 'pause-notice-typo'
  | 'deleting-typo'
  | 'retyping-data'
  | 'done'

export function useTypewriter() {
  const [protect, setProtect] = useState('')
  const [your, setYour]       = useState('')
  const [data, setData]       = useState('')
  const [phase, setPhase]     = useState<Phase>('typing-protect')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // blinking cursor
    const blink = setInterval(() => setShowCursor(c => !c), 530)
    return () => clearInterval(blink)
  }, [])

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const TYPE_SPEED   = 80
    const DELETE_SPEED = 55
    const CAREFUL_SPEED = 110

    if (phase === 'typing-protect') {
      const target = 'protect'
      if (protect.length < target.length) {
        timeout = setTimeout(() => setProtect(target.slice(0, protect.length + 1)), TYPE_SPEED)
      } else {
        timeout = setTimeout(() => setPhase('pause-after-protect'), 300)
      }
    }

    else if (phase === 'pause-after-protect') {
      timeout = setTimeout(() => setPhase('typing-your'), 180)
    }

    else if (phase === 'typing-your') {
      const target = 'your'
      if (your.length < target.length) {
        timeout = setTimeout(() => setYour(target.slice(0, your.length + 1)), TYPE_SPEED)
      } else {
        timeout = setTimeout(() => setPhase('pause-after-your'), 300)
      }
    }

    else if (phase === 'pause-after-your') {
      timeout = setTimeout(() => setPhase('typing-daata'), 180)
    }

    else if (phase === 'typing-daata') {
      const target = 'daata' // intentional typo
      if (data.length < target.length) {
        timeout = setTimeout(() => setData(target.slice(0, data.length + 1)), TYPE_SPEED)
      } else {
        // pause longer — "wait did i just..."
        timeout = setTimeout(() => setPhase('pause-notice-typo'), 820)
      }
    }

    else if (phase === 'pause-notice-typo') {
      timeout = setTimeout(() => setPhase('deleting-typo'), 200)
    }

    else if (phase === 'deleting-typo') {
      // delete back to just "d" (length 1)
      if (data.length > 1) {
        timeout = setTimeout(() => setData(prev => prev.slice(0, -1)), DELETE_SPEED)
      } else {
        timeout = setTimeout(() => setPhase('retyping-data'), 200)
      }
    }

    else if (phase === 'retyping-data') {
      const target = 'data'
      if (data.length < target.length) {
        timeout = setTimeout(() => setData(target.slice(0, data.length + 1)), CAREFUL_SPEED)
      } else {
        timeout = setTimeout(() => setPhase('done'), 300)
      }
    }

    return () => clearTimeout(timeout)
  }, [phase, protect, your, data])

  const cursorVisible = phase !== 'done' || showCursor

  return { protect, your, data, cursorVisible, isDone: phase === 'done' }
}
