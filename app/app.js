// ====================== STATE ======================
const state = {
  screen: "role",          // starts with role selection
  lang: "en",              // en | hi | mr
  role: null,              // collector | recycler
  offline: false,
  earnings: 68450,
  selectedMaterial: "PCB",
  weight: 4.2,
  condition: "Mixed",
  selectedRecycler: null,
  lotId: null
};

// ====================== DATA ======================
const materials = [
  { key: "PCB", name: "PCB", price: 920, trend: "Rising", range: "₹820–₹950", loc: "Bhusawal" },
  { key: "Copper Cable", name: "Copper Cable", price: 680, trend: "Stable", range: "₹600–₹720", loc: "Jalgaon" },
  { key: "Lead-Acid Battery", name: "Lead-Acid Battery", price: 125, trend: "Falling", range: "₹95–₹140", loc: "Bhusawal" },
  { key: "Lithium Battery", name: "Lithium Battery", price: 430, trend: "Rising", range: "₹360–₹450", loc: "Bhusawal" },
  { key: "Aluminium", name: "Aluminium", price: 195, trend: "Stable", range: "₹165–₹210", loc: "Bhusawal" },
  { key: "LCD Panel", name: "LCD Panel", price: 310, trend: "Rising", range: "₹250–₹330", loc: "Jalgaon" },
  { key: "CRT", name: "CRT", price: 48, trend: "Stable", range: "₹30–₹52", loc: "Bhusawal" },
  { key: "Motors", name: "Motors", price: 48, trend: "Stable", range: "₹35–₹55", loc: "Bhusawal" },
  { key: "Magnet Assembly", name: "Magnet Assembly", price: 220, trend: "Rising", range: "₹180–₹240", loc: "Bhusawal" },
  { key: "Mixed Plastics", name: "Mixed Plastics", price: 32, trend: "Rising", range: "₹18–₹34", loc: "Bhusawal" }
];

const recyclers = [
  { id: "r1", name: "EcoRecycle India", dist: "6.2 km", rate: 920, pickup: true, auth: true, rating: 4.8 },
  { id: "r2", name: "Safeli Battery Hub", dist: "5.1 km", rate: 132, pickup: true, auth: true, rating: 4.9 },
  { id: "r3", name: "GreenCycle Resources", dist: "9.4 km", rate: 890, pickup: false, auth: true, rating: 4.6 },
  { id: "r4", name: "ReNew Materials", dist: "12.1 km", rate: 900, pickup: true, auth: true, rating: 4.5 }
];

const lots = [
  { id: "S2C-20260918-001", material: "PCB", weight: 4.2, location: "Bhusawal", amount: 3780, status: "Completed" },
  { id: "S2C-20260917-014", material: "Copper Cable", weight: 6.8, location: "Jalgaon", amount: 4624, status: "Completed" },
  { id: "S2C-20260916-008", material: "Lead-Acid Battery", weight: 18.5, location: "Bhusawal", amount: 2220, status: "Completed" },
  { id: "S2C-20260915-022", material: "Aluminium", weight: 12.3, location: "Bhusawal", amount: 2340, status: "Completed" },
  { id: "S2C-20260914-011", material: "LCD Panel", weight: 3.1, location: "Jalgaon", amount: 930, status: "Completed" },
  { id: "S2C-20260921-003", material: "Lithium Battery", weight: 2.4, location: "Bhusawal", amount: 1032, status: "Active" }
];

