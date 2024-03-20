export default function randomizer() {
    const holes = document.querySelectorAll('.hole');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < holes.length; i++) {
        if (holes[i].className === 'hole hole_has-mole') {
            holes[i].classList.remove('hole_has-mole');
            const rand = Math.floor(Math.random() * (16 - 1) + 1);
            holes[rand].classList.add('hole_has-mole');
        }
    }
}
