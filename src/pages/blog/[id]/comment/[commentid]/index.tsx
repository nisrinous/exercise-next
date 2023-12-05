import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <p>Post Comment: {router.query.commentid}</p>;
}