// ====================== i18n ======================
const t = {
  en: {
    heroTitle: "Your scrap.",
    heroAccent: "Better value.",
    heroBody: "See fair prices, reach authorised recyclers, and keep every handover on record.",
    todayEarn: "Today's estimated earnings",
    sell: "Sell scrap",
    sellHint: "Photo, weight, price, recycler",
    find: "Find recycler",
    findHint: "Authorised partners nearby",
    lots: "My lots",
    lotsHint: "Track every handover",
    earnings: "Earnings",
    earningsHint: "Paid, pending, and cash",
    rates: "Price board",
    ratesHint: "Today's buying rates",
    safety: "Stay safe",
    safetyHint: "Battery, CRT, and burning risks"
  },
  hi: {
    heroTitle: "आपका कबाड़.",
    heroAccent: "बेहतर दाम.",
    heroBody: "उचित भाव देखें, अधिकृत रीसायक्लर से जुड़ें और हर लेन-देन का रिकॉर्ड रखें।",
    todayEarn: "आज की अनुमानित कमाई",
    sell: "कबाड़ बेचें",
    sellHint: "फोटो, वजन, भाव, रीसायक्लर",
    find: "रीसायक्लर खोजें",
    findHint: "पास के अधिकृत पार्टनर",
    lots: "मेरे लॉट",
    lotsHint: "हर हैंडओवर ट्रैक करें",
    earnings: "कमाई",
    earningsHint: "भुगतान, बकाया और नकद",
    rates: "भाव बोर्ड",
    ratesHint: "आज के खरीद भाव",
    safety: "सुरक्षित रहें",
    safetyHint: "बैटरी, CRT और जलाने के खतरे"
  },
  mr: {
    heroTitle: "तुमचे कबाड.",
    heroAccent: "चांगला भाव.",
    heroBody: "योग्य भाव पहा, अधिकृत रीसायक्लरशी जोडा आणि प्रत्येक हस्तांतरणाची नोंद ठेवा.",
    todayEarn: "आजची अंदाजे कमाई",
    sell: "कबाड विका",
    sellHint: "फोटो, वजन, भाव, रीसायक्लर",
    find: "रीसायक्लर शोधा",
    findHint: "जवळचे अधिकृत पार्टनर",
    lots: "माझे लॉट",
    lotsHint: "प्रत्येक हस्तांतरण ट्रॅक करा",
    earnings: "कमाई",
    earningsHint: "पैसे, बाकी आणि रोख",
    rates: "भाव फळा",
    ratesHint: "आजचे खरेदी भाव",
    safety: "सुरक्षित रहा",
    safetyHint: "बॅटरी, CRT आणि जाळण्याचे धोके"
  }
};

function tr(key) {
  return (t[state.lang] && t[state.lang][key]) || t.en[key] || key;
}

function money(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}

// ====================== NAVIGATION ======================
function go(screen) {
  state.screen = screen;
  render();
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.screen === screen);
  });
  window.scrollTo(0, 0);
}

function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2200);
}

// ====================== ROLE SELECTION ======================
function roleScreen() {
  return `
    <div style="padding: 50px 12px 30px; text-align: center;">
      <h1 style="font-size: 26px; font-weight: 800; margin-bottom: 8px; color:#111;">Welcome to Scrap2Cash</h1>
      <p style="color: #6b7280; margin-bottom: 40px; font-size:15px;">How will you use the platform?</p>

      <div class="card" style="text-align: left; cursor: pointer; margin-bottom: 16px; padding:18px;" onclick="selectRole('collector')">
        <div style="display: flex; align-items: center; gap: 14px;">
          <div style="font-size: 34px;">🛒</div>
          <div style="flex: 1;">
            <div style="font-weight: 700; font-size: 17px;">Collector / Kabadiwala</div>
            <div style="font-size: 13px; color: #6b7280; margin-top: 4px; line-height:1.4;">
              Sell scrap, discover prices, find recyclers and track earnings.
            </div>
          </div>
          <div style="font-size: 22px; color: #1b5e20;">›</div>
        </div>
      </div>

      <div class="card" style="text-align: left; cursor: pointer; padding:18px;" onclick="selectRole('recycler')">
        <div style="display: flex; align-items: center; gap: 14px;">
          <div style="font-size: 34px;">♻️</div>
          <div style="flex: 1;">
            <div style="font-weight: 700; font-size: 17px;">Authorized Recycler</div>
            <div style="font-size: 13px; color: #6b7280; margin-top: 4px; line-height:1.4;">
              Discover scrap lots, connect with collectors and manage handovers.
            </div>
          </div>
          <div style="font-size: 22px; color: #1b5e20;">›</div>
        </div>
      </div>
    </div>
  `;
}

function selectRole(role) {
  state.role = role;
  if (role === "collector") {
    go("home");
  } else {
    go("recyclerHome");
  }
}

