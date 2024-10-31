const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
	if (inputBox.value === '') alert('you must write something');
	else {
		const html = `
    <li>
      <input type='checkbox'>
      <p>${inputBox.value}</p>
      <button>x</button>
    </li>
    `;

		listContainer.insertAdjacentHTML('afterbegin', html);
	}
	inputBox.value = '';
}

listContainer.addEventListener('click', function (e) {
	const btn = e.target.closest('button');
	if (!btn) return;
	const parent = btn.parentElement;
	parent.remove();
});
