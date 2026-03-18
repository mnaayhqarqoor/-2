const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxQGjthwG8GaQdOXB53xxotrJX4trj1wqA-kmIxwU2Gjvs5UK941RTBooW2qJe3mkZWFA/exec";
const ADMIN_PASS = "35592440";

// 1. وظيفة تسجيل المستخدم
if (document.getElementById('registrationForm')) {
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = document.getElementById('submitBtn');
        btn.innerText = "جاري التسجيل...";
        btn.disabled = true;

        const data = {
            name: document.getElementById('fullName').value,
            phone: document.getElementById('phoneNumber').value
        };

        fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // لتجنب مشاكل CORS مع جوجل
            body: JSON.stringify(data)
        }).then(() => {
            document.getElementById('responseMsg').innerHTML = "<p style='color:gold;'>تم دخولك السحب بنجاح! حظاً موفقاً.</p>";
            document.getElementById('registrationForm').reset();
            btn.innerText = "انضم للسحب الآن";
            btn.disabled = false;
        }).catch(err => alert("حدث خطأ، حاول مرة أخرى"));
    });
}

// 2. وظيفة جلب البيانات للسحب (للمسؤول)
async function fetchParticipants() {
    const response = await fetch(SCRIPT_URL);
    const users = await response.json();
    return users;
}

// باقي وظائف السحب والبث (launchLiveDraw) تبقى كما هي في الرد السابق