// ====================== COLLECTOR SCREENS ======================
function homeScreen() {
  return `
    <div class="hero">
      <div style="font-size:11px;font-weight:600;letter-spacing:0.08em;color:#1b5e20;margin-bottom:6px">SCRAP2CASH</div>
      <h1>${tr("heroTitle")}<br><span>${tr("heroAccent")}</span></h1>
      <p>${tr("heroBody")}</p>
    </div>

    <div class="card" style="display:flex;justify-content:space-between;align-items:center">
      <div>
        <div style="font-size:12px;color:#6b7280">${tr("todayEarn")}</div>
        <div style="font-size:28px;font-weight:800;margin-top:4px">${money(2450)}</div>
      </div>
      <div style="text-align:right;font-size:13px;color:#1b5e20;font-weight:600">
        +12%<br><span style="font-weight:400;color:#6b7280;font-size:11px">than yesterday</span>
      </div>
    </div>

    <div class="section-title">What do you want to do?</div>
    <div class="grid-2">
      <button class="tile primary" onclick="go('add')">
        <div class="icon">📷</div>
        <div>
          <div class="title">${tr("sell")}</div>
          <div class="hint">${tr("sellHint")}</div>
        </div>
      </button>
      <button class="tile secondary" onclick="go('recyclers')">
        <div class="icon">📍</div>
        <div>
          <div class="title">${tr("find")}</div>
          <div class="hint">${tr("findHint")}</div>
        </div>
      </button>
      <button class="tile secondary" onclick="go('lots')">
        <div class="icon">📦</div>
        <div>
          <div class="title">${tr("lots")}</div>
          <div class="hint">${tr("lotsHint")}</div>
        </div>
      </button>
      <button class="tile secondary" onclick="go('earnings')">
        <div class="icon">₹</div>
        <div>
          <div class="title">${tr("earnings")}</div>
          <div class="hint">${tr("earningsHint")}</div>
        </div>
      </button>
    </div>

    <div class="card" style="display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="go('priceboard')">
      <div>
        <div style="font-weight:600">${tr("rates")}</div>
        <div style="font-size:12px;color:#6b7280">${tr("ratesHint")}</div>
      </div>
      <span style="font-size:18px">🔊</span>
    </div>

    <div class="card" style="display:flex;justify-content:space-between;align-items:center">
      <div>
        <div style="font-weight:600">${tr("safety")}</div>
        <div style="font-size:12px;color:#6b7280">${tr("safetyHint")}</div>
      </div>
      <button class="btn small outline" onclick="speakSafety()">Listen</button>
    </div>
  `;
}

function lotsScreen() {
  return `
    <h2 style="font-size:22px;font-weight:800;margin-bottom:14px">My lots</h2>
    <div style="display:flex;gap:8px;margin-bottom:16px">
      <button class="lang-btn active">All</button>
      <button class="lang-btn">Active</button>
      <button class="lang-btn">Completed</button>
    </div>
    ${lots.map(l => `
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div>
            <div style="font-size:12px;color:#6b7280;font-weight:600">${l.id}</div>
            <div style="font-weight:600;margin-top:4px">${l.material} · ${l.weight} kg</div>
            <div style="font-size:12px;color:#6b7280">${l.location}</div>
          </div>
          <div style="text-align:right">
            <span class="badge ${l.status === 'Completed' ? 'completed' : 'active'}">${l.status}</span>
            <div style="font-weight:700;margin-top:6px">${money(l.amount)}</div>
          </div>
        </div>
      </div>
    `).join("")}
  `;
}

function priceboardScreen() {
  return `
    <h2 style="font-size:22px;font-weight:800;margin-bottom:6px">Today's buying rates</h2>
    <p style="font-size:13px;color:#6b7280;margin-bottom:16px">Tap a row to hear the rate.</p>
    ${materials.map(m => `
      <div class="card" style="cursor:pointer" onclick="speakPrice('${m.name}', ${m.price})">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-weight:600">${m.name}</div>
            <div style="font-size:12px;color:#6b7280">${m.loc} · Trend: ${m.trend}</div>
          </div>
          <div style="text-align:right">
            <div style="font-weight:800;font-size:17px;color:#1b5e20">${money(m.price)}</div>
            <div style="font-size:11px;color:#6b7280">${m.range}</div>
          </div>
        </div>
      </div>
    `).join("")}
  `;
}

