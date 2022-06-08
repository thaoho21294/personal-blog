import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

const Code = React.forwardRef(({ language, children, ...attributes }, ref) => {
  useEffect(() => {
    // TODO: Fix bug
    Prism.highlightAll()
  }, [])

  return (
    <pre>
      <code className={`language-${language}`} ref={ref} {...attributes}>
        {children}
      </code>
    </pre>
  )
})

Code.displayName = 'Code'

export default Code
