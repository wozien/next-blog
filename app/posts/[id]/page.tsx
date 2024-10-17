import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import dayjs from 'dayjs'

type PageProps = {
  params: {
    id: string;
  }
}

// ssg 
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    id: post._raw.flattenedPath
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const post = allPosts.find(post => post._raw.flattenedPath === params.id);
  if (!post) throw new Error(`Post not found for id: ${params.id}`)
  return { title: post.title }
}

export default function Page ({ params }: PageProps) {
  const post = allPosts.find(post => post._raw.flattenedPath === params.id);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className='mx-auto max-w-xl py-8 prose prose-slate'>
      <div className='mb-8 text-center'>
        <h1 className='text-3xl font-bold'>
          { post.title }
        </h1>
        <time dateTime={post.date} className='mb-1 text-xs text-gray-600'>
          编辑于 {  dayjs(post.date).format('YYYY-MM-DD HH:mm') }
        </time>
      </div>
      <MDXContent />
    </article>
  )
}