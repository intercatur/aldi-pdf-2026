import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// === Setup EJS (pakai ekstensi .html) ===
app.engine("html", ejs.renderFile); // pakai ejs untuk file .html
app.set("view engine", "html");
app.set("views", path.join(__dirname, "../components")); // tempat file html kamu

// === Public folder untuk CSS & gambar ===
app.use(express.static(path.join(__dirname, "../public")));

// === Home ===
app.get("/", (req, res) => {
	res.render("index.html", {
		title: "Purwokerto Dating Festival",
		message: "Selamat Datang di Halaman Resmi Event Purwokerto Dating Festival, Mohon untuk menunggu dikarenakan event sedang dalam proses, Terima Kasih Telah Berkunjung.",
	});
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

export default app;
