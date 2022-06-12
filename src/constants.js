const BLOG_API =
  process.env.NODE_ENV === 'production'
    ? process.env.BLOG_API_PRODUCTION
    : process.env.BLOG_API_DEVELOPMENT
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']
const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const PARAGRAPH_STYLES = ['h1', 'h2', 'h3', 'h4', 'paragraph', 'multiple']

export { BLOG_API, TEXT_ALIGN_TYPES, HOTKEYS, LIST_TYPES, PARAGRAPH_STYLES }
