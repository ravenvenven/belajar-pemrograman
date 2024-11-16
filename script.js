// Data materi tutorial untuk masing-masing bahasa
const tutorials = {
    Python: {
        title: "Belajar Python",
        content: `
        <p>Python adalah bahasa pemrograman yang sederhana dan populer. Berikut adalah sintaks dasar:</p>
        <pre><code>
# Komentar di Python
print("Halo, Dunia!")

# Variabel
nama = "BelajarKode"
umur = 25
print(nama, umur)
        </code></pre>
        `
    },
    JavaScript: {
        title: "Belajar JavaScript",
        content: `
        <p>JavaScript adalah bahasa yang digunakan untuk membuat halaman web interaktif. Contoh dasar:</p>
        <pre><code>
// Komentar di JavaScript
console.log("Halo, Dunia!");

// Variabel
let nama = "BelajarKode";
let umur = 25;
console.log(nama, umur);
        </code></pre>
        `
    },
    HTML: {
        title: "Belajar HTML",
        content: `
        <p>HTML adalah bahasa markup untuk membuat struktur halaman web. Contoh dasar:</p>
        <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Halo Dunia&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Selamat Datang&lt;/h1&gt;
    &lt;p&gt;Ini adalah paragraf.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        `
    },
    CSS: {
        title: "Belajar CSS",
        content: `
        <p>CSS digunakan untuk mempercantik halaman web. Contoh dasar:</p>
        <pre><code>
/* Gaya untuk elemen H1 */
h1 {
    color: blue;
    text-align: center;
}

/* Gaya untuk paragraf */
p {
    font-size: 16px;
    color: gray;
}
        </code></pre>
        `
    }
};

// Fungsi untuk memuat tutorial berdasarkan bahasa yang dipilih
function loadTutorial(language) {
    const tutorialSection = document.querySelector("#examples #code-container");

    if (tutorials[language]) {
        const { title, content } = tutorials[language];
        tutorialSection.innerHTML = `
            <h3>${title}</h3>
            ${content}
        `;
        tutorialSection.style.animation = "fadeIn 0.5s";
    } else {
        tutorialSection.innerHTML = "<p>Tutorial belum tersedia.</p>";
    }
}

// Fungsi untuk menjalankan kode di editor
function runCode() {
    const codeEditor = document.querySelector("#code-editor");
    const outputFrame = document.querySelector("#output");

    const code = codeEditor.value;
    try {
        const blob = new Blob([code], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        outputFrame.src = url;
    } catch (error) {
        alert("Terjadi kesalahan pada kode Anda. Silakan cek kembali!");
    }
}

// Animasi halaman
document.addEventListener("DOMContentLoaded", () => {
    const tutorialCards = document.querySelectorAll(".tutorial-card");

    tutorialCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
            card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        });
    });
});

// Animasi untuk konten yang dimuat
const fadeInKeyframes = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = fadeInKeyframes;
document.head.appendChild(styleSheet);


function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
}

