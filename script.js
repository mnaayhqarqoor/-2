// الكود السري الخاص بك
const ADMIN_PASS = "35592440";
let drawWindow;

// التحقق من كود المسؤول
function accessAdmin() {
    const input = document.getElementById('secretKey').value;
    if(input === ADMIN_PASS) {
        document.getElementById('loginBox').style.display = 'none';
        document.getElementById('controlPanel').style.display = 'block';
    } else {
        alert("الكود السري غير صحيح!");
    }
}

// فتح نافذة البث المنبثقة
function launchLiveDraw() {
    drawWindow = window.open("", "LiveStream", "width=1200,height=800");
    drawWindow.document.write(`
        <link rel="stylesheet" href="style.css">
        <div id="popOutUI">
            <h1 style="color:gold; font-size:3rem;">جاري السحب على $500,000</h1>
            <div id="winner-display" style="font-size:5rem; margin:50px; border:2px solid gold; padding:40px; border-radius:20px;">
                ؟؟؟؟؟؟
            </div>
            <div id="phone-display" style="font-size:2rem; color:#aaa;">*******</div>
            <button onclick="window.opener.startShuffle()" class="draw-btn" style="width:200px">ابدأ السحب</button>
            <button onclick="window.opener.showRealPhone()" class="draw-btn" style="width:200px; margin-top:10px; background:green;">إظهار الرقم الحقيقي</button>
        </div>
    `);
}

// محاكاة بيانات من جوجل شيت (يتم استبدالها برابط API الحقيقي الخاص بك)
const mockData = [
    {name: "أحمد محمد", phone: "0501234567"},
    {name: "سارة خالد", phone: "0559876543"},
    {name: "فهد العتيبي", phone: "0560011223"}
];

let selectedWinner = null;

function startShuffle() {
    let count = 0;
    let shuffle = setInterval(() => {
        let random = mockData[Math.floor(Math.random() * mockData.length)];
        drawWindow.document.getElementById('winner-display').innerText = random.name;
        // إخفاء الرقم بوضع نجوم
        drawWindow.document.getElementById('phone-display').innerText = random.phone.substring(0,4) + "****" + random.phone.slice(-2);
        count++;
        if(count > 30) {
            clearInterval(shuffle);
            selectedWinner = random;
            alert("تم تحديد الفائز!");
        }
    }, 100);
}

function showRealPhone() {
    if(selectedWinner) {
        drawWindow.document.getElementById('phone-display').innerText = selectedWinner.phone;
        drawWindow.document.getElementById('phone-display').style.color = "white";
    }
}
