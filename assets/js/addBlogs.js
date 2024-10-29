import { addBlog} from "./blogs.js";



    const form = document.getElementById('blogForm'); // Mengambil form berdasarkan ID

    
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
                    const skillContainer = []
                    const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(checkbox => checkbox.value);
                    skills.forEach(skill => {
                        if (skill == 'nodejs') {
                            skillContainer.unshift({
                                title : "Node.js",
                                href : "https://nodejs.org",
                                class: "fab fa-node fa-3x icon icon-node"
                            })
                        } else if (skill == 'react') {
                            skillContainer.unshift({
                                title : "React",
                                href : "https://reactjs.org",
                                class: "fab fa-react fa-3x icon icon-react"
                            })
                        } else if (skill == 'html') {
                            skillContainer.unshift({
                                title : "HTML",
                                href : "https://developer.mozilla.org/en-US/docs/Web/CSS",
                                class: "fab fa-html5 fa-3x icon icon-html"
                            })
                        } else {
                            skillContainer.unshift({
                                title : "CSS",
                                href : "https://developer.mozilla.org/en-US/docs/Web/HTML",
                                class: "fab fa-css3-alt fa-3x icon icon-css"
                            })
                        }
                    });



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
                        skills: skillContainer,
                        image: imageUrl, // Simpan URL gambar di sini
                        createdAt: new Date(),
                    };

                    // Simpan ke array skillContainer
                    addBlog(blog);
                    // Panggil renderBlogs untuk memperbarui tampilan

                    // Redirect ke blogs.html setelah blog berhasil ditambahkan
                    window.location.href = "blogs.html";
                };

                // Membaca file sebagai URL data
                reader.readAsDataURL(file);
            } else {
                console.error("No file selected");
            }
        });
