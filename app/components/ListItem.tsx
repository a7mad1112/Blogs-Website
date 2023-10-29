import Link from 'next/link';
import getFormattedDate from '@/lib/getFormatedDate';
type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="mt-4 text-2xl dark:text-white-90">
      <Link
        className="underline dark:text-white/90 dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1 dark:text-white/90 dark:hover:text-white">{formattedDate}</p>
    </li>
  );
}
