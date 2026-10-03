/**
 * ==========================================================================
 * Sigma Web Development Course - Video 128
 * Topic: Layouts, Templates & Nested Routes
 * File: page.js
 * 
 * Description:
 *   Structuring shared UI layouts, navigation headers, and metadata across nested routes in Next.js.
 * ==========================================================================
 */
export default function Page({ params }) {
    // throw new Error("error hai")
    // fetch your blog post by its slug
    let languages = ["python", "javascript", "java", "cpp", "cs"]
    if(languages.includes(params.slug)){
        return <div>My Post: {params.slug}</div>
    }
    else{
        return <div>Post not found</div>
    }
    return <div>My Post: {params.slug}</div>
  }