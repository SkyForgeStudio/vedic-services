const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.service-card');
tabs.forEach(tab => {
tab.addEventListener('click', () => {
// Update active tab
tabs.forEach(t => t.classList.remove('active'));
tab.classList.add('active');
const filter = tab.dataset.tab;
cards.forEach(card => {
if (filter === 'all' || card.dataset.category === filter) {
card.style.display = 'block';
} else {
card.style.display = 'none';
}
});
});
});