function earningsScreen() {
  return `
    <h2 style="font-size:22px;font-weight:800;margin-bottom:16px">My Earnings</h2>
    <div class="card" style="text-align:center;padding:24px">
      <div style="font-size:13px;color:#6b7280">Total earnings</div>
      <div style="font-size:32px;font-weight:800;margin:6px 0">${money(state.earnings)}</div>
      <div style="font-size:13px;color:#1b5e20">This month · ₹6,920 paid</div>
    </div>
    <div class="grid-2">
      <div class="card" style="text-align:center">
        <div style="font-size:12px;color:#6b7280">Paid</div>
        <div style="font-weight:700;font-size:18px;color:#1b5e20">₹62,100</div>
      </div>
      <div class="card" style="text-align:center">
        <div style="font-size:12px;color:#6b7280">Pending</div>
        <div style="font-weight:700;font-size:18px;color:#e65100">₹6,350</div>
      </div>
    </div>
    <div class="section-title">Recent transactions</div>
    ${lots.slice(0,4).map(l => `
      <div class="card" style="display:flex;justify-content:space-between">
        <div>
          <div style="font-weight:600">${l.material}</div>
          <div style="font-size:12px;color:#6b7280">${l.id}</div>
        </div>
        <div style="text-align:right">
          <div style="font-weight:700">${money(l.amount)}</div>
          <span class="badge ${l.status === 'Completed' ? 'completed' : 'active'}">${l.status}</span>
        </div>
      </div>
    `).join("")}
  `;
}

function profileScreen() {
  return `
    <h2 style="font-size:22px;font-weight:800;margin-bottom:16px">Account</h2>
    <div class="card">
      <div style="display:flex;justify-content:space-between;padding:8px 0"><span style="color:#6b7280">Collector ID</span><strong>COL-7842</strong></div>
      <div style="display:flex;justify-content:space-between;padding:8px 0"><span style="color:#6b7280">Operating area</span><strong>Bhusawal</strong></div>
      <div style="display:flex;justify-content:space-between;padding:8px 0"><span style="color:#6b7280">Total earnings</span><strong>${money(state.earnings)}</strong></div>
    </div>

    <div class="section-title">Language</div>
    <div style="margin-bottom:16px">
      <button class="lang-btn ${state.lang==='en'?'active':''}" onclick="setLang('en')">English</button>
      <button class="lang-btn ${state.lang==='hi'?'active':''}" onclick="setLang('hi')">हिन्दी</button>
      <button class="lang-btn ${state.lang==='mr'?'active':''}" onclick="setLang('mr')">मराठी</button>
    </div>

    <div class="card" style="display:flex;justify-content:space-between;align-items:center">
      <div>
        <div style="font-weight:600">Online</div>
        <div style="font-size:12px;color:#6b7280">Lots save on this phone and sync later.</div>
      </div>
      <label style="position:relative;display:inline-block;width:46px;height:26px">
        <input type="checkbox" ${!state.offline?'checked':''} onchange="state.offline=!this.checked;showToast(state.offline?'Offline mode':'Online mode')" style="opacity:0;width:0;height:0">
        <span style="position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background:#1b5e20;border-radius:26px"></span>
      </label>
    </div>

    <button class="btn outline" style="margin-top:12px" onclick="showToast('Datasets view')">Datasets</button>
    <button class="btn outline" style="margin-top:10px" onclick="go('recyclerHome')">Recycler desk</button>
    <button class="btn outline" style="margin-top:10px" onclick="go('role')">← Switch Role</button>

    <div class="card" style="margin-top:16px">
      <div style="font-weight:600;margin-bottom:8px">Unit economics</div>
      <div style="display:flex;justify-content:space-between;font-size:14px;padding:4px 0">
        <span>Typical monthly (informal)</span><span>₹62,000</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:14px;padding:4px 0;color:#1b5e20;font-weight:600">
        <span>With Scrap2Cash</span><span>₹84,500</span>
      </div>
    </div>
  `;
}

