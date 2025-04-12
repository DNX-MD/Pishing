<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CYBER DINU GIRL</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #ff007f, #00b7eb);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            text-align: center;
            background: rgba(255, 255, 255, 0.9);
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            max-width: 600px;
            margin: 20px;
        }

        h1 {
            color: #ff007f;
            font-size: 36px;
            margin-bottom: 20px;
        }

        h2 {
            color: #333;
            font-size: 24px;
            margin-bottom: 20px;
        }

        .btn {
            padding: 12px 24px;
            font-size: 18px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            margin: 10px;
            color: white;
            transition: transform 0.2s, background 0.3s;
        }

        .whatsapp-btn {
            background: #25D366;
        }

        .whatsapp-btn:hover {
            background: #1ebe57;
            transform: scale(1.05);
        }

        .return-btn {
            background: #007bff;
        }

        .return-btn:hover {
            background: #0056b3;
            transform: scale(1.05);
        }

        .okay-btn {
            background: #28a745;
        }

        .okay-btn:hover {
            background: #218838;
            transform: scale(1.05);
        }

        #status {
            color: red;
            font-size: 18px;
            margin: 20px 0;
        }

        .platform-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 15px;
        }

        .platform-btn {
            padding: 12px;
            font-size: 16px;
            color: white;
            border-radius: 8px;
            text-align: center;
            text-decoration: none;
            display: block;
            transition: transform 0.2s;
        }

        .platform-btn:hover {
            transform: scale(1.05);
        }

        .facebook { background: #3b5998; }
        .instagram { background: #e1306c; }
        .google { background: #db4a39; }
        .freefire { background: #ff4500; }
        .pubg { background: #f5c518; }
        .twitter { background: #1da1f2; }
        .imo { background: #00ff00; }
        .telegram { background: #0088cc; }

        p {
            color: #333;
            margin-top: 10px;
        }

        .page {
            display: none;
        }

        .page.active {
            display: block;
        }

        @media (max-width: 480px) {
            h1 { font-size: 28px; }
            .container { padding: 20px; }
            .btn, .platform-btn { font-size: 14px; }
        }
    </style>
</head>
<body>
    <!-- Landing Page -->
    <div id="landing" class="container page active">
        <h1>CYBER DINU GIRL</h1>
        <a href="https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C" target="_blank">
            <button class="btn whatsapp-btn">Join WhatsApp Channel</button>
        </a>
        <p>Follow the channel and click below to proceed!</p>
        <button class="btn return-btn" onclick="showPage('verify')">I’ve Followed, Check Now</button>
    </div>

    <!-- Verification Page -->
    <div id="verify" class="container page">
        <h1>CYBER DINU GIRL</h1>
        <div id="status">Checking subscription...</div>
        <button id="okayButton" class="btn okay-btn" onclick="showPage('platforms')" style="display: none;">Okay</button>
    </div>

    <!-- Platforms Page -->
    <div id="platforms" class="container page">
        <h1>CYBER DINU GIRL</h1>
        <h2>Choose a Platform</h2>
        <div class="platform-grid">
            <a href="#" class="platform-btn facebook Pishing" onclick="showAlert('Facebook')">Facebook</a>
            <a href="#" class="platform-btn instagram Pishing" onclick="showAlert('Instagram')">Instagram</a>
            <a href="#" class="platform-btn google Pishing" onclick="showAlert('Google')">Google</a>
            <a href="#" class="platform-btn freefire Pishing" onclick="showAlert('Free Fire')">Free Fire</a>
            <a href="#" class="platform-btn pubg Pishing" onclick="showAlert('PUBG')">PUBG</a>
            <a href="#" class="platform-btn twitter Pishing" onclick="showAlert('Twitter')">Twitter</a>
            <a href="#" class="platform-btn imo Pishing" onclick="showAlert('IMO')">IMO</a>
            <a href="https://t.me/@dinugirl2007 target="_blank" class="platform-btn telegram">Telegram Bot</a>
        </div>
    </div>

    <script>
        // Page navigation
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');

            if (pageId === 'verify') {
                checkSubscription();
            }
        }

        // Simulated subscription check
        function checkSubscription() {
            const status = document.getElementById('status');
            const okayButton = document.getElementById('okayButton');

            // Simulate WhatsApp follower status
            let isSubscribed = localStorage.getItem('subscribed') === 'true';

            if (isSubscribed) {
                status.innerText = 'You are a channel follower!';
                status.style.color = 'green';
                okayButton.style.display = 'block';
            } else {
                status.innerText = 'Not a channel follower!';
                status.style.color = 'red';
                okayButton.style.display = 'none';
            }
        }

        // Simulate subscribing when user clicks "I’ve Followed"
        document.querySelector('.return-btn').addEventListener('click', () => {
            localStorage.setItem('subscribed', 'true');
        });

        // Simulate unsubscribing after 10 seconds for demo
        setTimeout(() => {
            localStorage.setItem('subscribed', 'false');
            if (document.getElementById('verify').classList.contains('active')) {
                checkSubscription();
            }
        }, 10000);

        // Show alert for platforms (placeholder instead of phishing)
        function showAlert(platform) {
            alert(`You clicked ${platform}! This is a demo page.`);
        }
    </script>
</body>
</html>
