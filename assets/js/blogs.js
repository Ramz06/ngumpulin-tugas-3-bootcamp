import renderBlogs from "./renderBlog.js";

export const blogs = JSON.parse(localStorage.getItem('blogs')) || []; // Load blogs from localStorage or initialize empty array

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blogForm'); // Mengambil form berdasarkan ID

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Mencegah submit form default

            const projectName = document.getElementById("projectName").value;
            const description = document.getElementById("description").value;
            const startDate = document.getElementById("startDate").value;
            const endDate = document.getElementById("endDate").value;

            // Mengambil nilai file gambar
            const fileInput = document.getElementById('uploadImage');
            const file = fileInput.files[0];

            if (file) {
                const reader = new FileReader();

                // Fungsi ketika file sudah dibaca oleh FileReader
                reader.onload = function(e) {
                    const imageUrl = e.target.result; // URL gambar yang diunggah

                    // Ambil semua checkbox yang dicentang
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
                        duration: durationInDays + " days",
                        skills: skills,
                        image: imageUrl, // Simpan URL gambar di sini
                        createdAt: new Date(),
                    };

                    // Simpan ke array blogs
                    blogs.unshift(blog);

                    // Simpan array blogs ke localStorage
                    localStorage.setItem('blogs', JSON.stringify(blogs));

                    console.log(blogs);

                    // Panggil renderBlogs untuk memperbarui tampilan
                    renderBlogs();
                };

                // Membaca file sebagai URL data
                reader.readAsDataURL(file);
            } else {
                console.error("No file selected");
            }
        });
    } else {
        console.error("Form not found"); // Debugging jika form tidak ditemukan
    }

    // Render blogs saat halaman dimuat
    renderBlogs();
});
