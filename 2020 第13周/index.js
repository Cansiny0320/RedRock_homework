const viewHeight = document.documentElement.clientHeight;
const goTopBtn = document.querySelector(".go_top");
function inSight(el) {
	return el.getBoundingClientRect().top < viewHeight;
}
function loadImg(el) {
	if (!el.src) {
		el.src = el.dataset.original;
	}
}
function checkImgs() {
	const imgs = document.querySelectorAll(".friends .image");
	imgs.forEach(el => {
		if (inSight(el)) {
			loadImg(el);
		}
	});
}

function showGoTopBtn() {
	if (document.documentElement.scrollTop > 1000) {
		goTopBtn.classList.add("active");
	} else {
		goTopBtn.classList.remove("active");
	}
}

function handleGoTopClick() {
	let timer = setInterval(() => {
		if (document.documentElement.scrollTop > 0) {
			document.documentElement.scrollTop -=
				document.documentElement.scrollTop / 5;
		} else {
			clearInterval(timer);
		}
	}, 1000 / 60);
}
window.addEventListener("scroll", checkImgs, false);
window.addEventListener("scroll", showGoTopBtn, false);
goTopBtn.addEventListener("click", handleGoTopClick, false);
window.onload = function () {
	checkImgs();
	showGoTopBtn();
};
