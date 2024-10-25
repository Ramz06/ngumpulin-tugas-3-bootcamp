// Inisialisasi blogs array, ambil dari localStorage jika sudah ada
export let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

// Fungsi untuk menambahkan blog ke array blogs dan localStorage
export function addBlog(blog) {
    blogs.push(blog); // Tambahkan blog baru ke array blogs
    localStorage.setItem('blogs', JSON.stringify(blogs)); // Simpan array blogs ke localStorage
}
