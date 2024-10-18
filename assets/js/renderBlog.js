import { blogs } from "./blogs.js";

export default function renderBlogs() {
    const blogContainer = document.getElementById('blog-container'); // Elemen tujuan tempat artikel akan ditambahkan

    // Kosongkan konten sebelumnya jika ingin merender ulang
    blogContainer.innerHTML = ""; 

    blogs.forEach(blog => {
        let html = "";

        html += `
        <article>
            <div class="content">
                <h1>${blog.title}</h1>
                <p>Durasi ${blog.duration}</p>
                <p>${blog.content}</p>
                <div class="icons">
                    <i class="fab fa-google-play" title="Play Store"></i> <!-- Play Store Icon -->
                    <span class="material-icons" title="Android">android</span> <!-- Full body Android Icon -->
                    <i class="fab fa-java" title="Java"></i> <!-- Java Icon -->
                </div>
            </div>
            <div class="img-content">
                <img src="${blog.image}" alt="${blog.title}"> <!-- Menggunakan URL gambar dari objek blog -->
                <div class="action">
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>
        </article>`;

        // Tambahkan HTML yang sudah dibuat ke dalam elemen container
        blogContainer.innerHTML += html;
    });
}