function addScreen() {
  return `
    <h2 style="font-size:22px;font-weight:800;margin-bottom:16px">Add scrap</h2>

    <!-- Camera Section -->
    <div class="card" style="text-align:center; padding: 16px;">
      <div id="cameraArea">
        <video id="cameraVideo" autoplay playsinline style="width:100%; max-height:240px; border-radius:12px; display:none; background:#000;"></video>
        <canvas id="cameraCanvas" style="display:none;"></canvas>

        <div id="cameraPlaceholder">
          <div style="font-size:48px;margin-bottom:12px;">📷</div>
          <p style="font-size:14px;color:#6b7280;margin-bottom:16px;">Take a photo of the scrap for AI recognition</p>
          <button class="btn" onclick="startCamera()">Open Camera</button>
        </div>

        <div id="cameraControls" style="display:none; margin-top:12px;">
          <button class="btn" onclick="capturePhoto()">Capture Photo</button>
          <button class="btn outline" style="margin-top:8px;" onclick="stopCamera()">Cancel</button>
        </div>
      </div>

      <div id="previewArea" style="display:none;">
        <img id="photoPreview" style="width:100%;max-height:220px;object-fit:cover;border-radius:12px;margin-bottom:12px;">
        
        <div id="aiLoading" style="display:none; padding:16px;">
          <div style="font-size:14px; color:#1b5e20;">🔍 Analyzing scrap...</div>
          <div style="margin-top:8px; height:4px; background:#e0e0e0; border-radius:4px; overflow:hidden;">
            <div id="progressBar" style="height:100%; width:0%; background:#1b5e20; transition: width 1.2s;"></div>
          </div>
        </div>

        <div id="aiResult" style="margin:12px 0;padding:12px;background:#e8f5e9;border-radius:10px;display:none;">
          <div style="font-weight:700;color:#1b5e20;" id="detectedMaterial">Detected: PCB</div>
          <div style="font-size:13px;color:#4b5563;" id="confidenceText">Confidence: 91%</div>
        </div>

        <button class="btn outline" style="margin-top:8px;" onclick="retakePhoto()">Retake Photo</button>
      </div>
    </div>

    <!-- Form Section -->
    <div class="card" style="margin-top:14px;">
      <label>Material (auto-filled by AI)</label>
      <select id="materialSelect" onchange="state.selectedMaterial=this.value">
        ${materials.map(m => `<option value="${m.key}" ${m.key===state.selectedMaterial?'selected':''}>${m.name}</option>`).join("")}
      </select>

      <label>Approx. weight (kg)</label>
      <input type="number" id="weightInput" value="${state.weight}" step="0.1" onchange="state.weight=parseFloat(this.value)||0">

      <label>Condition</label>
      <select id="conditionSelect" onchange="state.condition=this.value">
        <option>Good</option>
        <option selected>Mixed</option>
        <option>Damaged</option>
      </select>

      <button class="btn" style="margin-top:20px" onclick="estimateValue()">Get fair value estimate</button>
    </div>
  `;
}

let cameraStream = null;

async function startCamera() {
  try {
    const video = document.getElementById("cameraVideo");
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" }, // back camera on mobile
      audio: false
    });

    cameraStream = stream;
    video.srcObject = stream;
    video.style.display = "block";

    document.getElementById("cameraPlaceholder").style.display = "none";
    document.getElementById("cameraControls").style.display = "block";
  } catch (err) {
    console.error(err);
    showToast("Camera permission denied or not available");
    // fallback to file input
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.capture = "environment";
    input.onchange = handlePhotoFallback;
    input.click();
  }
}

function capturePhoto() {
  const video = document.getElementById("cameraVideo");
  const canvas = document.getElementById("cameraCanvas");
  const preview = document.getElementById("photoPreview");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0);

  // Stop camera
  stopCamera();

  // Show preview
  preview.src = canvas.toDataURL("image/jpeg");
  document.getElementById("cameraArea").style.display = "none";
  document.getElementById("previewArea").style.display = "block";

  // Start AI simulation
  runAIRecognition();
}

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(track => track.stop());
    cameraStream = null;
  }
  const video = document.getElementById("cameraVideo");
  if (video) {
    video.srcObject = null;
    video.style.display = "none";
  }
  document.getElementById("cameraPlaceholder").style.display = "block";
  document.getElementById("cameraControls").style.display = "none";
}

function retakePhoto() {
  document.getElementById("cameraArea").style.display = "block";
  document.getElementById("previewArea").style.display = "none";
  document.getElementById("aiResult").style.display = "none";
  document.getElementById("aiLoading").style.display = "none";
  stopCamera();
}

