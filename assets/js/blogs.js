export const blogs = JSON.parse(localStorage.getItem('blogs')) || []; // Load blogs from localStorage or initialize empty array

export function addBlog(blog) {
    blogs.unshift(blog);
    // Simpan array blogs ke localStorage
    localStorage.setItem('blogs', JSON.stringify(blogs));
    console.log(blogs);

}