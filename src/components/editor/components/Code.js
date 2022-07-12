import React from 'react'
import 'prismjs/themes/prism.css'
// import 'prismjs/themes/prism-tomorrow.css'

const Code = React.forwardRef(({ language, children, ...attributes }, ref) => {
  return (
    <pre className={`language-${language}`}>
      <code className={`language-${language}`} ref={ref} {...attributes}>
        {children}
      </code>
    </pre>
  )
})

Code.displayName = 'Code'

export default Code