function runAIRecognition() {
  const loading = document.getElementById("aiLoading");
  const result = document.getElementById("aiResult");
  const progress = document.getElementById("progressBar");

  loading.style.display = "block";
  result.style.display = "none";
  progress.style.width = "0%";

  // Animate progress bar
  setTimeout(() => progress.style.width = "100%", 50);

  setTimeout(() => {
    loading.style.display = "none";

    // Mock AI result
    const randomMat = materials[Math.floor(Math.random() * materials.length)];
    const confidence = 87 + Math.floor(Math.random() * 10);

    state.selectedMaterial = randomMat.key;

    document.getElementById("detectedMaterial").innerText = `Detected: ${randomMat.name}`;
    document.getElementById("confidenceText").innerText = `Confidence: ${confidence}%`;
    result.style.display = "block";

    // Auto-select in dropdown
    const select = document.getElementById("materialSelect");
    if (select) select.value = randomMat.key;

    showToast(`AI detected ${randomMat.name}`);
  }, 1400);
}

// Fallback for devices that don't support getUserMedia well
function handlePhotoFallback(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById("cameraArea").style.display = "none";
    document.getElementById("previewArea").style.display = "block";
    document.getElementById("photoPreview").src = e.target.result;
    runAIRecognition();
  };
  reader.readAsDataURL(file);
}

function estimateValue() {
  const mat = materials.find(m => m.key === state.selectedMaterial) || materials[0];
  const factor = state.condition === "Good" ? 1 : state.condition === "Damaged" ? 0.82 : 0.93;
  const total = Math.round(mat.price * state.weight * factor);
  state.lotId = "S2C-" + new Date().toISOString().slice(0,10).replace(/-/g,"") + "-" + Math.floor(Math.random()*900+100);
  
  document.getElementById("app").innerHTML = `
    <h2 style="font-size:22px;font-weight:800;margin-bottom:16px">Estimated value</h2>
    <div class="card" style="text-align:center;padding:28px">
      <div style="font-size:13px;color:#6b7280">Fair value for ${state.weight} kg ${mat.name}</div>
      <div style="font-size:36px;font-weight:800;color:#1b5e20;margin:10px 0">${money(total)}</div>
      <div style="font-size:13px;color:#6b7280">Based on local rates · Confidence 87%</div>
    </div>
    <button class="btn" onclick="go('recyclers')">Find best recycler</button>
    <button class="btn outline" style="margin-top:10px" onclick="go('add')">Edit details</button>
  `;
}

function recyclersScreen() {
  return `
    <h2 style="font-size:22px;font-weight:800;margin-bottom:6px">Best recyclers</h2>
    <p style="font-size:13px;color:#6b7280;margin-bottom:16px">Ranked by rate, distance & pickup</p>
    ${recyclers.map(r => `
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div>
            <div style="font-weight:700">${r.name}</div>
            <div style="font-size:12px;color:#6b7280;margin-top:2px">${r.dist} · ★ ${r.rating}</div>
            <div style="margin-top:6px">
              <span class="badge completed">${r.auth ? 'Authorised' : 'Expired'}</span>
              ${r.pickup ? '<span class="badge" style="background:#e3f2fd;color:#1565c0;margin-left:4px">Pickup</span>' : ''}
            </div>
          </div>
          <div style="text-align:right">
            <div style="font-weight:800;font-size:18px">${money(r.rate)}/kg</div>
            <button class="btn small" style="margin-top:8px" onclick="selectRecycler('${r.id}')">Select</button>
          </div>
        </div>
      </div>
    `).join("")}
  `;
}

function selectRecycler(id) {
  state.selectedRecycler = recyclers.find(r => r.id === id);
  showToast("Recycler selected");
  document.getElementById("app").innerHTML = `
    <h2 style="font-size:22px;font-weight:800;margin-bottom:16px">Handover record</h2>
    <div class="card" style="text-align:center">
      <div style="font-size:48px;margin:10px 0">📱</div>
      <div style="font-weight:700;font-size:18px">${state.lotId || 'S2C-NEW-001'}</div>
      <div style="font-size:13px;color:#6b7280;margin:8px 0">Show this code to the recycler</div>
      <div style="background:#f0f0f0;padding:20px;border-radius:12px;font-family:monospace;font-size:14px;margin:16px 0">
        QR CODE<br>${state.lotId || 'S2C-NEW-001'}
      </div>
      <button class="btn" onclick="completeHandover()">Recycler confirms ✅</button>
    </div>
  `;
}

