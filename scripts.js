const categories = ["All","Singing & Dancing","Comedy","Sports","Anime & Comics","Relationship","Shows","Lipsync","Daily Life","Beauty Care","Games","Society","Outfit","Cars","Food","Animals","Family","Drama","Fitness & Health","Education","Technology"];

const mockVideos = [
    {id:1, thumb:"https://picsum.photos/id/1015/300/500", user:"@realjayllnn", caption:"POV: you finally nail the trend 🔥", likes:1240000},
    {id:2, thumb:"https://picsum.photos/id/201/300/500", user:"@dancequeen", caption:"This transition hit different 😭", likes:890000},
    {id:3, thumb:"https://picsum.photos/id/237/300/500", user:"@cuteandchubbycat", caption:"POV: your cat is the main character", likes:2450000},
    {id:4, thumb:"https://picsum.photos/id/29/300/500", user:"@foodlover", caption:"This recipe changed my life 🍜", likes:567000},
    {id:5, thumb:"https://picsum.photos/id/1016/300/500", user:"@gymrat", caption:"Day 1 vs Day 365 transformation", likes:1340000},
    {id:6, thumb:"https://picsum.photos/id/160/300/500", user:"@comedyking", caption:"When she says she's 5 minutes away 😂", likes:3120000},
    {id:7, thumb:"https://picsum.photos/id/201/300/500", user:"@animefan", caption:"This anime edit is insane 🔥", likes:980000},
    {id:8, thumb:"https://picsum.photos/id/251/300/500", user:"@fashionista", caption:"Outfit of the day ✨", likes:756000}
];

function populateCategories() {
    const container = document.getElementById('categories');
    categories.forEach((cat, i) => {
        const pill = document.createElement('div');
        pill.className = `category-pill px-4 py-2 ${i===0 ? 'active' : ''}`;
        pill.textContent = cat;
        container.appendChild(pill);
    });
}

function createVideoCard(video) {
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = `
        <div class="video-card h-100">
            <div class="video-placeholder" style="background-image:url('${video.thumb}')">
                <svg class="play-icon" width="64" height="64" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><polygon points="8 5 20 12 8 19"/></svg>
            </div>
            <div class="p-3">
                <div class="d-flex align-items-center gap-2">
                    <div class="rounded-circle bg-secondary" style="width:32px;height:32px;"></div>
                    <div>
                        <strong>${video.user}</strong>
                        <div class="small text-muted">${video.caption}</div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <button class="heart btn btn-link p-0" onclick="toggleLike(this, ${video.id})">
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3 9.24 3 10.91 3.81 12 5.09 13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    </button>
                    <span class="likes-count small text-muted">${(video.likes/1000000).toFixed(1)}M</span>
                </div>
            </div>
        </div>
    `;
    return col;
}

function populateVideos() {
    const grid = document.getElementById('videoGrid');
    mockVideos.forEach(v => grid.appendChild(createVideoCard(v)));
}

function toggleLike(btn) {
    btn.classList.toggle('liked');
    const countEl = btn.parentElement.querySelector('.likes-count');
    let count = parseFloat(countEl.textContent);
    countEl.textContent = btn.classList.contains('liked') ? (count + 0.1).toFixed(1) + 'M' : (count - 0.1).toFixed(1) + 'M';
}

function showLoginModal() {
    new bootstrap.Modal(document.getElementById('loginModal')).show();
}

function showUploadModal() {
    alert("Upload feature coming soon! (Exact replica demo)");
}

// Fake infinite scroll
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
        const grid = document.getElementById('videoGrid');
        for (let i = 0; i < 3; i++) {
            const fake = {...mockVideos[Math.floor(Math.random()*mockVideos.length)], id: Date.now()+i};
            grid.appendChild(createVideoCard(fake));
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    populateCategories();
    populateVideos();
});
