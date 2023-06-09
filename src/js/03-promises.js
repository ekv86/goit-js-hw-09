import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay)
  })

}

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onStart);

function onStart(evt) {
  evt.preventDefault();
  const formItems = formEl.elements;
  let amount = Number(formItems.amount.value);
  let delay = Number(formItems.delay.value);
  let step = Number(formItems.step.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;

  }
}

