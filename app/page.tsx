
import { client } from "@/sanity/lib/client";
import BlogCard from "@/app/components/BlogCard";

// Define the shape of your post data
interface Post {
  title: string;
  summary: string;
  image: string; // Adjust if you're storing images differently in Sanity
  slug: string;
}

export default async function Home() {
  const query = `*[_type == 'post'] | order(_createdAt asc) {
    title,
    summary,
    image,
    "slug": slug.current
  }`;

  // Fetch posts as an array of Post
  const posts: Post[] = await client.fetch(query);

  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="text-2xl font-bold uppercase my-12 text-center text-black dark:text-white sm:text-3xl lg:text-5xl">
        Health and Beauty Blogs
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </section>
    </main>
  );
}



// // Remove "use client" if not needed for client-side interactivity
// import BlogCard from "@/app/components/BlogCard";
// import {client} from '@/sanity/lib/client';

// // Removed incorrect import

// // Ensure TypeScript interface for Post is defined
// // interface Post {
// //   title: string;
// //   summary: string;
// //   image: string; // Adjust type based on your image handling
// //   slug: string;
// // }

// export default async function Home() {
//   const query = `*[_type == 'post'] | order(_createdAt asc) {
//     title,
//     summary,
//     image,
//     "slug": slug.current
//   }`;

//   // Fetch posts as an array of Post
//   const posts: Post[] = await client.fetch(query);

//   return (
//     <main className="flex min-h-screen flex-col ">
//       <h1 className="text-2xl font-bold uppercase my-12 text-center text-black dark:text-white sm:text-3xl lg:text-5xl ">
//         Health and Beauty Blogs
//       </h1>
//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//         {posts.map((post: Post) => (
//           <BlogCard post={post} key={post.slug} />
//         ))}
//       </section>
//     </main>
//   );
// }


// //repo ka name change rkha tha is lye masla? nahi nahi yar... bs yeh btoa konsa wal adeploy kar rhi hoo abi ..ye hi blogs.. dursra jo khula hai woh nah ?han ek chatgpt se jo update kia code..