const BLOG_API = process.env.BLOG_API
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']
const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']

export { BLOG_API, TEXT_ALIGN_TYPES, HOTKEYS, LIST_TYPES }
