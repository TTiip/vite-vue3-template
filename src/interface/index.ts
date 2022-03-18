interface Common {
  code?: number
  hasMore?: boolean
}

interface SearchHotItemProps {
  first: string
  iconType: number
  second: number
  third?: null
}
interface SearchHotProps extends Common {
  result: {
    hots: SearchHotItemProps[]
  }
}

// interface
export {
  SearchHotProps
}
