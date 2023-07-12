export default function happybinGrown() {
  const donatePercent = document.querySelectorAll('.donation__cont__percent');
  const donateProgress = document.querySelectorAll(
    '.donation__cont__bar__progress'
  );
  const donateMoney = document.querySelectorAll('.donation__cont__money');

  donateProgress.forEach((percent, index) => {
    percent.style.transition = 'width 3s';
    percent.style.width = `${donatePercent[index].innerText}%`;
  });

  function insertNum() {
    donateMoney.forEach((money) => {
      let maxNum = parseInt(money.innerText.replace(/,/g, ''), 10);
      let totalTime = 3000;
      increaseNum(performance.now(), 0, maxNum, money, totalTime);
    });
  }

  const increaseNum = (startTime, currentNum, maxNum, money, totalTime) => {
    let elapsedTime = performance.now() - startTime;
    let progress = Math.min(elapsedTime / totalTime, 1); // Ensure progress doesn't go above 100%
    let currentDisplayNum = Math.round(maxNum * progress);

    money.innerText = currentDisplayNum
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    if (progress < 1) {
      // If progress is less than 100%
      requestAnimationFrame(() =>
        increaseNum(startTime, currentNum, maxNum, money, totalTime)
      );
    }
  };
  insertNum();
}
