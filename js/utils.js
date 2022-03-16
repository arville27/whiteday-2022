const data = await fetch('/data.json');
const auspigirls = await data.json();

function generateCard({ name, img, domisili, id }) {
    return $('<div>', { class: 'col-md-4 col-sm-6 gallery-grid' }).append(
        $('<div>', { class: 'gallery-single fix' }).append([
            $('<img>', { src: img, class: 'img-fluid', alt: 'Image' }),
            $('<div>', { class: 'box-content' }).append(
                $('<div>', { class: 'inner-content' }).append([
                    $('<p>', { class: 'title' }).text(name),
                    $('<span>', { class: 'post' }).text(domisili),
                ])
            ),
            $('<ul>', { class: 'icon' }).append([
                $('<li>').append(
                    $('<a>', {
                        class: 'fa regular fa-user profile',
                        'data-id': id,
                    })
                ),
                $('<li>').append($('<a>', { class: 'fa regular fa-envelope impression', 'data-id': id })),
            ]),
        ])
    );
}

function generateBox(color, title, content, icon) {
    return $('<div>', { class: 'box' }).append([
        $('<div>', { class: 'box-title' }).append([
            $('<i>', { class: 'material-icons', style: `color: ${color};` }).text(icon),
            $('<span>').text(title),
        ]),
        $('<div>', { class: 'box-content' }).text(content),
    ]);
}

function generateBoxSong(color, title, content, icon, url) {
    return $('<div>', { class: 'box' }).append([
        $('<div>', { class: 'box-title' }).append([
            $('<i>', { class: 'material-icons', style: `color: ${color};` }).text(icon),
            $('<span>').text(title),
        ]),
        $('<div>', { class: 'box-content' }).append(
            $('<a>', { href: url, class: 'song-url', target: '_blank', style: `color: ${color}` }).text(
                content
            )
        ),
    ]);
}

function profileCard({ name, nickname, img, profile }) {
    return $('<div>', { class: 'card-container' }).append([
        $('<i>', { class: 'material-icons unselectable close-btn' }).text('close'),
        $('<div>', { class: 'section-1' }).append([
            $('<div>', { class: 'photo-container', style: `outline-color: ${profile.hexColor};` }).append([
                $('<img>', { class: 'photo', src: img }),
                $('<div>', { id: 'animation-frame' }),
            ]),
            $('<div>', { class: 'name-container' }).append([
                $('<div>', { class: 'title-name' }).text(name),
                $('<div>', { class: 'title-nickname' }).text(nickname),
            ]),
        ]),
        $('<div>', { class: 'section-2' }).append([
            $('<div>', { class: 'left-column' }).append([
                generateBox(profile.hexColor, 'Favorite Color', profile.favoriteColor, 'palette'),
                generateBoxSong(
                    profile.hexColor,
                    'Favorite Song',
                    profile.favoriteSong,
                    'music_note',
                    profile.songUrl
                ),
                generateBox(profile.hexColor, 'Favorite Food', profile.favoriteFood, 'restaurant'),
                generateBox(profile.hexColor, 'Dream Destination', profile.dreamDestination, 'place'),
            ]),
            $('<div>', { class: 'right-column' }).append([
                generateBox(profile.hexColor, 'Hobbies', profile.hobby, 'favorite'),
                generateBox(profile.hexColor, 'Life Goals', profile.lifeGoals, 'auto_graph'),
                generateBox(profile.hexColor, 'My type of guy', profile.type, 'male'),
            ]),
        ]),
    ]);
}

function impressionCard({ inisial, value }) {
    return $('<div>', { class: 'imp-box' }).append([
        $('<div>', { class: 'imp-box-content' }).text(value),
        $('<div>', { class: 'imp-box-title' }).text(`- ${inisial}`),
    ]);
}

function generateImpressionPopup({ name, impression }) {
    return $('<div>', { class: 'imp-card-container' }).append([
        $('<i>', { class: 'material-icons unselectable close-btn imp-close' }).text('close'),
        $('<div>', { class: 'imp-title' }).text(`Auspiboys Impressions of ${name}`),
        $('<div>', { class: 'imp-container' }).append(impression.map((imp) => impressionCard(imp))),
    ]);
}

export { generateCard, auspigirls, profileCard, generateImpressionPopup };
