import { addBlog } from "./blogs.js";
import renderBlogs from "./renderBlog.js";

// Event listener untuk form submit
const form = document.getElementById('blogForm');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Mencegah submit form default

    // Mengambil nilai dari form
    const projectName = document.getElementById("projectName").value;
    const description = document.getElementById("description").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    // Mengambil nilai file gambar
    const fileInput = document.getElementById('uploadImage');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imageUrl = e.target.result; // URL gambar yang diunggah

            // Mengambil checkbox yang dicentang
            const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(checkbox => checkbox.value);

            // Hitung durasi dalam hari
            const start = new Date(startDate);
            const end = new Date(endDate);
            const durationInDays = (end - start) / (1000 * 60 * 60 * 24); // Durasi dalam hari

            // Membuat objek blog
            const blog = {
                title: projectName,
                content: description,
                startDate: startDate,
                endDate: endDate,
                duration: `${durationInDays} days`,
                skills: skills,
                image: imageUrl, // Simpan URL gambar di sini sebagai Data URL
                createdAt: new Date(),
            };

            // Tambahkan blog ke array dan localStorage
            addBlog(blog);
            renderBlogs();

            // Redirect ke halaman blogs.html setelah menambahkan blog
            window.location.href = "blogs.html";
        };

        // Membaca file sebagai URL data
        reader.readAsDataURL(file);
    } else {
        console.error("No file selected");
    }
});
