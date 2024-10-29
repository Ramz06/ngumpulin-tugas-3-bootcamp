import { blogs } from "./blogs.js";

console.log(blogs);

export default function renderBlogs() {
    const blogContainer = document.getElementById('blog-container'); // Elemen tujuan tempat artikel akan ditambahkan

    // Kosongkan konten sebelumnya jika ingin merender ulang
    blogContainer.innerHTML = "";

    blogs.forEach((blog, index) => {
        let html = "";

        html += `
        <article>
            <div class="content">
                <h1>${blog.title}</h1>
                <p>Durasi ${blog.duration}</p>
                <p>${blog.content}</p>
                <div class="icons">
                </div>
            </div>
            <div class="img-content">
                <img src="${blog.image}" alt="${blog.title}"> <!-- Menggunakan URL gambar dari objek blog -->
                <div class="action">
                    <button class="delete-btn" data-index="${index}">delete</button>
                    <button class="edit-btn" data-index="${index}">edit</button>
                </div>
            </div>
        </article>`;

        // Tambahkan HTML yang sudah dibuat ke dalam elemen container
        blogContainer.innerHTML += html;
        setTimeout(() => {
            renderIcons(blog);
        }, 500)
        
    });

    // Tambahkan event listener untuk tombol delete
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index'); // Ambil index blog yang akan dihapus
            blogs.splice(index, 1); // Hapus blog dari array
            localStorage.setItem('blogs', JSON.stringify(blogs)); // Perbarui localStorage
            renderBlogs(); // Render ulang daftar blog
        });
    });
}

function renderIcons(blog) {
    let html = ``;
    let iconContainer = document.querySelector(".icons");
    blog.skills.forEach(skill => {
        html += `
            <i class="${skill.class}"></i>
        ` 

        console.log(html)

    })
    iconContainer.innerHTML = html;
}

renderBlogs();
