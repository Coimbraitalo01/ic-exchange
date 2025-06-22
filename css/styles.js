/* styles.css */
body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #000;
    color: #fff;
}

.top-bar {
    background-color: #111;
    padding: 10px 0;
    font-size: 14px;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.top-links a {
    color: #ffcc00;
    margin-left: 20px;
    text-decoration: none;
}

.main-header {
    background-color: #0a0a0a;
    padding: 20px 0;
}

.main-nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
}

.main-nav a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
}

.btn-primary {
    background-color: #ffcc00;
    border: none;
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    color: #000;
}

.hero {
    padding: 60px 0;
    background: linear-gradient(to right, #111, #000);
    text-align: center;
}

.hero h1 {
    font-size: 36px;
    margin-bottom: 20px;
}

.hero p {
    font-size: 18px;
    margin-bottom: 30px;
}

.btn-lg {
    padding: 12px 24px;
    font-size: 16px;
}

.btn-outline {
    background: none;
    border: 2px solid #ffcc00;
    color: #ffcc00;
    margin-left: 10px;
}

.products {
    padding: 40px 0;
    background-color: #111;
}

.products h2 {
    text-align: center;
    color: #ffcc00;
    margin-bottom: 30px;
}

.product-grid {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

.product-card {
    background-color: #1a1a1a;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    flex: 1;
    max-width: 300px;
}

.product-icon i {
    font-size: 30px;
    color: #ffcc00;
    margin-bottom: 10px;
}

.main-footer {
    background-color: #0a0a0a;
    padding: 40px 0;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-links {
    display: flex;
    gap: 40px;
}

.link-group h4 {
    margin-bottom: 10px;
    color: #ffcc00;
}

.link-group a {
    display: block;
    color: #ccc;
    margin-bottom: 5px;
    text-decoration: none;
}

.footer-copy {
    text-align: center;
    padding-top: 20px;
    font-size: 14px;
    color: #777;
}
