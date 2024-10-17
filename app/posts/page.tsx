import { allPosts, Post } from 'contentlayer/generated'
import Link from 'next/link'
import dayjs from 'dayjs'

const PostCard = (post: Post) => {
  return (
    <div className='mb-8'>
      <div className='mb-1 text-xl'>
        <Link className='text-blue-700 hover:text-blue-900 dark:text-blue-400' href={post.url}>
          { post.title }
        </Link>
      </div>
      <time dateTime={post.date} className='mb-2 block text-xs text-gray-600'>
        { dayjs(post.date).format('DD/MM/YYYY') }
      </time>
    </div>
  )
}

export default function Page() {
  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">My Blog List</h1>
      {
        allPosts.map((post, index) => <PostCard key={index} {...post} />)
      }
    </div>
  )
}