function completeHandover() {
  showToast("Handover confirmed! Lot added to ledger.");
  go("lots");
}

// ====================== RECYCLER SIDE ======================
function recyclerHomeScreen() {
  const pending = lots.filter(l => l.status === "Active");
  return `
    <div class="hero" style="background:#e8f5e9;">
      <div style="font-size:11px;font-weight:600;color:#1b5e20;">RECYCLER DESK</div>
      <h1 style="font-size:24px;margin-top:6px;">Incoming Lots</h1>
      <p style="font-size:13px;color:#4b5563;">Confirm handovers from collectors</p>
    </div>

    <div class="section-title">Pending Confirmations (${pending.length})</div>

    ${pending.length === 0 
      ? `<div class="card" style="text-align:center;color:#6b7280;padding:30px;">No pending lots right now</div>`
      : pending.map(l => `
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <div>
              <div style="font-size:12px;color:#6b7280;font-weight:600">${l.id}</div>
              <div style="font-weight:600;margin-top:4px">${l.material} · ${l.weight} kg</div>
              <div style="font-size:12px;color:#6b7280">${l.location}</div>
            </div>
            <div style="text-align:right">
              <div style="font-weight:700;font-size:17px">${money(l.amount)}</div>
              <button class="btn small" style="margin-top:8px" onclick="confirmLot('${l.id}')">Confirm Handover</button>
            </div>
          </div>
        </div>
      `).join("")
    }

    <button class="btn outline" style="margin-top:24px" onclick="go('role')">← Switch Role</button>
  `;
}

function confirmLot(id) {
  const lot = lots.find(l => l.id === id);
  if (lot) {
    lot.status = "Completed";
    showToast("Handover confirmed successfully!");
  }
  render();
}

// ====================== HELPERS ======================
function setLang(lang) {
  state.lang = lang;
  render();
  showToast(lang === "mr" ? "भाषा बदलली" : lang === "hi" ? "भाषा बदली" : "Language changed");
}

function speakPrice(name, price) {
  if (!window.speechSynthesis) {
    showToast(`${name}: ₹${price}/kg`);
    return;
  }
  const u = new SpeechSynthesisUtterance();
  if (state.lang === "hi") u.text = `${name} का भाव ${price} रुपये प्रति किलो है`;
  else if (state.lang === "mr") u.text = `${name} चा भाव ${price} रुपये प्रति किलो आहे`;
  else u.text = `${name} is ${price} rupees per kilogram`;
  u.lang = state.lang === "hi" ? "hi-IN" : state.lang === "mr" ? "mr-IN" : "en-IN";
  speechSynthesis.speak(u);
}

function speakSafety() {
  const text = state.lang === "mr" 
    ? "बॅटरी आणि CRT कधीही जाळू नका. हातमोजे वापरा."
    : state.lang === "hi"
    ? "बैटरी और CRT कभी न जलाएं। दस्ताने पहनें।"
    : "Never burn batteries or CRTs. Always wear gloves.";
  if (window.speechSynthesis) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = state.lang === "hi" ? "hi-IN" : state.lang === "mr" ? "mr-IN" : "en-IN";
    speechSynthesis.speak(u);
  } else {
    showToast(text);
  }
}

// ====================== RENDER ======================
function render() {
  const app = document.getElementById("app");
  switch (state.screen) {
    case "role":          app.innerHTML = roleScreen(); break;
    case "home":          app.innerHTML = homeScreen(); break;
    case "lots":          app.innerHTML = lotsScreen(); break;
    case "priceboard":    app.innerHTML = priceboardScreen(); break;
    case "earnings":      app.innerHTML = earningsScreen(); break;
    case "profile":       app.innerHTML = profileScreen(); break;
    case "add":           app.innerHTML = addScreen(); break;
    case "recyclers":     app.innerHTML = recyclersScreen(); break;
    case "recyclerHome":  app.innerHTML = recyclerHomeScreen(); break;
    default:              app.innerHTML = roleScreen();
  }
}

// Start the app
render();