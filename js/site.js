const $ = selector => document.querySelector(selector);

function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[ch]));
}

function media(p, extraClass = '') {
    const src = escapeHTML(p.cover);
    return `<div class="media ${extraClass}"><div class="media-fallback"><span>IMAGE / ${escapeHTML(p.number)}</span><small>Add ${src}</small></div><img src="${src}" alt="${escapeHTML(p.title)} project cover" style="object-position:${escapeHTML(p.coverPosition || 'center center')}" loading="lazy" onerror="this.style.display='none'" /></div>`;
}

function renderWork() {
    $('#project-list').innerHTML = projects.map((p, i) => `<a class="project-row ${i === 0 ? 'featured' : ''}" href="#project-${encodeURIComponent(p.id)}"><div class="project-media">${media(p)}</div><div class="project-info"><div class="eyebrow">${escapeHTML(p.number)} / ${escapeHTML(p.category)}</div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.subtitle)}</p><span class="open-project">VIEW CASE STUDY <b>↗</b></span></div></a>`).join('');
}


function videoHTML(video) {
    if (!video || (Array.isArray(video) && video.length === 0)) {
        return '<p class="empty-note">In development.</p>';
    }

    // Supports both one video and multiple videos
    const videos = Array.isArray(video) ? video : [video];

    return videos.map((url) => {
        if (url.startsWith('https://www.youtube.com/embed/')) {
            return `
                <div class="video-wrap">
                    <iframe
                        src="${escapeHTML(url)}"
                        title="Gameplay video"
                        loading="lazy"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
            `;
        }

        return `
            <video class="video-player" controls preload="metadata">
                <source src="${escapeHTML(url)}" type="video/mp4">
                Your browser does not support HTML video.
            </video>
        `;
    }).join('');
}


function openProject(id) {
    const p = projects.find(p => p.id === id);
    if (!p) return showHome();
    $('#home').hidden = true;
    $('#case-study').hidden = false;
    const gallery = p.images.length ? p.images.map(item => {
        const src = typeof item === 'string' ? item : item.src;
        const caption = typeof item === 'string' ? '' : item.caption;
        return `<figure><img src="${escapeHTML(src)}" alt="${escapeHTML(caption || p.title + ' screenshot')}" loading="lazy"><figcaption>${escapeHTML(caption)}</figcaption></figure>`;
    }).join('') : '<p class="empty-note">In development.</p>';
    $('#case-content').innerHTML = `<div class="case-heading"><div class="eyebrow">${escapeHTML(p.number)} / ${escapeHTML(p.category)}</div><h1>${escapeHTML(p.title)}</h1><p>${escapeHTML(p.subtitle)}</p></div>${media(p, 'case-cover')}<div class="case-layout"><div class="case-main"><div class="case-section"><span class="section-num">01 / THE PROJECT</span><h2>Overview</h2><p>${escapeHTML(p.overview)}</p></div><div class="case-section"><span class="section-num">02 / DESIGN INTENT</span><h2>Design goals</h2><ul>${p.goals.map(g => `<li>${escapeHTML(g)}</li>`).join('')}</ul></div><div class="case-section"><span class="section-num">03 / PROCESS</span><h2>Layouts & iteration</h2><div class="gallery">${gallery}</div></div><div class="case-section"><span class="section-num">04 / IN MOTION</span><h2>Gameplay</h2>${videoHTML(p.video)}
    ${p.gameLink ? `
    <section class="game-download">
        <span class="section-label">PLAYABLE BUILD</span>
        <h2>Experience the project</h2>
        <p>
            Explore the game firsthand and experience
            its gameplay and level design.
        </p>

        <a
            href="${p.gameLink}"
            target="_blank"
            rel="noopener noreferrer"
            class="game-download-button"
        >
            ${p.gameLinkText || 'Play Game'}
            <span aria-hidden="true">↗</span>
        </a>
    </section>
` : ''}</div><div class="case-section"><span class="section-num">05 / LEARNINGS</span><h2>Reflection</h2><p>${escapeHTML(p.reflection)}</p></div></div><aside class="case-aside"><div><span>ROLE</span><p>${escapeHTML(p.role)}</p></div><div><span>TOOLS</span><p>${escapeHTML(p.tools)}</p></div><div><span>STATUS</span><p>${escapeHTML(p.status)}</p></div></aside></div>`;
    window.scrollTo(0, 0);
    document.title = p.title + ' — Level Design Portfolio';
}

function showHome() {
    $('#home').hidden = false;
    $('#case-study').hidden = true;
    document.title = 'Level Design — Portfolio';
}

function route() {
    const hash = decodeURIComponent(location.hash.slice(1));
    if (hash.startsWith('project-')) openProject(hash.slice(8)); else showHome();
}

$('#back').addEventListener('click', () => {
    location.hash = 'work';
});
window.addEventListener('hashchange', route);
renderWork();
route();
