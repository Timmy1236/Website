// Api Github Json to Typescript
export interface Root {
  sha: string
  node_id: string
  commit: Commit
  url: string
  html_url: string
  comments_url: string
  committer: Committer
}

export interface Commit {
  committer: Committer
  message: string
  url: string
  comment_count: number
}

export interface Committer {
  name: string
  email: string
  date: string
}